"use strict";

const DOMY_MATEMATIKY = Array.from({ length: 30 }, (_, index) => String(index + 1).padStart(2, "0"))
  .filter((id) => id !== "06");
const SPRAVNE_NA_BONUS = 10;

function stavMatematiky(priebeh) {
  return {
    uroven: 1,
    poradie: 0,
    odpovedeUrovne: 0,
    spravneDoKroku: 0,
    spravneDoBonusu: 0,
    kroky: 0,
    blok20: [],
    blok30: [],
    poslednych40: [],
    nedavne: [],
    chybyOtazok: {},
    skoro: [],
    dalsiDen: [],
    seriePodlaPasma: {},
    odznaky: [],
    odmietnutePostupy: 0,
    ponukaUrovne: null,
    pokracovanie: null,
    ...priebeh.matematika,
  };
}

function pravidlaOdmenMatematiky(matematika) {
  const opakuje = matematika.odmietnutePostupy >= 2 &&
    matematika.poslednych40.length === 40 && matematika.poslednych40.filter(Boolean).length >= 38;
  return opakuje
    ? { odmena: 3, prahKroku: 15, stropMinci: 400, stropKrokov: 6 }
    : { odmena: 5, prahKroku: 10, stropMinci: 800, stropKrokov: 12 };
}

function miestnyDatum(datum = new Date()) {
  return [datum.getFullYear(), datum.getMonth() + 1, datum.getDate()]
    .map((hodnota) => String(hodnota).padStart(2, "0")).join("-");
}

function vyberNahodne(zoznam, nahodne) {
  return zoznam[Math.floor(nahodne() * zoznam.length)];
}

function aktivnaMatematika(stav) {
  const matematika = stavMatematiky(stav.priebeh);
  const { pokracovanie, ponukaUrovne } = matematika;
  if (pokracovanie) {
    const posledny = stav.posledne[pokracovanie.druh];
    if (posledny?.id === pokracovanie.id) return { druh: "vysledok", ...posledny };
  }
  if (stav.cakajuce.bonus) return { druh: "bonus", ...stav.cakajuce.bonus };
  if (stav.cakajuce.skuska) return { druh: "skuska", ...stav.cakajuce.skuska };
  if (ponukaUrovne) return { druh: "ponuka", ...ponukaUrovne };
  return stav.cakajuce.otazka ? { druh: "otazka", ...stav.cakajuce.otazka } : null;
}

function vytvoritBezneZadanie(stav, dnes = miestnyDatum(), nahodne = Math.random) {
  if (stav.nastavenia.vek === null || aktivnaMatematika(stav)) return null;
  const mat = stavMatematiky(stav.priebeh);
  const poradove = mat.poradie + 1;
  const skora = mat.skoro.find((chyba) => chyba.otazka.uroven === mat.uroven && chyba.po <= poradove);
  if (skora) return { ...skora.otazka, navrat: "skoro" };

  const starsia = mat.dalsiDen.find((chyba) => chyba.otazka.uroven === mat.uroven && chyba.datum < dnes);
  if (starsia) return { ...starsia.otazka, navrat: "dalsiDen" };

  const sada = matematickeOtazky(mat.uroven);
  const nove = sada.filter((otazka) => !mat.nedavne.includes(otazka.idOtazky));
  return vyberNahodne(nove.length ? nove : sada, nahodne);
}

function vytvoritBonusoveZadanie(mat, nahodne) {
  const ciel = Math.min(mat.uroven + 1, 9);
  for (let uroven = ciel; uroven >= 1; uroven -= 1) {
    const sada = matematickeOtazky(uroven);
    if (sada.length === 0) continue;
    const bezChyby = sada.filter((otazka) => !Object.hasOwn(mat.chybyOtazok, otazka.idOtazky));
    if (bezChyby.length) {
      const najlahsia = Math.min(...bezChyby.map(({ narocnost }) => narocnost));
      return vyberNahodne(bezChyby.filter(({ narocnost }) => narocnost === najlahsia), nahodne);
    }
    const najstarsia = Math.min(...sada.map(({ idOtazky }) => mat.chybyOtazok[idOtazky]));
    return vyberNahodne(sada.filter(({ idOtazky }) => mat.chybyOtazok[idOtazky] === najstarsia), nahodne);
  }
  throw new Error("Chýba základná sada matematiky.");
}

function vytvoritSkuskoveZadanie(uroven, nahodne) {
  const ciel = Math.min(uroven + 2, 9);
  const sada = matematickeOtazky(ciel);
  let dostupne = [...sada];
  const otazky = Array.from({ length: 10 }, () => {
    if (!dostupne.length) dostupne = [...sada];
    return dostupne.splice(Math.floor(nahodne() * dostupne.length), 1)[0];
  });
  return { ...otazky[0], skuska: { otazky, odpovede: [], povodnaUroven: uroven } };
}

function ciselneHodnoty(odpoved) {
  const text = odpoved.trim().replace(/[−–]/g, "-").replace(/\s+/g, " ").replace(/^([+-]) /, "$1");
  const moznosti = new Set();
  if (/^[+-]?(?:\d+(?:[.,]\d+)?|[.,]\d+)$/.test(text)) {
    moznosti.add(Number(text.replace(",", ".")));
  }
  for (const [skupina, desatinna] of [[",", "."], [".", ","], [" ", "."], [" ", ","]]) {
    const znak = (s) => s === "." ? "\\." : s;
    const vzor = new RegExp("^[+-]?\\d{1,3}(?:" + znak(skupina) + "\\d{3})+(?:" +
      znak(desatinna) + "\\d+)?$");
    if (vzor.test(text)) moznosti.add(Number(text.replaceAll(skupina, "").replace(desatinna, ".")));
  }
  const zlomok = /^([+-]?\d+)\s*\/\s*([+-]?\d+)$/.exec(text);
  if (zlomok && Number(zlomok[2]) !== 0) moznosti.add(Number(zlomok[1]) / Number(zlomok[2]));
  return [...moznosti].filter(Number.isFinite);
}

function spravnaMatematickaOdpoved(odpoved, ocakavana) {
  const spravna = ciselneHodnoty(ocakavana)[0];
  return ciselneHodnoty(odpoved).includes(spravna);
}

function obnovitPocitadlaUrovne(mat, uroven) {
  Object.assign(mat, {
    uroven,
    odpovedeUrovne: 0,
    blok20: [],
    blok30: [],
    poslednych40: [],
    nedavne: [],
    odmietnutePostupy: 0,
    ponukaUrovne: null,
  });
}

function zapisatChybuMatematiky(mat, zadanie, datum) {
  const { navrat, ...otazka } = zadanie;
  otazka.uroven ??= mat.uroven;
  mat.chybyOtazok = { ...mat.chybyOtazok, [otazka.idOtazky]: mat.poradie };
  if (!mat.skoro.some((chyba) => chyba.otazka.idOtazky === otazka.idOtazky)) {
    mat.skoro = [...mat.skoro, { otazka, po: mat.poradie + 4 }].slice(-20);
  }
  if (!mat.dalsiDen.some((chyba) => chyba.otazka.idOtazky === otazka.idOtazky)) {
    mat.dalsiDen = [...mat.dalsiDen, { otazka, datum }].slice(-30);
  }
}

function vyhodnotitBezneZadanie(priebeh, mat, zadanie, vysledok, datum, nahodne) {
  const pravidla = pravidlaOdmenMatematiky(mat);
  const { spravna } = vysledok;
  const dalsiePokusy = [];
  const predoslyDen = priebeh.denneOdmeny;
  const denne = predoslyDen && predoslyDen.datum >= datum
    ? { ...predoslyDen }
    : { datum, mince: 0, kroky: 0 };

  mat.poradie += 1;
  mat.odpovedeUrovne += 1;
  mat.poslednych40 = [...mat.poslednych40, spravna].slice(-40);
  mat.nedavne = [...mat.nedavne, zadanie.idOtazky].slice(-20);
  if (zadanie.navrat) {
    mat[zadanie.navrat] = mat[zadanie.navrat].filter(({ otazka }) => otazka.idOtazky !== zadanie.idOtazky);
  }

  let mince = priebeh.mince ?? 0;
  function pripisat(suma) {
    const prijem = Math.min(suma, Math.max(0, pravidla.stropMinci - denne.mince));
    mince += prijem;
    denne.mince += prijem;
  }
  const pasmo = mat.uroven;
  const seria = spravna ? Math.min(5, (mat.seriePodlaPasma[pasmo] ?? 0) + 1) : 0;
  mat.seriePodlaPasma = { ...mat.seriePodlaPasma, [pasmo]: seria };
  if (spravna) {
    mat.spravneDoBonusu += 1;
    if (seria === 5 && !mat.odznaky.includes(pasmo)) {
      mat.odznaky = [...mat.odznaky, pasmo];
      vysledok.odznak = true;
    }
    priebeh.hviezdy = (priebeh.hviezdy ?? 0) + 1;
    pripisat(pravidla.odmena);
    if (denne.kroky < pravidla.stropKrokov) {
      mat.spravneDoKroku += 1;
      if (mat.spravneDoKroku >= pravidla.prahKroku) {
        mat.spravneDoKroku -= pravidla.prahKroku;
        const dom = DOMY_MATEMATIKY[mat.kroky];
        mat.kroky += 1;
        denne.kroky += 1;
        vysledok.krok = true;
        if (dom) {
          priebeh.postaveneDomy = [...(priebeh.postaveneDomy ?? ["06"]), dom];
          vysledok.dom = dom;
        }
        pripisat(25 + 2 * (priebeh.parcely?.length ?? 0));
      }
    }
  } else {
    if (denne.mince < pravidla.stropMinci) mince = Math.max(0, mince - 2);
    zapisatChybuMatematiky(mat, zadanie, denne.datum);
  }
  vysledok.zmenaMinci = mince - (priebeh.mince ?? 0);
  priebeh.mince = mince;
  priebeh.denneOdmeny = denne;

  mat.blok20 = [...mat.blok20, spravna];
  let vzniklaSkuska = false;
  if (mat.blok20.length === 20) {
    const spravne = mat.blok20.filter(Boolean).length;
    mat.blok20 = [];
    if (spravne >= 19 && mat.uroven < 9) {
      vzniklaSkuska = true;
      dalsiePokusy.push({ druh: "skuska", zadanie: vytvoritSkuskoveZadanie(mat.uroven, nahodne) });
    }
    if (spravne < 10 && mat.uroven > 1) mat.ponukaUrovne = { id: vysledok.id, ciel: mat.uroven - 1 };
  }

  mat.blok30 = [...mat.blok30, spravna];
  if (mat.blok30.length === 30) {
    const spravne = mat.blok30.filter(Boolean).length;
    mat.blok30 = [];
    if (!vzniklaSkuska && mat.odpovedeUrovne >= 100 && spravne >= 26 && mat.uroven < 9) {
      mat.ponukaUrovne = { id: vysledok.id, ciel: mat.uroven + 1 };
    }
  }

  if (mat.spravneDoBonusu === SPRAVNE_NA_BONUS) {
    mat.spravneDoBonusu = 0;
    dalsiePokusy.push({ druh: "bonus", zadanie: vytvoritBonusoveZadanie(mat, nahodne) });
  }
  return dalsiePokusy;
}

function vyhodnotitBonusoveZadanie(priebeh, mat, vysledok, nahodne) {
  if (!vysledok.spravna) {
    mat.chybyOtazok = { ...mat.chybyOtazok, [vysledok.zadanie.idOtazky]: mat.poradie };
    return;
  }

  const veci = priebeh.veci ?? [];
  const chybajuce = katalogVeciL1.filter(({ id }) => !veci.includes(id));
  if (chybajuce.length) {
    const novaVec = vyberNahodne(chybajuce, nahodne);
    priebeh.veci = [...veci, novaVec.id];
    vysledok.vec = novaVec.id;
  } else {
    priebeh.mince = (priebeh.mince ?? 0) + 10;
    vysledok.zmenaMinci = 10;
  }
}

function vyhodnotitSkuskoveZadanie(mat, zadanie, vysledok) {
  const skuska = zadanie.skuska;
  const odpovede = [...skuska.odpovede, { odpoved: vysledok.odpoved, spravna: vysledok.spravna }];
  if (odpovede.length < skuska.otazky.length) {
    return [{
      druh: "skuska",
      zadanie: { ...skuska.otazky[odpovede.length], skuska: { ...skuska, odpovede } },
    }];
  }

  const spravne = odpovede.filter(({ spravna }) => spravna).length;
  const posun = spravne >= 8 ? 2 : spravne >= 6 ? 1 : 0;
  const uroven = Math.min(skuska.povodnaUroven + posun, 9);
  if (uroven > mat.uroven) obnovitPocitadlaUrovne(mat, uroven);
  vysledok.koniecSkusky = { spravne, uroven, odpovede };
  return [];
}

function vyhodnotitMatematickuOdpoved(pokus, odpoved, datum = miestnyDatum(), nahodne = Math.random) {
  const { druh, id, stav, zadanie } = pokus;
  const aktualna = aktivnaMatematika(stav);
  if (stav.nastavenia.vek === null || aktualna?.id !== id || aktualna.druh !== druh) return null;
  const spravna = spravnaMatematickaOdpoved(odpoved, zadanie.spravnaOdpoved);
  const priebeh = { ...stav.priebeh };
  const mat = stavMatematiky(priebeh);
  const vysledok = { id, druh, odpoved, zadanie, spravna };
  let dalsiePokusy = [];

  if (druh === "otazka") {
    dalsiePokusy = vyhodnotitBezneZadanie(priebeh, mat, zadanie, vysledok, datum, nahodne);
  } else if (druh === "bonus") {
    vyhodnotitBonusoveZadanie(priebeh, mat, vysledok, nahodne);
  } else if (druh === "skuska") {
    dalsiePokusy = vyhodnotitSkuskoveZadanie(mat, zadanie, vysledok);
  }

  mat.pokracovanie = !spravna || druh === "bonus" || vysledok.koniecSkusky ? { druh, id } : null;
  priebeh.matematika = mat;
  return { vysledok, priebeh, dalsiePokusy };
}

function pokracovatVMatematike(stav, id) {
  const mat = stavMatematiky(stav.priebeh);
  if (mat.pokracovanie?.id !== id) return null;
  mat.pokracovanie = null;
  return { ...stav.priebeh, matematika: mat };
}

function rozhodnutOUrovni(stav, id, prijat) {
  const mat = stavMatematiky(stav.priebeh);
  const aktivna = aktivnaMatematika(stav);
  if (aktivna?.druh !== "ponuka" || aktivna.id !== id) return null;

  if (prijat) {
    obnovitPocitadlaUrovne(mat, aktivna.ciel);
  } else {
    if (aktivna.ciel > mat.uroven) mat.odmietnutePostupy += 1;
    mat.ponukaUrovne = null;
  }
  return { ...stav.priebeh, matematika: mat };
}
