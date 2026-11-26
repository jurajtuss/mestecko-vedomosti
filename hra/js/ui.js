"use strict";

(async () => {
  const textySk = {
    nazov: "Mestečko vedomostí",
    zvukZapnuty: "Zvuk zapnutý",
    zvukVypnuty: "Zvuk vypnutý",
    matematika: "Matematika",
    bonus: "Bonusová otázka",
    skuska: "Krátka skúška",
    urovenNazov: "Úroveň",
    odpovedat: "Odpovedať",
    spravne: "Správne!",
    nespravne: "Správna odpoveď",
    zopakovanie: "Táto otázka sa ti o chvíľu vráti.",
    odznak: "Majster témy!",
    dom: "Pribudol nový dom.",
    novaVec: "★ Výborne! Niečo nové pribudlo v tvojom dome.",
    bonusMince: "★ Výborne! Získavaš 10 mincí.",
    mince: "mincí",
    odmeny: (odmena, krok) => `Správne +${odmena} mincí · Chyba −2 mince · Stavebný krok +${krok} mincí`,
    koniecSkusky: (spravne, uroven) => `Výsledok skúšky ${spravne}/10. Matematika je na úrovni ${uroven}.`,
    ponukaUrovne: (uroven) => `Chceš skúsiť úroveň ${uroven}?`,
    odmietnute: "Prehliadač odmietol uloženie. Neuložené zmeny sa po zatvorení tejto karty stratia.",
    bezZamku: "Prehliadač nevie bezpečne uložiť hru pri viacerých kartách. Neuložené zmeny sa po zatvorení tejto karty stratia.",
    poskodene: "Uloženú hru sa nepodarilo načítať. Neuložené zmeny sa po zatvorení tejto karty stratia.",
    novsiaVerzia: "Uložená hra je z novšej verzie. Neuložené zmeny sa po zatvorení tejto karty stratia.",
  };

  const prvok = (id) => document.getElementById(id);
  const sAkciou = (akcia) => document.querySelectorAll('[data-akcia="' + akcia + '"]');
  const ulozenie = vytvoritUlozenieHry({ docasnaUkazka: true });
  const zvuk = pripravitSkusobnyZvuk(prvok("skusobny-zvuk"));
  const prepinac = prvok("zvuk");
  const volbaJazyka = prvok("jazyk");
  const vek = prvok("vek");
  const odpoved = prvok("odpoved");
  const tlacidloOdpovedat = prvok("odpovedat");
  let stav;
  let stavUlozenia;
  let miesto = "hra";
  let upravaVeku = false;
  let matematikaOtvorena = false;
  let otvaraSaOtazka = false;
  let odosiela = false;
  let rozpisanyPokus = null;
  let oneskorenyVysledok = null;
  let casovac;
  let zvukSkusany = false;
  let menenyZvuk = null;

  function obnovaTlacidla() {
    const otazkaJeViditelna = !odpoved.hidden && !odpoved.disabled;
    tlacidloOdpovedat.disabled = odosiela || !otazkaJeViditelna || rozpisanyPokus === null;
  }

  function zobrazenaMatematika() {
    if (oneskorenyVysledok) return { druh: "vysledok", vysledok: oneskorenyVysledok };
    return aktivnaMatematika(stav);
  }

  function textVysledku(vysledok, texty, jazyk) {
    const { spravna, druh, zadanie, zmenaMinci, koniecSkusky } = vysledok;
    const spravnaOdpoved = zadanie.spravnaOdpoved.replace("-", "−");
    const cislo = jazyk === "sk" ? spravnaOdpoved.replace(".", ",") : spravnaOdpoved;
    const vysvetlenie = zadanie.vysvetlenie?.[jazyk] ??
      (zadanie.idOtazky === "mat-ukazka-01" ? "2 + 3 = 5." : "");
    const vety = [];
    if (spravna) {
      if (vysledok.vec) vety.push(texty.novaVec);
      else if (druh === "bonus" && zmenaMinci === 10) vety.push(texty.bonusMince);
      else vety.push(texty.spravne);
      if (vysledok.odznak) vety.push(texty.odznak);
      if (vysledok.dom) vety.push(texty.dom);
    } else {
      vety.push(texty.nespravne + ": " + cislo + ".");
      if (vysvetlenie) vety.push(vysvetlenie);
      if (druh === "otazka") vety.push(texty.zopakovanie);
    }
    if (druh === "otazka" && zmenaMinci) {
      vety.push((zmenaMinci > 0 ? "+" : "−") + Math.abs(zmenaMinci) + " " + texty.mince + ".");
    }
    if (koniecSkusky) vety.push(texty.koniecSkusky(koniecSkusky.spravne, koniecSkusky.uroven));
    return vety.join(" ");
  }

  function skrytAkcie(akcia, skryt) {
    for (const tlacidlo of sAkciou(akcia)) tlacidlo.hidden = skryt;
  }

  function vykreslitMatematiku(texty, jazyk, otvorena) {
    prvok("otazka-panel").hidden = !otvorena;
    const aktivna = zobrazenaMatematika();
    const vysledok = aktivna?.vysledok;
    const zadanie = aktivna?.zadanie ?? vysledok?.zadanie;
    const druh = vysledok?.druh ?? aktivna?.druh;
    const moznoOdpovedat = otvorena && Boolean(aktivna?.zadanie);
    const ziadaneId = moznoOdpovedat ? aktivna.id : null;
    if (rozpisanyPokus !== ziadaneId) {
      rozpisanyPokus = null;
      odpoved.value = "";
    }
    let nadpis = texty.matematika;
    if (druh === "bonus") nadpis = texty.bonus;
    if (druh === "skuska" && zadanie?.skuska) {
      const { odpovede, otazky } = zadanie.skuska;
      nadpis = texty.skuska + " · " + (odpovede.length + 1) + "/" + otazky.length;
    }
    prvok("otazka-nazov").textContent = nadpis;
    prvok("otazka-text").textContent = zadanie?.texty?.[jazyk] ?? "";
    prvok("vysledok").textContent = vysledok ? textVysledku(vysledok, texty, jazyk)
      : druh === "ponuka" ? texty.ponukaUrovne(aktivna.ciel) : "";

    const ocakavana = zadanie?.spravnaOdpoved ?? "";
    odpoved.inputMode = ocakavana.includes("/") || ocakavana.startsWith("-") ? "text"
      : ocakavana.includes(".") ? "decimal" : "numeric";
    odpoved.hidden = !moznoOdpovedat;
    odpoved.disabled = !moznoOdpovedat;
    tlacidloOdpovedat.hidden = !moznoOdpovedat;
    tlacidloOdpovedat.textContent = texty.odpovedat;
    prvok("cena").hidden = druh === "bonus" || druh === "skuska";
    skrytAkcie("dalsia", !otvorena || aktivna?.druh !== "vysledok" || Boolean(oneskorenyVysledok));
    skrytAkcie("prijat-uroven", !otvorena || druh !== "ponuka");
    skrytAkcie("ostat-na-urovni", !otvorena || druh !== "ponuka");
    obnovaTlacidla();
  }

  function zrusitOneskorenie() {
    clearTimeout(casovac);
    oneskorenyVysledok = null;
  }

  function vykreslit(prehlad = { stav, stavUlozenia }) {
    if (stav && prehlad.stav.revizia < stav.revizia && prehlad.stavUlozenia === stavUlozenia) return;
    const zvukBolZapnuty = stav?.nastavenia.zvuk;
    ({ stav, stavUlozenia } = prehlad);
    if (oneskorenyVysledok && stav.posledne[oneskorenyVysledok.druh]?.id !== oneskorenyVysledok.id) {
      zrusitOneskorenie();
    }
    const { jazyk, zvuk: zapnuty, zvolenyJazyk, vek: ulozenyVek } = stav.nastavenia;
    const texty = jazyk === "en" ? textyEn : textySk;
    const obrazovka = !zvolenyJazyk ? "jazyk" : ulozenyVek === null || upravaVeku ? "vek" : miesto;
    const otvorena = obrazovka === "hra" && matematikaOtvorena;
    document.documentElement.lang = jazyk;
    document.title = texty.nazov;
    for (const panel of document.querySelectorAll("[data-obrazovka]")) {
      panel.hidden = panel.dataset.obrazovka !== obrazovka;
    }
    const nazov = prvok("nazov");
    if (nazov) nazov.textContent = texty.nazov;
    volbaJazyka.value = jazyk;
    prepinac.textContent = zapnuty ? texty.zvukZapnuty : texty.zvukVypnuty;
    prepinac.setAttribute("aria-pressed", String(zapnuty));
    const varovanie = prvok("ulozenie-varovanie");
    varovanie.textContent = texty[stavUlozenia] ?? "";
    varovanie.hidden = stavUlozenia === "dostupne";
    if (zvukBolZapnuty && !zapnuty && menenyZvuk !== true) zvuk.zastavit();

    const { priebeh } = stav;
    const mat = stavMatematiky(priebeh);
    const pravidla = pravidlaOdmenMatematiky(mat);
    const mince = priebeh.mince ?? 0;
    const hviezdy = priebeh.hviezdy ?? 0;
    const postaveneDomy = priebeh.postaveneDomy ?? ["06"];
    const veci = priebeh.veci ?? [];
    const zbierka = veci.map((id) => katalogVeciL1.find((vec) => vec.id === id)).filter(Boolean);
    prvok("mince").textContent = String(mince);
    prvok("uroven").textContent = texty.urovenNazov + " " + mat.uroven;
    prvok("krok-postup").textContent = mat.spravneDoKroku + "/" + pravidla.prahKroku;
    const bonusPostup = stav.cakajuce.bonus ? SPRAVNE_NA_BONUS : mat.spravneDoBonusu;
    prvok("bonus-postup").textContent = bonusPostup + "/" + SPRAVNE_NA_BONUS;
    prvok("cena").textContent = texty.odmeny(pravidla.odmena, 25 + 2 * (priebeh.parcely?.length ?? 0));
    vykreslitMatematiku(texty, jazyk, otvorena);

    document.dispatchEvent(new CustomEvent("mestecko:stav", {
      detail: { jazyk, obrazovka, matematikaOtvorena: otvorena, mince, hviezdy, uroven: mat.uroven,
        postaveneDomy, veci, zbierka },
    }));
  }

  async function povolitDocasnuZmenu(operacia) {
    let prehlad = await operacia();
    if (prehlad.vysledok === "neulozene") prehlad = await operacia();
    return prehlad;
  }

  async function otvoritOtazkuAkTreba() {
    if (!matematikaOtvorena || otvaraSaOtazka || zobrazenaMatematika()) return;
    otvaraSaOtazka = true;
    try {
      const prehlad = await povolitDocasnuZmenu(() => ulozenie.otvoritPokus("otazka", vytvoritBezneZadanie));
      vykreslit(prehlad);
    } finally {
      otvaraSaOtazka = false;
    }
  }

  function nastavit(zmeny) {
    return povolitDocasnuZmenu(() => ulozenie.nastavit(zmeny));
  }

  function nastavitAkciu(akcia, spustit) {
    for (const tlacidlo of sAkciou(akcia)) tlacidlo.addEventListener("click", spustit);
  }

  function ukazatMiesto(nove) {
    mestoBezMatematiky();
    miesto = nove;
    vykreslit();
  }

  function mestoBezMatematiky() {
    upravaVeku = false;
    matematikaOtvorena = false;
    zrusitOneskorenie();
  }

  for (const jazyk of ["sk", "en"]) {
    nastavitAkciu("jazyk-" + jazyk, async () => {
      vykreslit(await nastavit({ jazyk, zvolenyJazyk: true }));
    });
  }

  volbaJazyka.addEventListener("change", async () => {
    if (!stav) return;
    vykreslit(await nastavit({ jazyk: volbaJazyka.value }));
  });

  prvok("vek-form").addEventListener("submit", async (udalost) => {
    udalost.preventDefault();
    if (!stav?.nastavenia.zvolenyJazyk) return;
    const cislo = Number(vek.value);
    if (!Number.isSafeInteger(cislo) || cislo <= 0) return;
    const prehlad = await nastavit({ vek: cislo });
    upravaVeku = false;
    miesto = "hra";
    vykreslit(prehlad);
  });

  nastavitAkciu("upravit-vek", () => {
    mestoBezMatematiky();
    upravaVeku = true;
    vek.value = String(stav.nastavenia.vek ?? "");
    vykreslit();
  });
  nastavitAkciu("mesto", () => ukazatMiesto("hra"));
  nastavitAkciu("moj-dom", () => ukazatMiesto("dom"));
  nastavitAkciu("schranka", () => ukazatMiesto("dom"));
  nastavitAkciu("matematika", async () => {
    miesto = "hra";
    matematikaOtvorena = true;
    vykreslit(await ulozenie.nacitat());
    await otvoritOtazkuAkTreba();
  });

  function skusitZvuk() {
    zvukSkusany = true;
    zvuk.prehrat();
  }

  function prehratPriGeste(udalost, ovladaZvuk) {
    if (udalost.isTrusted && !ovladaZvuk && !zvukSkusany &&
        (menenyZvuk ?? stav?.nastavenia.zvuk)) skusitZvuk();
  }

  document.addEventListener("click", (udalost) => {
    prehratPriGeste(udalost, prepinac.contains(udalost.target));
  });

  document.addEventListener("keydown", (udalost) => {
    const ovladaZvuk = prepinac.contains(udalost.target) &&
      (udalost.key === "Enter" || udalost.key === " ");
    prehratPriGeste(udalost, ovladaZvuk);
  });

  prepinac.addEventListener("click", async (udalost) => {
    if (!stav || menenyZvuk !== null) return;
    menenyZvuk = !stav.nastavenia.zvuk;
    if (!menenyZvuk) zvuk.zastavit();
    else if (udalost.isTrusted) skusitZvuk();
    const prehlad = await nastavit({ zvuk: menenyZvuk });
    menenyZvuk = null;
    vykreslit(prehlad);
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) zvuk.zastavit();
  });

  odpoved.addEventListener("input", () => {
    rozpisanyPokus = !odpoved.disabled && odpoved.value.trim() ? zobrazenaMatematika()?.id ?? null : null;
    obnovaTlacidla();
  });

  function zobrazitSpravnuOdpoved(vysledok) {
    oneskorenyVysledok = vysledok;
    const trvanie = vysledok.krok ? 2600 : vysledok.odznak ? 1400 : 850;
    casovac = setTimeout(async () => {
      oneskorenyVysledok = null;
      vykreslit();
      await otvoritOtazkuAkTreba();
    }, trvanie);
  }

  prvok("otazka-form").addEventListener("submit", async (udalost) => {
    udalost.preventDefault();
    const aktivna = zobrazenaMatematika();
    if (odosiela || !matematikaOtvorena || !aktivna?.zadanie || rozpisanyPokus !== aktivna.id) return;

    const zadana = odpoved.value.trim();
    odosiela = true;
    obnovaTlacidla();
    try {
      const prehlad = await ulozenie.potvrditPokus(aktivna.id,
        (pokus) => vyhodnotitMatematickuOdpoved(pokus, zadana));
      if (prehlad.vysledok === "potvrdene" || prehlad.vysledok === "docasne") {
        const vysledok = prehlad.stav.posledne[aktivna.druh].vysledok;
        const mat = stavMatematiky(prehlad.stav.priebeh);
        if (matematikaOtvorena && vysledok.spravna && mat.pokracovanie === null) {
          zobrazitSpravnuOdpoved(vysledok);
        }
      }
      vykreslit(prehlad);
    } finally {
      odosiela = false;
      obnovaTlacidla();
    }
    await otvoritOtazkuAkTreba();
  });

  nastavitAkciu("dalsia", async () => {
    const aktivna = zobrazenaMatematika();
    if (oneskorenyVysledok || aktivna?.druh !== "vysledok") return;
    const prehlad = await povolitDocasnuZmenu(() =>
      ulozenie.upravitPriebeh((aktualny) => pokracovatVMatematike(aktualny, aktivna.id)));
    vykreslit(prehlad);
    await otvoritOtazkuAkTreba();
  });

  for (const [akcia, prijat] of [["prijat-uroven", true], ["ostat-na-urovni", false]]) {
    nastavitAkciu(akcia, async () => {
      const aktivna = zobrazenaMatematika();
      if (aktivna?.druh !== "ponuka") return;
      vykreslit(await povolitDocasnuZmenu(() =>
        ulozenie.upravitPriebeh((aktualny) => rozhodnutOUrovni(aktualny, aktivna.id, prijat))));
      await otvoritOtazkuAkTreba();
    });
  }

  const priprava = ulozenie.inicializovat();
  window.addEventListener("storage", async (udalost) => {
    if (udalost.key === KLUC_ULOZENIA_HRY || udalost.key === null) {
      await priprava;
      vykreslit(await ulozenie.nacitat());
      await otvoritOtazkuAkTreba();
    }
  });
  vykreslit(await priprava);
  volbaJazyka.disabled = false;
  prepinac.disabled = false;
})();
