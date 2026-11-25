# Mestečko vedomostí (anglicky Know-It Town)

**Spustenie:** stačí otvoriť `index.html` v prehliadači (Chrome, Edge, Safari, aj v mobile), aj dvojklikom. Internet netreba – knižnica Three.js 0.170.0 je pribalená v priečinku `lib`, preto treba rozbaliť celý zip (nie iba `index.html`).
Pokrok sa ukladá v prehliadači (localStorage) a na iné zariadenie sa zatiaľ neprenáša. Staré uloženia z predchádzajúcich verzií (aj v3/v4) sa pri prvom otvorení samy prevedú bez straty pokroku a mincí.

**Ukážkový režim:** `index.html?ukazka` otvorí svet, v ktorom je už všetko postavené. Ukladá sa zvlášť a skutočný pokrok neprepíše.

## Ako hra funguje
- **Mince sa zarábajú hlavne učením:** 5 mincí za správnu odpoveď a 25 navyše za každý hotový krok (10 správnych odpovedí = 1 stavba alebo diel). Každá kúpená parcela pridá k bonusu za krok +2 (25 → najviac 41).
- **Zlá odpoveď uberie 2 mince**, nikdy však nie pod nulu. Odpovedať sa dá vždy, aj s 0 mincami. Hra ukáže správne riešenie a radu a otázka sa vráti o 3–5 otázok neskôr a znova na ďalší deň.
- **Budovy** zarábajú 0,002 mince za sekundu za každý krok, najviac 0,03 za sekundu, a iba vtedy, keď dieťa za poslednú minútu odpovedalo. Kým je hra zatvorená, mesto zarába polovičnou rýchlosťou, najviac 8 hodín a najviac 10 mincí. Budovy a noc spolu dajú najviac 100 mincí za deň.
- **Predmety v ľubovoľnom poradí:** na začiatku si dieťa vyberie prvý predmet. Po 10 správnych odpovediach sa pri otázkach objaví tlačidlo ★ Bonusová otázka (o stupeň ťažšia, najviac 3 pokusy; chyba nič nestojí). Správna odpoveď = ďalší predmet podľa výberu, zadarmo. Po 3 zlých pokusoch treba znova 10 správnych. Bežné otázky idú medzitým normálne.
  - Matematika: 30 domov, potom garáž a park.
  - Slovenčina: auto (10 dielov) a výstavy áut.
  - Fyzika: pretekárska dráha (5 krokov a výzdoba), preteky.
  - Angličtina: 4 továrne, každá má 3 kroky.
  - Chémia: futbalový štadión (5 krokov), tím a zápasy.
- **Minihry (výstava áut, preteky, zápas) sa hrajú otázkami:** 3 otázky z predmetu, 5 mincí za správnu odpoveď (ako pri bežnej otázke), +15 za výhru (treba aspoň 2 správne z 3) – bonus za výhru najviac 5-krát za deň, potom sa dá hrať ďalej bez bonusu. Minihry nerobia kroky postupu ani neodomykajú predmety (to robia len bežné otázky). Štart je zadarmo a nemajú čakanie. Pri pretekoch dá každá správna odpoveď nitro, pri zápase silu tímu.
- **Rozšírenie ostrova (v5):** tlačidlo „Rozšíriť ostrov“. 8 parciel – 4 pre angličtinu (Priemyselný breh, Prístav, Železnica s mostom, Ostrovček robotov) a 4 ďalšie (Nová štvrť – matematika, Testovací okruh – fyzika, Tréningové centrum – chémia, Ostrov majáka – slovenčina).
- **Vylepšenie budov (v6):** tlačidlo „Vylepšiť budovy“. Štvrte domov 6 úrovní (mrakodrapy len na severe; podmienka: kroky matematiky a postavené továrne, pri mrakodrapoch aj 1 vylepšená továreň), štadión 6 úrovní (+2 sila tímu za úroveň, úrovne 5–6 na novom Štadiónovom brehu), továrne 3 úrovne navyše. Mení sa len vzhľad. 5 nových úloh dáva poukazy (najviac 5) na jednu úroveň zadarmo. Hotové parcely ožijú (svetlá, pohyb). Ikony a textúry od grafika sú v `assets/vylepsenia/` (textúry pre 3D v `podklady.js`, skript `podklady_vylepsenia.py`).
  - Odomknú sa pokrokom: angličtina 12 / 16 / 20 / 24 krokov (železnica potrebuje breh, ostrovček robotov železnicu), matematika 31, fyzika 10, chémia 10, maják 100 krokov spolu.
  - Zem sa kupuje za mince s potvrdením; cena podľa poradia kúpy: 1 500, 2 500, 3 500, 5 000, 6 500, 8 000, 10 000, 12 000.
  - Stavby na parcele len učením: 4 stavby × 3 kroky; kroky predmetu idú na prvú kúpenú nedokončenú parcelu toho predmetu. Príjem budov sa nemení.
  - **Úlohy** (bez termínu a bez trestu): 150 správnych odpovedí v angličtine, 5 odznakov „Majster témy“, 25 správne zopakovaných otázok, 3-krát 10 správnych za sebou. Každá dá stavebné povolenie = 1 parcela zadarmo (najviac 4 z 8).
- **Nákupy:** lepší hráči (150 · 1,35^(úroveň−1)), 8 vylepšení auta (300 · 1,30^i). Súperi na štadióne idú podľa pevného rebríčka tímov.
- **Obchod:** 28 ozdôb s pevnými cenami (dekorácie, postavička, auto, štadión, mesto vrátane zimnej a jesennej témy a nočného osvetlenia). Všetko je vidieť hneď, bez náhodných balíčkov a časových ponúk. Kúpené veci sa dajú zapnúť a vypnúť. Keď mince chýbajú, hra vysvetlí, ako ich zarobiť.
- **Moje mesto:** názov mesta a farba nových domov (aj prefarbenie postavených).
- **Pre rodičov (v7):** prvé otvorenie chránia dva príklady pre dospelého a hra ponúkne 4-miestny PIN (uložený len v zariadení ako solený hash; zabudnutý PIN sa obnoví príkladmi; v8: pri obnove sa dá len nastaviť nový alebo PIN zrušiť a prehľad potom 14 dní ukazuje „PIN bol … obnovený“; brána sa po 3 zlých pokusoch zamkne na 5 minút a PIN po 5 zlých na 30 s – zámky ostávajú aj po obnovení stránky). Kým PIN nie je, dole svieti nenápadné „Rodič: nastavte si PIN“. Prehľad: posledných 7 dní, stav predmetov (ide / cvičí sa / zatiaľ ťažšie; zlepšuje sa / drží si úroveň / zatiaľ bez väčšej zmeny – z 14 dní, pri < 20 odpovediach z 28), čas v hre bez hodnotenia, nové učivo vs. opakovanie, max. 3 tipy; detail predmetu (8 týždňov, témy, tip k téme), „Chyby na precvičenie“ (≥ 3 chyby za 28 dní), „Postup učivom“ (úrovne a denník skokov), „Nastavenia“ (PIN, voliteľný školský ročník, chémia od 7./od 6. ročníka, ručná úroveň). Údaje ostávajú v prehliadači, súbor sa uloží len tlačidlom „Uložiť prehľad do súboru“. Na karte Prehľad je „Týždenný report“ (v8, t676): tlačidlo „Poslať týždenný report“ zostaví report za posledných 7 dní s grafom. Na mobile ho ponúkne cez zdieľanie (PNG graf + HTML report), inak otvorí novú správu v pošte (mailto) a report s grafom stiahne ako súbor, ktorý treba k správe priložiť – e-mailový odkaz prílohu pridať nevie. Nepovinná e-mailová adresa rodiča sa uloží len v tomto zariadení a hra ju nikam neposiela. Dole na každej karte v časti „Pre rodičov“ je nenápadné tlačidlo „Podporiť vývoj hry“ (dobrovoľná podpora cez Ko-fi, otvorí sa v novom okne). Je len v rozhraní pre rodičov a za podporu sa v hre nič neodomyká – hra je a ostane zadarmo.
- **Úroveň učiva (v7)** 1 až 9 má každý predmet zvlášť, nová hra začína všade na 1 (staré uloženie: doterajší ročník). Postup o úroveň po aspoň 100 otázkach na úrovni a 26/30 v uzavretom bloku (dieťa môže „Ešte zostať“); pri 19/20 krátka skúška 10 otázok o 2 úrovne vyššie bez mincí a pokút (≥ 8 = +2, 6–7 = +1); pod 10/20 ponuka o úroveň nižšie bez trestu. Denne najviac 800 mincí a 12 krokov z učenia (učiť sa dá ďalej, odpovede sa rátajú do postupu, po naplnení mešca bez pokút). Opakovanie zvládnutého (len 2× odmietnutý postup pri ≥ 95 %; v8 už nie podľa toho, o koľko je úroveň pod najvyššou): 3 mince, krok za 15 správnych, polovičné stropy.
- Fyzika sa v škole začína v 6. ročníku (rodič môže v Nastaveniach prepnúť „až od 7. ročníka“); dovtedy hra dáva otázky z prírodovedy. Chémia sa v škole začína v 7. ročníku (do 6. úrovne otázky o látkach okolo nás); rodič môže prepnúť „chémia už od 6. ročníka“ – vtedy 6. úroveň = 40 otázok chémie 6. ročníka od Učiteľa (s anglickým prekladom). Otázky majú id a tému (`[id tema]` v `otazky.js`), nové sa vkladajú podľa `otazky_hra/FORMAT.md`.

## Jazyk
Na hlavnej obrazovke je prepínač **Slovenčina / English**. Voľba sa zapamätá. Pokrok je pre oba jazyky spoločný.
- Texty rozhrania prechádzajú funkciou `t('slovenský text')`. Anglický preklad je v `lang/en.json`, kde kľúčom je presný slovenský text. Ak preklad chýba, ukáže sa slovenský text.
- `lang/en.js` je kópia `en.json` pre otvorenie dvojklikom (file://), lebo vtedy prehliadač nedovolí načítať JSON. Po úprave `en.json` ju treba pregenerovať: `node en_json_na_js.js` (skript je v testovacom priečinku).
- Anglické otázky sú v `lang/en_otazky.js`. Predmet „Slovenčina“ je v angličtine **English** (gramatika a čítanie), „Angličtina“ je **English Vocabulary & Reading**. Fyzika a chémia sú preložené. Matematika má anglické zadania v `mathQ_en`, ktorú generuje skript z `mathQ` a `en.json`.
- Anglický názov hry je **Know-It Town** (v anglickom režime v titulku okna aj v hlavičke).

## Súbory
- `index.html`: celá hra (3D svet, rozhranie, ekonomika, generátor príkladov z matematiky)
- `otazky.js`: slovenské otázky pre slovenčinu, angličtinu, fyziku a chémiu
- `lang/`: anglický preklad rozhrania (`en.json`, `en.js`) a anglické otázky (`en_otazky.js`)
- `assets/`: obrázky od grafika (ikony obchodu, oblohy, portréty a erb tímu; podklady k ostrovu sú v `assets/ostrov/`: ikony parciel, úloh, povolenia a značky, mapa rozšírenia (v hre zmenšená kópia `mapa/mapa_rozsirenia_hra.jpg`) a 6 textúr, ktoré sú pre 3D v `podklady.js` (skript `podklady_ostrov.py`). Stavby parciel sú poskladané kódom podľa referenčných listov a farieb z `ostrov/referencie/REFERENCIE.md`. Ak niektorý obrázok chýba, hra použije náhradu.) Popis je v `assets/ZOZNAM.md`. Ak niektorý súbor chýba, hra použije náhradu kreslenú kódom (farebný prechod, emoji). `assets/podklady.js` obsahuje textúru trávy, snehu a erb pre 3D v tvare, ktorý funguje aj cez file://.
- `lib/kniznica.js`: Three.js 0.170.0 (s OrbitControls a BufferGeometryUtils) zabalené tak, aby hra išla bez internetu; licencia v `lib/LICENSE_three.txt`

## Rozhodnuté Jurajom (v8, t671)
Obe hodnoty sú v `index.html` v objekte `ECON` (zdroj `hra_deti_test/v7/patch_v7.py`, riadok s `DAY_STEPS_MAX` a `MIG_LV_FROM_GRADE`), menia sa jedným riadkom:
- `DAY_STEPS_MAX:12` – denný strop krokov z učenia (pri opakovaní zvládnutého polovica, teda 6).
- `MIG_LV_FROM_GRADE:true` (ostáva) – úroveň učiva po načítaní staršieho uloženia (v3–v6): `true` = podľa doterajšieho ročníka, `false` = všetky predmety od 1. úrovne.
