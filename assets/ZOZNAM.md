# Mestečko vedomostí – grafické podklady, dávka 1

Všetky súbory sú v `/workspace/hra_deti/assets/`. V obrázkoch nie je písmo, čísla ako text, logá ani značky skutočných áut a klubov. Kód hry táto dávka nemení.

Náhľad celej dávky: `nahlad_davka1.png`.

## Obloha (`assets/obloha/`)

Equirectangular panorámy 2048×1024 (pomer 2:1), orezané a bezšvovo prelinuté na ľavom a pravom okraji. Zenit (horný pás) je pokojný, bez ostrého detailu.

| Súbor | Rozmer | Účel | Použitie v Three.js |
| --- | --- | --- | --- |
| `obloha_den.png` | 2048×1024 | Denná obloha, jemný cyan, riedke oblaky, nízky pás vzdialených hôr | `TextureLoader`, `texture.mapping = THREE.EquirectangularReflectionMapping`, `texture.colorSpace = THREE.SRGBColorSpace`, `scene.background` (alebo `scene.environment`) |
| `obloha_zapad.png` | 2048×1024 | Západ slnka, pastelový broskyňovo-levanduľový prechod | rovnako |
| `obloha_noc.png` | 2048×1024 | Nočná obloha s hviezdami, tmavomodrý zenit, silueta hôr | rovnako |
| `obloha_zima.png` | 2048×1024 | Zimná zamračená obloha, bledosivý zenit | rovnako |

## Textúry (`assets/textury/`)

Opakovateľné (tileable) textúry 512×512, bezšvovo upravené postprocesom. Na povrch roviny alebo meshu.

| Súbor | Rozmer | Účel | Použitie v Three.js |
| --- | --- | --- | --- |
| `trava.png` | 512×512 | Tráva okolia mestečka | `texture.wrapS = texture.wrapT = THREE.RepeatWrapping`, `texture.repeat.set(nx, ny)`, `texture.colorSpace = THREE.SRGBColorSpace`, `MeshStandardMaterial.map` |
| `dlazba.png` | 512×512 | Chodník / dlažba námestia | rovnako |
| `asfalt_draha.png` | 512×512 | Asfalt pretekárskej dráhy | rovnako |
| `travnik_futbal_pruhy.png` | 512×512 | Futbalový trávnik s vodorovnými kosiacimi pruhmi (bez čiariča) | rovnako; pruhy idú pozdĺž osi X, opakujú sa čisto v Y |
| `skridla.png` | 512×512 | Škridľa strechy | rovnako |
| `tehla.png` | 512×512 | Tehlový múr | rovnako |
| `drevo.png` | 512×512 | Drevené dosky | rovnako |
| `sneh.png` | 512×512 | Sneh (zimná téma) | rovnako |
| `piesok.png` | 512×512 | Piesok (pláž / okraj ostrova) | rovnako |

## Ikony obchodu (`assets/obchod/`)

Ikony 256×256, PNG s priehľadným pozadím, jednotný nízky uhol a mäkké svetlo. Do ponuky obchodu alebo ako `Sprite`.

| Súbor | Rozmer | Účel | Použitie v Three.js |
| --- | --- | --- | --- |
| `dekoracia_lavicka.png` | 256×256 | Dekorácia: lavička | HTML `<img>` v obchode, alebo `Sprite` / `SpriteMaterial.map` (`colorSpace` SRGB, priehľadnosť `transparent: true`) |
| `dekoracia_lampa.png` | 256×256 | Dekorácia: parková lampa | rovnako |
| `dekoracia_kvetinovy_zahon.png` | 256×256 | Dekorácia: kvetinový záhon | rovnako |
| `dekoracia_ovocny_strom.png` | 256×256 | Dekorácia: ovocný strom | rovnako |
| `dekoracia_fontana.png` | 256×256 | Dekorácia: malá fontána | rovnako |
| `dekoracia_socha.png` | 256×256 | Dekorácia: socha jeleňa | rovnako |
| `postava_ciapka.png` | 256×256 | Postavička: čiapka | rovnako |
| `postava_tricko.png` | 256×256 | Postavička: tričko | rovnako |
| `postava_okuliare.png` | 256×256 | Postavička: okuliare | rovnako |
| `postava_zvieratko.png` | 256×256 | Postavička: zvieratko-kamarát (šteňa) | rovnako |
| `postava_kostym_astronaut.png` | 256×256 | Postavička: kostým astronaut | rovnako |
| `postava_kostym_rytier.png` | 256×256 | Postavička: kostým rytier | rovnako |
| `auto_lak.png` | 256×256 | Auto: lak / farba | rovnako |
| `auto_nalepky.png` | 256×256 | Auto: nálepky | rovnako |
| `auto_disky.png` | 256×256 | Auto: disky | rovnako |
| `auto_svetla_pod_autom.png` | 256×256 | Auto: svetlá pod autom | rovnako |
| `auto_karoseria_formula.png` | 256×256 | Auto: karoséria formula | rovnako |
| `auto_karoseria_dzip.png` | 256×256 | Auto: karoséria džíp | rovnako |
| `stadion_dres.png` | 256×256 | Štadión: dres tímu (slnko, bez čísla) | rovnako |
| `stadion_farba_tribun.png` | 256×256 | Štadión: farba tribún | rovnako |
| `stadion_ohnostroj.png` | 256×256 | Štadión: ohňostroj | rovnako |
| `stadion_maskot.png` | 256×256 | Štadión: maskot (líška) | rovnako |
| `mesto_farby_striech.png` | 256×256 | Skin mesta: farby striech | rovnako |
| `mesto_nocne_osvetlenie.png` | 256×256 | Skin mesta: nočné osvetlenie (skupinka 3 domov so svietiacimi žltými oknami a lampičkami pri ceste) | rovnako |
| `mesto_zimna_tema.png` | 256×256 | Skin mesta: zimná téma | rovnako |
| `mesto_jesenna_tema.png` | 256×256 | Skin mesta: jesenná téma | rovnako |
| `mesto_balon.png` | 256×256 | Skin mesta: teplovzdušný balón | rovnako |
| `mesto_plaz_majak.png` | 256×256 | Skin mesta: pláž s majákom | rovnako |
| `mesto_lanovka.png` | 256×256 | Skin mesta: lanovka | rovnako |
| `mesto_raketa.png` | 256×256 | Skin mesta: raketa | rovnako |

## Nálepky na auto (`assets/auta/`)

512×512 PNG s priehľadným pozadím, vinylový vzhľad s bielym okrajom.

| Súbor | Rozmer | Účel | Použitie v Three.js |
| --- | --- | --- | --- |
| `nalepka_blesk.png` | 512×512 | Nálepka: blesk | `DecalGeometry` / projekcia na bok auta, alebo `CanvasTexture` / `texture` na plane prilepenej na karosériu; `transparent: true`, `colorSpace` SRGB |
| `nalepka_plamene.png` | 512×512 | Nálepka: plamene | rovnako |
| `nalepka_hviezdy.png` | 512×512 | Nálepka: hviezdy | rovnako |
| `nalepka_pruhy.png` | 512×512 | Nálepka: pretekárske pruhy | rovnako |
| `nalepka_kvety.png` | 512×512 | Nálepka: kvety | rovnako |
| `nalepka_stit.png` | 512×512 | Nálepka: prázdny štít na číslo (bez čísla a písma) | rovnako |

## Tím (`assets/tim/`)

Portréty majú rovnaké krémové pozadie. Erby sú priehľadné, bez písma. Vymyslený tím: tímové farby tyrkys/biela a znak slnka.

| Súbor | Rozmer | Účel | Použitie v Three.js |
| --- | --- | --- | --- |
| `hrac_1.png` | 256×256 | Portrét hráča 1 | HTML `<img>` v paneli tímu, alebo `Sprite` / textúra na plane; `colorSpace` SRGB |
| `hrac_2.png` | 256×256 | Portrét hráča 2 | rovnako |
| `hrac_3.png` | 256×256 | Portrét hráča 3 | rovnako |
| `hrac_4.png` | 256×256 | Portrét hráča 4 | rovnako |
| `hrac_5.png` | 256×256 | Portrét hráča 5 | rovnako |
| `hrac_6.png` | 256×256 | Portrét hráča 6 | rovnako |
| `erb_1.png` | 512×512 | Erb: slnko na tyrkysovom štíte | HTML `<img>`, `Sprite`, alebo `map` na plane; `transparent: true` |
| `erb_2.png` | 512×512 | Erb: líška na zlatom štíte | rovnako |
| `erb_3.png` | 512×512 | Erb: hora a hviezda na modrom štíte | rovnako |

## Náhľad

| Súbor | Rozmer | Účel | Použitie v Three.js |
| --- | --- | --- | --- |
| `nahlad_davka1.png` | mriežka (náhľad) | Kontaktný hárok celej dávky na rýchlu kontrolu | nie je herný asset |

## Úpravy pre hru (dávka v3)
- `obloha/*.png` a `textury/*.png` sú prevedené na JPG (obloha 2048×1024, kvalita 82; textúry 512×512, kvalita 80). PNG verzie sú zmazané, hra používa JPG.
- Ikony obchodu, portréty, erby a nálepky sú zmenšené na 256 farieb (PNG s priehľadnosťou). Mená súborov sa nezmenili, nový súbor s rovnakým menom stačí nahrať a znova spustiť `zmensi_podklady.py`.
- `podklady.js` obsahuje trávu, sneh (256×256) a erb 1 (128×128) ako data URI. WebGL nesmie čítať obrázky otvorené cez file://, preto 3D používa tieto kópie. Generuje ich `zmensi_podklady.py`.
- V hre sa používajú: 4 oblohy (deň, noc, západ pre jesennú tému, zima), 28 ikon obchodu, portréty `hrac_1`–`hrac_5`, `erb_1` (okno tímu a tabuľa na štadióne), tráva a sneh. Nepoužité zatiaľ ostávajú `postava_kostym_rytier`, `auto_karoseria_dzip`, nálepky (auto má kreslené pruhy), `hrac_6`, `erb_2`, `erb_3` a ostatné textúry. Do zipu hry sa nebalia.


## Ostrov – rozšírenie (dávka 2)

Nové podklady v `assets/ostrov/`. V obrázkoch nie je písmo, čísla ako text ani logá. Rozmery a HEX farby stavieb sú v `ostrov/referencie/REFERENCIE.md`. Kód hry táto dávka nemení.

Náhľad: `ostrov/nahlad_ostrov.png`.

### Referenčné listy (`ostrov/referencie/`)

Každý objekt má na liste izometrický ilustrovaný náhľad (¾, low-poly) a vedľa neho ortografické pohľady spredu, zboku a zhora v rovnakej mierke (nie sú natiahnuté do bunky). V PNG nie je písmo; mriežka riadok/stĺpec → objekt a pohľad je v `REFERENCIE.md`. Ortografia slúži na zostavenie z kociek, valcov a kužeľov v Three.js (`BoxGeometry`, `CylinderGeometry`, `ConeGeometry`, `flatShading: true`).

| Súbor | Rozmer | Účel | Použitie v Three.js |
| --- | --- | --- | --- |
| `list_teren.png` | list PNG | Okraj násypu (rovný, roh), betónové nábrežie (rovné, roh) | Podklad pre procedúrálne meshe; farby a m v `REFERENCIE.md` |
| `list_mosty.png` | list PNG | Cestný most 12 j a 20 j, železničný most 16 j | `BoxGeometry` mostovky, pilierov a zábradlia |
| `list_sklad.png` | list PNG | Sklad (2 stupne), regál, vysokozdvižný vozík, kamión | stupne ako dnešné `facStage` |
| `list_pekaren_zmrzlina.png` | list PNG | Pekáreň a zmrzlináreň, po 3 stupňoch (hala, stroje, výroba) | ako `FACTORIES` + `facStage` |
| `list_pristav.png` | list PNG | Mólo 4×16, žeriav, nákladná loď, loďka, kontajnery v 4 farbách, bója | meshe na vode a móle |
| `list_zeleznica.png` | list PNG | Koľaj rovná a oblúková (diel 4 j), stanica, vláčik, návestidlo | diely koľaje s `RepeatWrapping` štrku |
| `list_roboti.png` | list PNG | Laboratórium, 3 roboti-pomocníci, anténa | meshe na ostrovčeku r = 12 |
| `list_nova_stvrt.png` | list PNG | 4 nové typy domov, ihrisko | ako `houseModel`, nové tvary |
| `list_okruh.png` | list PNG | Rampa, kužeľ, časomiera bez číslic | za pretekárskou dráhou |
| `list_trening.png` | list PNG | Tréningové ihrisko, hala, laboratórium nápojov | za štadiónom |
| `list_majak.png` | list PNG | Maják s knižnicou, ostrovček r = 9 | ostrovček a most od pláže |
| `list_znacka_parcely.png` | list PNG | Kolíky a prázdna tabuľa „na predaj“, duch budúcej stavby | ako dnešné `ghost()` + tabuľa bez textu (`transparent`, opacity ≈ 0,55) |
| `REFERENCIE.md` | text | Rozmery š×hĺ×v, primitíva, HEX, zimná/nočná varianta | nie je herná textúra |

### Textúry (`ostrov/textury/`)

512×512, opakovateľné. `okraj_nasypanej_zeme` je **smerová** (hore piesok, dolu múr) – opakuje sa čisto vodorovne pozdĺž brehu.

| Súbor | Rozmer | Účel | Použitie v Three.js |
| --- | --- | --- | --- |
| `okraj_nasypanej_zeme.png` | 512×512 | Piesok + kamenný oporný múr (trim) | `wrapS = RepeatWrapping`, `repeat.set(dĺžka/j, 1)`, `colorSpace` SRGB, `MeshStandardMaterial.map` |
| `kamenny_mur.png` | 512×512 | Kamenný oporný múr (plocha) | `wrapS/wrapT = RepeatWrapping`, `repeat.set(...)` |
| `beton_nabrezia.png` | 512×512 | Betónové dosky nábrežia | rovnako |
| `strkove_lozko_kolaji.png` | 512×512 | Štrk pod koľajami | rovnako; koľajnice sú geometria, nie súčasť textúry |
| `priemyselny_asfalt_ciary.png` | 512×512 | Priemyselný asfalt s prerušovanými čiarami | čiary pozdĺž osi U, opakujú sa čisto |
| `plytka_voda_pobrezie.png` | 512×512 | Plytká voda / pobrežné vlny | na plytčine pri móle, `transparent` podľa potreby |

### Ikony (`ostrov/ikony/`)

256×256 PNG s priehľadným pozadím, rovnaký štýl ako `assets/obchod/`.

| Súbor | Rozmer | Účel | Použitie v Three.js |
| --- | --- | --- | --- |
| `parcela_priemyselny_breh.png` | 256×256 | Parcela 1: priemyselný breh | HTML `<img>` vo výbere parcely, alebo `Sprite` (`transparent: true`, SRGB) |
| `parcela_pristav.png` | 256×256 | Parcela 2: prístav | rovnako |
| `parcela_zeleznica.png` | 256×256 | Parcela 3: železnica a most | rovnako |
| `parcela_ostrovcek_robotov.png` | 256×256 | Parcela 4: ostrovček robotov | rovnako |
| `parcela_nova_stvrt.png` | 256×256 | Parcela 5: nová štvrť | rovnako |
| `parcela_testovaci_okruh.png` | 256×256 | Parcela 6: testovací okruh | rovnako |
| `parcela_treningove_centrum.png` | 256×256 | Parcela 7: tréningové centrum | rovnako |
| `parcela_ostrov_majaka.png` | 256×256 | Parcela 8: ostrov majáka | rovnako |
| `povolenie.png` | 256×256 | Stavebné povolenie (listina s pečiatkou, bez textu) | HTML `<img>` v úlohách |
| `uloha_kartograf.png` | 256×256 | Úloha Kartograf | rovnako |
| `uloha_majster_tem.png` | 256×256 | Úloha Majster tém | rovnako |
| `uloha_opravar.png` | 256×256 | Úloha Opravár | rovnako |
| `uloha_seria.png` | 256×256 | Úloha Séria | rovnako |
| `vyzva.png` | 256×256 | Výzva týždňa (vlajka bez textu) | rovnako |
| `minihra_nakladka_lode.png` | 256×256 | Minihra Nakládka lode | rovnako |
| `znacka_na_predaj.png` | 256×256 | Značka parcely: kolíky a prázdna tabuľa | rovnako, alebo `Sprite` pri pozemku |

### Mapa (`ostrov/mapa/`)

Ilustrácia ostrova zhora (low-poly, pastel), okrúhly hlavný ostrov R = 46 s existujúcim mestom, okolo more a 8 parciel s náznakom témy, farebným okrajom a oranžovými kolíkmi. Bez textu a čísiel.

Súradnice: +X doprava, **+Z nadol** na obrázku (ako pohľad hry: pretekárska dráha hore, štadión dole, továrne vpravo). Prevody: `px = 394 + x · 5,9`, `py = 518 + z · 5,9`. Stred ostrova (0, 0) = pixel (394, 518); tráva R = 46 → 271 px.

Približné pixelové stredy 8 parciel (klikacie zóny):

| Parcela | Svet (x, z) | Pixel (px, py) | Tvar zóny |
| --- | --- | --- | --- |
| Priemyselný breh | (55, 2) | (718, 530) | obdĺžnik 22×28 j ≈ 130×165 px |
| Prístav | (54, 26) | (713, 671) | štvorec ≈ 15×15 j ≈ 89×89 px |
| Železnica a most | (70, 2) | (807, 530) | most 66→74, zóna ≈ 10×6 j ≈ 59×35 px |
| Ostrovček robotov | (86, 0) | (901, 518) | kruh r = 12 j ≈ 71 px |
| Nová štvrť | (−48, 30) | (111, 695) | štvorec 20×20 j ≈ 118×118 px |
| Testovací okruh | (0, −60) | (394, 164) | obdĺžnik 24×14 j ≈ 142×83 px |
| Tréningové centrum | (−3, 58) | (376, 860) | obdĺžnik 20×14 j ≈ 118×83 px |
| Ostrov majáka | (56, 52) | (724, 825) | kruh r = 9 j ≈ 53 px |

| Súbor | Rozmer | Účel | Použitie v Three.js |
| --- | --- | --- | --- |
| `mapa_rozsirenia.png` | 1024×1024 | Ilustrácia ostrova zhora s 8 vyznačenými parcelami, bez textu a čísiel | HTML `<img>` na obrazovke výberu parcely, alebo `MeshBasicMaterial.map` na vodorovnej rovine; `colorSpace` SRGB |


### Použitie v hre (v5)

- Ikony: 8 parciel, `povolenie`, 4 úlohy a `znacka_na_predaj` (okno kúpy parcely). `vyzva` a `minihra_nakladka_lode` sa nepoužívajú (nie sú v schválenom rozsahu). Do zipu sa ikony zmenšia na 256 farieb, originály tu ostávajú.
- Textúry: všetkých 6 (okraj násypu na brehu parciel, kamenný múr na ostrovčekoch a pilieroch mostov, betón na prístave, štrk pod koľajami, asfalt na parkovisku a slalome, plytká voda pri móle) – v `podklady.js` ako 256 px JPEG.
- Mapa: okno „Rozšírenie ostrova“ ju ukazuje so značkami parciel (kópia 600 px `mapa/mapa_rozsirenia_hra.jpg`).
- Referenčné listy a `nahlad_ostrov.png` sa do zipu nebalia.

## Vylepšenia budov (`assets/vylepsenia/`)

Podklady na vylepšovanie domov (6 úrovní, 3 obmeny siluety + južná výšková budova), štadióna (6 úrovní), tovární (úrovne 2–4 nad dnešnou 1) a športového parku. Štýl: svetlý pastelový low-poly, bez písma, bez log a mien klubov. Kóty a farby sú v `vylepsenia/referencie/REFERENCIE.md`. Kód hry sa nemení. Náhľad: `vylepsenia/nahlad_vylepsenia.png`.

Štadiónový breh používa existujúcu textúru `ostrov/textury/okraj_nasypanej_zeme.png` (neduplikuje sa).

### Referenčné listy (`vylepsenia/referencie/`)

Každý riadok listu: izometria (ilustrovaný ¾ náhľad, prispôsobený bunke) | spredu | zboku | zhora | silueta 64 px. Ortografické pohľady na jednom liste zdieľajú spoločný rozpon, aby úrovne viditeľne rástli. Popis mriežky, rozmery, primitíva, HEX, zimný a nočný variant: `REFERENCIE.md`.

| Súbor | Rozmer | Účel | Použitie v Three.js |
| --- | --- | --- | --- |
| `list_domy_a.png` | 1584×1898 | Domy rodina A (ružová, L1–L6, L6 ustupujúca veža) | Podklad pre procedúrálne meshe (`BoxGeometry` / `CylinderGeometry` / `ConeGeometry`, `flatShading`); 1 j. = 1 m, 1 podlažie = 1,25 m |
| `list_domy_b.png` | 1584×1898 | Domy rodina B (modrá, L6 valcová veža) | rovnako; L6 `CylinderGeometry` r = 1,5, h = 15 |
| `list_domy_c.png` | 1584×1898 | Domy rodina C (oranžová, L6 skosená strecha) | rovnako; L6 klinová strecha z vlastných plôch |
| `list_domy_juh.png` | 1584×956 | Južná výšková budova L6, 3 obmeny (9 podlaží / 11,25 m) | `BoxGeometry` 3,6×3,6×11,25 + terasa; nie mrakodrap |
| `list_stadion.png` | 1584×1898 | Štadión úrovne 1–6 (bez loga a mena klubu) | ako dnešné `sStage`; L5–L6 elipsa na Štadiónovom brehu |
| `list_sportovy_park.png` | 1584×328 | Športový park (bežecká dráha 22×17) na starom mieste štadióna | plocha + prstenec dráhy, textúra `bezecka_draha.png` |
| `list_tovarna_cokolada.png` | 1584×1270 | Továreň čokoláda, úrovne 1–4 na pozemku 8×6,4 | ako `FACTORIES` + `facStage` (nové stupne 2–4) |
| `list_tovarna_hracky.png` | 1584×1270 | Továreň hračky, úrovne 1–4 | rovnako |
| `list_tovarna_bicykle.png` | 1584×1270 | Továreň bicykle, úrovne 1–4 | rovnako |
| `list_tovarna_roboti.png` | 1584×1270 | Továreň roboty, úrovne 1–4 | rovnako |
| `REFERENCIE.md` | text | Rozmery š×hĺ×v, primitíva, HEX, zima/noc, mriežka listov | nie je herná textúra |

### Textúry (`vylepsenia/textury/`)

512×512, opakovateľné, overené 2×2 náhľadom.

| Súbor | Rozmer | Účel | Použitie v Three.js |
| --- | --- | --- | --- |
| `bezecka_draha.png` | 512×512 | Terakotová bežecká dráha (8 zvislých pruhov) | `texture.wrapS = texture.wrapT = THREE.RepeatWrapping`, `texture.colorSpace = THREE.SRGBColorSpace`, `MeshStandardMaterial.map` |
| `zelena_strecha.png` | 512×512 | Zelená strecha (tráva) | rovnako |
| `solarne_panely.png` | 512×512 | Solárne panely (mriežka 64 px) | rovnako; modul 64 px ≈ 0,7 m podľa listu |
| `vankusova_fasada.png` | 512×512 | Kosoštvorcové vankúše fasády štadióna L6, bez loga | rovnako, na elipsovej fasáde; farba dresu `#14B8A6` |

### Ikony (`vylepsenia/ikony/`)

256×256 PNG s priehľadným pozadím, rovnaký štýl ako `assets/obchod/`.

| Súbor | Rozmer | Účel | Použitie v Three.js |
| --- | --- | --- | --- |
| `ikona_dom_u1.png` … `ikona_dom_u6.png` | 256×256 | Ikony vylepšenia domu, úrovne 1–6 | HTML `<img>` v ponuke vylepšenia, alebo `Sprite` (`transparent: true`, SRGB) |
| `ikona_stadion_u1.png` … `ikona_stadion_u6.png` | 256×256 | Ikony vylepšenia štadióna, úrovne 1–6 | rovnako |
| `ikona_tovaren_u1.png` … `ikona_tovaren_u4.png` | 256×256 | Ikony vylepšenia továrne, úrovne 1–4 | rovnako |
| `ikona_poukaz.png` | 256×256 | Poukaz na jednu úroveň zadarmo (lístok, bez písma) | HTML `<img>` v úlohách / inventári |
| `uloha_architekt.png` | 256×256 | Úloha Architekt | HTML `<img>` v úlohách |
| `uloha_trener.png` | 256×256 | Úloha Tréner | rovnako |
| `uloha_majster_tem_2.png` | 256×256 | Úloha Majster tém II | rovnako |
| `uloha_opravar_2.png` | 256×256 | Úloha Opravár II | rovnako |
| `uloha_citatel.png` | 256×256 | Úloha Čitateľ | rovnako |
