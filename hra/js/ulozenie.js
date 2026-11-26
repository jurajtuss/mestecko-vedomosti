"use strict";

const KLUC_ULOZENIA_HRY = "mestecko-vedomosti-stav";
const KLUC_ULOZENIA_K02 = "mestecko-vedomosti-k02";
const VERZIA_ULOZENIA_HRY = 4;
const DRUHY_POKUSOV = Object.freeze(["otazka", "bonus", "skuska", "nakup"]);

function jeZaznamUlozenia(hodnota) {
  return hodnota !== null && typeof hodnota === "object" && !Array.isArray(hodnota);
}

function skopirovatJson(hodnota) {
  return JSON.parse(JSON.stringify(hodnota, (_kluc, polozka) => {
    if (polozka === undefined || typeof polozka === "function" ||
        typeof polozka === "symbol" || (typeof polozka === "number" && !Number.isFinite(polozka))) {
      throw new TypeError("Herný stav musí obsahovať údaje vo formáte JSON.");
    }
    return polozka;
  }));
}

function prazdneSlotyPokusov() {
  return Object.fromEntries(DRUHY_POKUSOV.map((druh) => [druh, null]));
}

function novyHernyStav() {
  return {
    verzia: VERZIA_ULOZENIA_HRY,
    revizia: 0,
    nastavenia: { jazyk: "sk", zvuk: true, zvolenyJazyk: false, vek: null },
    odpovedK02: null,
    cakajuce: prazdneSlotyPokusov(),
    posledne: prazdneSlotyPokusov(),
    priebeh: {},
  };
}

function platneNastaveniaUlozenia(nastavenia) {
  return jeZaznamUlozenia(nastavenia) &&
    (nastavenia.jazyk === "sk" || nastavenia.jazyk === "en") &&
    typeof nastavenia.zvuk === "boolean";
}

function jeIdPokusu(id) {
  return typeof id === "string" && id.length > 0;
}

function platneNastaveniaHry(nastavenia) {
  return platneNastaveniaUlozenia(nastavenia) &&
    typeof nastavenia.zvolenyJazyk === "boolean" &&
    (nastavenia.vek === null ||
      (nastavenia.zvolenyJazyk && Number.isSafeInteger(nastavenia.vek) && nastavenia.vek > 0));
}

function platnyHernyStav(stav, verzia = VERZIA_ULOZENIA_HRY) {
  if (!jeZaznamUlozenia(stav) || stav.verzia !== verzia ||
      !Number.isSafeInteger(stav.revizia) || stav.revizia < 0 ||
      !(verzia === 1 ? platneNastaveniaUlozenia(stav.nastavenia) : platneNastaveniaHry(stav.nastavenia)) ||
      !(stav.odpovedK02 === null || typeof stav.odpovedK02 === "string") ||
      !jeZaznamUlozenia(stav.cakajuce) || !jeZaznamUlozenia(stav.posledne) ||
      !jeZaznamUlozenia(stav.priebeh)) return false;

  const ids = new Set();
  return DRUHY_POKUSOV.every((druh) => {
    const caka = stav.cakajuce[druh];
    const hotovo = stav.posledne[druh];
    return [[caka, "zadanie"], [hotovo, "vysledok"]].every(([polozka, kluc]) => {
      if (polozka === null) return true;
      if (!jeZaznamUlozenia(polozka) || !jeIdPokusu(polozka.id) ||
          !jeZaznamUlozenia(polozka[kluc]) || ids.has(polozka.id)) return false;
      ids.add(polozka.id);
      return true;
    });
  });
}

function migrovatK02(zapis) {
  const stav = novyHernyStav();
  if (zapis === null) return stav;
  const data = JSON.parse(zapis);
  if (!platneNastaveniaUlozenia(data) || Object.hasOwn(data, "verzia") ||
      !(data.odpoved === null || typeof data.odpoved === "string")) {
    throw new Error("Neplatné uloženie K02.");
  }
  stav.nastavenia = { jazyk: data.jazyk, zvuk: data.zvuk, zvolenyJazyk: true, vek: null };
  stav.odpovedK02 = data.odpoved;
  return stav;
}

function migrovatBonusZVerzie2(stav) {
  const matematika = stav.priebeh.matematika;
  if (!jeZaznamUlozenia(matematika)) return stav.priebeh;

  // Starý bonus uzatváral každú desiatku bežných odpovedí vrátane chýb.
  const { poradie, odpovedeUrovne } = matematika;
  const rozpracovane = Number.isSafeInteger(poradie) && poradie > 0 ? poradie % 10 : 0;
  const naUrovni = Number.isSafeInteger(odpovedeUrovne) && odpovedeUrovne >= 0
    ? Math.min(rozpracovane, odpovedeUrovne) : rozpracovane;
  let spravneDoBonusu = 0;

  if (rozpracovane > 0) {
    // Všetky tri polia končia tým istým výsledkom a pri zmene úrovne sa nulujú.
    const historie = [matematika.poslednych40, matematika.blok30, matematika.blok20]
      .filter((polozky) => Array.isArray(polozky) && polozky.every((polozka) => typeof polozka === "boolean"));
    const najdlhsia = historie.reduce((dlhsia, polozky) => polozky.length > dlhsia.length ? polozky : dlhsia, []);
    if (naUrovni > 0 && najdlhsia.length > 0) {
      spravneDoBonusu = najdlhsia.slice(-naUrovni).filter(Boolean).length;
    } else {
      // Keď história chýba, započítame nanajvýš poslednú doloženú správnu odpoveď.
      const posledna = stav.posledne.otazka?.vysledok;
      if (posledna?.druh === "otazka" && posledna.zadanie?.skolskyPredmet === "matematika" &&
          posledna.spravna === true) spravneDoBonusu = 1;
    }
  }

  return { ...stav.priebeh, matematika: { ...matematika, spravneDoBonusu } };
}

function migrovatSerieMatematiky(priebeh) {
  if (!jeZaznamUlozenia(priebeh.matematika)) return priebeh;
  // Staré uloženie pozná iba sériu práve zvolenej úrovne.
  const { seria, ...matematika } = priebeh.matematika;
  const { uroven } = matematika;
  const seriePodlaPasma = {};
  if (Number.isInteger(uroven) && uroven >= 1 && uroven <= 9 &&
      Number.isSafeInteger(seria) && seria > 0) {
    seriePodlaPasma[uroven] = Math.min(5, seria);
  }
  return { ...priebeh, matematika: { ...matematika, seriePodlaPasma } };
}

function vytvoritIdPokusu() {
  const bajty = globalThis.crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bajty, (bajt) => bajt.toString(16).padStart(2, "0")).join("");
}

function vytvoritUlozenieHry({
  ziskatUlozisko = () => window.localStorage,
  ziskatZamky = () => globalThis.navigator?.locks,
  docasnaUkazka = false,
} = {}) {
  let stav = novyHernyStav();
  let ulozisko;
  let zamky;
  let inicializacia;
  let stavUlozenia = "neoverene";
  let idUkazky = 0;

  function prehlad(vysledok = "nacitane") {
    return { vysledok, stavUlozenia, stav: skopirovatJson(stav) };
  }

  function nacitatZapis(kluc) {
    try {
      return { zapis: ulozisko.getItem(kluc) };
    } catch {
      stavUlozenia = "odmietnute";
      return null;
    }
  }

  function zapisat(kluc, zapis) {
    try {
      ulozisko.setItem(kluc, zapis);
      if (ulozisko.getItem(kluc) !== zapis) throw new Error("Zápis sa nezachoval.");
      return true;
    } catch {
      stavUlozenia = "odmietnute";
      return false;
    }
  }

  function nacitatHernyStav(zapis, povolitMigraciu = false) {
    try {
      const data = JSON.parse(zapis);
      if (jeZaznamUlozenia(data) && Number.isInteger(data.verzia) && data.verzia > VERZIA_ULOZENIA_HRY) {
        stavUlozenia = "novsiaVerzia";
        return false;
      }
      if (povolitMigraciu && platnyHernyStav(data, 1)) {
        // Zachováme čakajúce zadania, ID pokusov aj už uložené výsledky K04.
        stav = {
          ...data,
          verzia: VERZIA_ULOZENIA_HRY,
          nastavenia: { ...data.nastavenia, zvolenyJazyk: true, vek: null },
          priebeh: migrovatSerieMatematiky(data.priebeh),
        };
        return { migrovane: true };
      }
      if (povolitMigraciu && (data?.verzia === 2 || data?.verzia === 3) && platnyHernyStav(data, data.verzia)) {
        const priebeh = data.verzia === 2 ? migrovatBonusZVerzie2(data) : data.priebeh;
        stav = { ...data, verzia: VERZIA_ULOZENIA_HRY, priebeh: migrovatSerieMatematiky(priebeh) };
        return { migrovane: true };
      }
      if (!platnyHernyStav(data)) throw new Error("Neplatný herný stav.");
      stav = data;
      return { migrovane: false };
    } catch {
      stavUlozenia = "poskodene";
      return false;
    }
  }

  function nacitatPriStarte() {
    const ulozeny = nacitatZapis(KLUC_ULOZENIA_HRY);
    if (!ulozeny) return null;
    if (ulozeny.zapis !== null) {
      const nahraty = nacitatHernyStav(ulozeny.zapis, true);
      return nahraty ? { ...ulozeny, ...nahraty } : null;
    }

    const stary = nacitatZapis(KLUC_ULOZENIA_K02);
    if (!stary) return null;
    try {
      stav = migrovatK02(stary.zapis);
    } catch {
      stavUlozenia = "poskodene";
      return null;
    }
    return ulozeny;
  }

  async function pripravitUlozenie() {
    try {
      ulozisko = ziskatUlozisko();
      zamky = ziskatZamky();
      if (typeof zamky?.request !== "function") {
        if (nacitatPriStarte()) stavUlozenia = "bezZamku";
        return;
      }

      await zamky.request(KLUC_ULOZENIA_HRY, { mode: "exclusive" }, () => {
        const ulozeny = nacitatPriStarte();
        if (!ulozeny) return;

        if (ulozeny.zapis === null || ulozeny.migrovane) {
          // Prvé uloženie súčasne overí zápis a označí ukončenú migráciu.
          if (!zapisat(KLUC_ULOZENIA_HRY, JSON.stringify(stav))) return;
        } else {
          // Overíme zápis pred hraním, pričom existujúca uložená hra zostane nedotknutá.
          const sonda = KLUC_ULOZENIA_HRY + "-sonda-" + vytvoritIdPokusu();
          if (!zapisat(sonda, "1")) return;
          ulozisko.removeItem(sonda);
        }
        stavUlozenia = "dostupne";
      });
    } catch {
      stavUlozenia = "odmietnute";
    }
  }

  function pripravitRaz() {
    inicializacia ??= pripravitUlozenie();
    return inicializacia;
  }

  function inicializovat() {
    return pripravitRaz().then(() => prehlad());
  }

  function upravit(uprava, trvalo) {
    const navrh = skopirovatJson(stav);
    const vysledok = uprava(navrh);
    if (!vysledok) return prehlad("bezZmeny");
    if (typeof vysledok === "string") return prehlad(vysledok);

    navrh.revizia += 1;
    if (!platnyHernyStav(navrh)) throw new TypeError("Neplatný návrh uloženia.");
    if (trvalo && !zapisat(KLUC_ULOZENIA_HRY, JSON.stringify(navrh))) {
      return prehlad("neulozene");
    }
    stav = navrh;
    return prehlad(trvalo ? vysledok.uspech : "docasne");
  }

  async function vykonat(uprava) {
    await pripravitRaz();
    let vZamku = false;
    try {
      if (stavUlozenia === "dostupne") {
        return await zamky.request(KLUC_ULOZENIA_HRY, { mode: "exclusive" }, () => {
          vZamku = true;
          if (stavUlozenia !== "dostupne") return prehlad("neulozene");
          const ulozeny = nacitatZapis(KLUC_ULOZENIA_HRY);
          if (!ulozeny) return prehlad("neulozene");
          if (ulozeny.zapis === null) {
            stavUlozenia = "odmietnute";
            return prehlad("neulozene");
          }
          if (!nacitatHernyStav(ulozeny.zapis)) return prehlad("neulozene");
          return uprava ? upravit(uprava, true) : prehlad();
        });
      }
    } catch (chyba) {
      if (vZamku) throw chyba;
      stavUlozenia = "odmietnute";
      return prehlad("neulozene");
    }
    if (!uprava) return prehlad();
    return docasnaUkazka ? upravit(uprava, false) : prehlad("neulozene");
  }

  function vytvoritPokus(navrh, druh, zadanie) {
    if (!DRUHY_POKUSOV.includes(druh) || !jeZaznamUlozenia(zadanie) || navrh.cakajuce[druh]) {
      throw new TypeError("Neplatné alebo obsadené zadanie pokusu.");
    }
    const id = stavUlozenia === "dostupne" ? vytvoritIdPokusu() : "docasny-" + ++idUkazky;
    navrh.cakajuce[druh] = { id, zadanie: skopirovatJson(zadanie) };
  }

  return {
    inicializovat,
    nacitat: () => vykonat(),

    nastavit(zmeny) {
      const kluce = ["jazyk", "zvuk", "zvolenyJazyk", "vek"];
      const zmenene = Object.entries(zmeny).filter(([, hodnota]) => hodnota !== undefined);
      if (zmenene.some(([kluc]) => !kluce.includes(kluc))) throw new TypeError("Neznáme nastavenie hry.");
      return vykonat((navrh) => {
        if (zmenene.every(([kluc, hodnota]) => navrh.nastavenia[kluc] === hodnota)) return null;
        const nove = { ...navrh.nastavenia, ...Object.fromEntries(zmenene) };
        if (!platneNastaveniaHry(nove)) throw new TypeError("Neplatné nastavenia hry.");
        navrh.nastavenia = nove;
        return { uspech: "ulozene" };
      });
    },

    upravitPriebeh(vypocitat) {
      return vykonat((navrh) => {
        const priebeh = vypocitat(skopirovatJson(navrh));
        if (priebeh === null) return null;
        if (!jeZaznamUlozenia(priebeh)) throw new TypeError("Neplatný priebeh hry.");
        navrh.priebeh = skopirovatJson(priebeh);
        return { uspech: "ulozene" };
      });
    },

    // Výrobca zadania sa spustí až po zamknutom načítaní prázdneho slotu.
    otvoritPokus(druh, vytvoritZadanie) {
      if (!DRUHY_POKUSOV.includes(druh)) throw new TypeError("Neznámy druh pokusu.");
      return vykonat((navrh) => {
        if (navrh.cakajuce[druh]) return "obnovene";
        const zadanie = vytvoritZadanie(skopirovatJson(navrh));
        if (zadanie === null) return null;
        vytvoritPokus(navrh, druh, zadanie);
        return { uspech: "otvorene" };
      });
    },

    // Synchrónne pravidlá vrátia { vysledok, priebeh, dalsiePokusy? }.
    // Zvuk a animácia patria volajúcemu po výsledku "potvrdene".
    potvrditPokus(id, vyhodnotit) {
      if (!jeIdPokusu(id)) throw new TypeError("Chýba ID pokusu.");
      return vykonat((navrh) => {
        if (DRUHY_POKUSOV.some((druh) => navrh.posledne[druh]?.id === id)) return "opakovane";
        const druh = DRUHY_POKUSOV.find((nazov) => navrh.cakajuce[nazov]?.id === id);
        if (!druh) return "neplatny";

        const vyhodnotenie = vyhodnotit({
          druh,
          ...skopirovatJson(navrh.cakajuce[druh]),
          stav: skopirovatJson(navrh),
        });
        if (vyhodnotenie === null) return "neplatny";
        const { vysledok, priebeh, dalsiePokusy = [] } = vyhodnotenie;
        if (!jeZaznamUlozenia(vysledok) || !jeZaznamUlozenia(priebeh) || !Array.isArray(dalsiePokusy)) {
          throw new TypeError("Neplatný výsledok pokusu.");
        }

        navrh.cakajuce[druh] = null;
        navrh.posledne[druh] = { id, vysledok: skopirovatJson(vysledok) };
        navrh.priebeh = skopirovatJson(priebeh);
        for (const dalsi of dalsiePokusy) {
          vytvoritPokus(navrh, dalsi.druh, dalsi.zadanie);
        }
        return { uspech: "potvrdene" };
      });
    },
  };
}
