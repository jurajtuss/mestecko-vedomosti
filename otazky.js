/* Zásobník otázok – Mestečko vedomostí
   Formát: "otázka|správna|zlá|zlá…#vysvetlenie"  (výber z možností)
           "T:otázka|odpoveď;iná správna odpoveď#vysvetlenie"  (písaná odpoveď) */
window.OTAZKY = {
slovencina: {
u2: [ /* Učiteľ – vloz_do_hry.py */
"[sl-u2-001 abeceda] Ktoré písmeno ide v abecede hneď po písmene „c“?|č|d|b|e#V abecede po písmene c nasleduje č.",
"[sl-u2-002 abeceda] Ktoré písmeno ide v abecede hneď po písmene „h“?|ch|i|g|k#V abecede po h nasleduje ch, ktoré píšeme dvoma znakmi, ale v abecede je to jedno písmeno.",
"[sl-u2-003 abeceda] Ktoré písmeno ide v abecede hneď po písmene „ch“?|i|h|j|k#V abecede po ch nasleduje i.",
"[sl-u2-004 abeceda] Ktoré písmeno ide v abecede hneď po písmene „s“?|š|t|r|z#V abecede po s nasleduje š.",
"[sl-u2-005 abeceda] Ktoré písmeno ide v abecede hneď po písmene „z“?|ž|y|s|a#V abecede po z nasleduje ž.",
"[sl-u2-006 abeceda] Ktoré slová sú zoradené podľa abecedy?|auto, dom, škola|dom, auto, škola|škola, dom, auto|auto, škola, dom#Slová auto, dom, škola idú podľa prvého písmena: a, potom d, potom š.",
"[sl-u2-007 abeceda] Ktoré slovo je v abecede prvé: jablko, hruška alebo čerešňa?|čerešňa|jablko|hruška|všetky sú na rovnakom mieste#Čerešňa sa začína na č a č je v abecede pred h aj pred j.",
"[sl-u2-008 abeceda] Ktorým písmenom začína slovenská abeceda?|a|b|á|e#Slovenská abeceda sa začína písmenom a.",
"[sl-u2-009 slabiky] Ktoré písmená sú samohlásky?|a, ä, e, i, o, u, y|b, c, d, f|k, l, m, n|č, š, ž#Samohlásky sú a, ä, e, i, o, u a y.",
"[sl-u2-010 slabiky] Ktorá samohláska je krátka?|e|é|í|ó#Písmeno e je krátka samohláska, nemá dĺžeň.",
"[sl-u2-011 slabiky] Ktorá samohláska je dlhá?|ú|u|o|a#Písmeno ú je dlhá samohláska, má dĺžeň.",
"[sl-u2-012 slabiky] Ktoré slovo má dlhú samohlásku?|múka|voda|pero|kolo#V slove múka je dlhé ú.",
"[sl-u2-013 slabiky] Ktoré slovo má v prvej slabike krátku samohlásku?|pero|síto|múka|bábika#V slove pero je v prvej slabike „pe“ krátke e.",
"[sl-u2-014 slabiky] Čo patrí k samohláske „o“ ako jej dlhá dvojica?|ó|á|ú|í#Ku krátkemu o patrí ako dlhá dvojica písmeno ó.",
"[sl-u2-015 slabiky] Ktorá dvojica slov sa líši dĺžkou samohlásky a má iný význam?|vila a víla|pes a les|dom a lom|mak a rok#Vila je budova a víla je rozprávková bytosť. Slová sa líšia dĺžkou samohlásky.",
"[sl-u2-016 slabiky] Koľko krátkych samohlások je v slove „pes“?|1|2|3|0#V slove pes je jedna krátka samohláska e.",
"[sl-u2-017 dvojhlasky] Ktoré spojenie písmen je dvojhláska?|ia|ch|á|st#Spojenie ia je dvojhláska, počujeme ju v jednej slabike.",
"[sl-u2-018 dvojhlasky] Ktoré slovo obsahuje dvojhlásku ie?|chlieb|pes|mak|dom#V slove chlieb je dvojhláska ie.",
"[sl-u2-019 dvojhlasky] Ktoré slovo obsahuje dvojhlásku ô?|stôl|sklo|krík|ryba#V slove stôl je dvojhláska ô.",
"[sl-u2-020 dvojhlasky] Ktoré slovo obsahuje dvojhlásku ia?|piatok|pes|kvet|les#V slove piatok je dvojhláska ia.",
"[sl-u2-021 dvojhlasky] Ktoré skupiny písmen sú dvojhlásky?|ia, ie, iu, ô|a, e, i, o|á, é, í, ó|b, c, d, f#Dvojhlásky sú ia, ie, iu a ô.",
"[sl-u2-022 dvojhlasky] Koľko slabík má slovo „chlieb“?|1|2|3|4#Slovo chlieb má len jednu slabiku, aj keď obsahuje dvojhlásku.",
"[sl-u2-023 spoluhlasky] Ktoré z písmen š, k, g, h je mäkká spoluhláska?|š|k|g|h#Písmeno š je mäkká spoluhláska. K, g a h sú tvrdé.",
"[sl-u2-024 spoluhlasky] Ktoré z písmen ť, t, d, n je mäkká spoluhláska?|ť|t|d|n#Písmeno ť je mäkká spoluhláska. T, d a n sú tvrdé.",
"[sl-u2-025 spoluhlasky] Ktoré z písmen g, š, č, j je tvrdá spoluhláska?|g|š|č|j#Písmeno g je tvrdá spoluhláska. Š, č a j sú mäkké.",
"[sl-u2-026 spoluhlasky] Ktoré z písmen ch, ž, c, ň je tvrdá spoluhláska?|ch|ž|c|ň#Písmeno ch je tvrdá spoluhláska. Ž, c a ň sú mäkké.",
"[sl-u2-027 spoluhlasky] Ktorá skupina sú mäkké spoluhlásky?|č, š, ž|k, g, h|d, t, n|b, p, m#Mäkké spoluhlásky sú napríklad č, š a ž.",
"[sl-u2-028 spoluhlasky] Ktorá skupina sú tvrdé spoluhlásky?|h, ch, k, g, d, t, n, l|c, č, š, ž|b, m, p, r|a, e, i, o#Tvrdé spoluhlásky sú h, ch, k, g, d, t, n, l.",
"[sl-u2-029 spoluhlasky] Ktoré písmeno je obojaká spoluhláska?|r|k|č|h#Písmeno r je obojaká spoluhláska, po nej môže byť i aj y.",
"[sl-u2-030 spoluhlasky] Po mäkkej spoluhláske píšeme:|i alebo í|y alebo ý|iba y|hocijaké písmeno#Po mäkkej spoluhláske píšeme i alebo í.",
"[sl-u2-031 iy] Doplň i, í, y alebo ý: ch_trý (šikovný)|chytrý|chitrý|chýtrý|chítrý#Po tvrdej spoluhláske ch píšeme y, preto je správne chytrý.",
"[sl-u2-032 iy] Doplň i, í, y alebo ý: k_vať hlavou|kývať|kívať|kyvať|kivať#Po tvrdej spoluhláske k píšeme ý, preto je správne kývať.",
"[sl-u2-033 iy] Doplň i, í, y alebo ý: h_dina (sliepky, kačice, husi)|hydina|hidina|hýdina|hídina#Po tvrdej spoluhláske h píšeme y, preto je správne hydina.",
"[sl-u2-034 iy] Doplň i, í, y alebo ý: č_slo|číslo|čýslo|čislo|čyslo#Po mäkkej spoluhláske č píšeme í, preto je správne číslo.",
"[sl-u2-035 iy] Doplň i, í, y alebo ý: š_ška (plod na smreku)|šiška|šyška|šíška|šýška#Po mäkkej spoluhláske š píšeme i, preto je správne šiška.",
"[sl-u2-036 iy] Doplň i, í, y alebo ý: ž_hadlo (u včely)|žihadlo|žyhadlo|žíhadlo|žýhadlo#Po mäkkej spoluhláske ž píšeme i, preto je správne žihadlo.",
"[sl-u2-037 iy] Doplň i, í, y alebo ý: c_tiť vôňu|cítiť|cýtiť|citiť|cytiť#V slove cítiť píšeme po c písmeno í.",
"[sl-u2-038 iy] Ktorý zápis slova pre chalúpku alebo izbu je správny?|chyža|chiža|chýža|chíža#Po tvrdej spoluhláske ch píšeme y, preto je správny zápis chyža.",
"[sl-u2-039 iy] Ktorý zápis slova s významom „nie špinavý“ je správny?|čistý|čystý|čýstý|čysty#Po mäkkej spoluhláske č píšeme i, preto je správny zápis čistý.",
"[sl-u2-040 iy] Prečo píšeme ý v slove „kývajú“?|po tvrdej spoluhláske k|po mäkkej spoluhláske|lebo slovo je krátke|náhodou#V slove kývajú je ý, lebo pred ním je tvrdá spoluhláska k.",
"[sl-u2-041 slabiky] Koľko slabík má slovo „škola“?|2|1|3|4#Slovo škola rozdelíme na ško-la, to sú dve slabiky.",
"[sl-u2-042 slabiky] Koľko slabík má slovo „jahoda“?|3|2|4|1#Slovo jahoda rozdelíme na ja-ho-da, to sú tri slabiky.",
"[sl-u2-043 slabiky] Koľko slabík má slovo „strom“?|1|2|3|4#Slovo strom má len jednu slabiku.",
"[sl-u2-044 slabiky] Koľko slabík má slovo „učiteľ“?|3|2|4|1#Slovo učiteľ rozdelíme na u-či-teľ, to sú tri slabiky.",
"[sl-u2-045 slabiky] Ako správne rozdelíme slovo „jahoda“ na slabiky?|ja-ho-da|jah-oda|jaho-da|ja-hoda#Slovo jahoda delíme na slabiky ja-ho-da.",
"[sl-u2-046 slabiky] Ktoré slovo má dve slabiky?|pero|strom|jahoda|učiteľka#Slovo pero má dve slabiky: pe-ro.",
"[sl-u2-047 slabiky] Keď sa slovo na konci riadka nezmestí, delíme ho:|na slabiky|kdekoľvek medzi písmenami|po každom písmene|nikdy ho nedelíme#Keď sa slovo na konci riadka nezmestí, delíme ho na slabiky.",
"[sl-u2-048 slabiky] Koľko slabík má slovo „stôl“?|1|2|3|4#Slovo stôl má jednu slabiku, lebo dvojhlásku ô vyslovíme v jednej slabike.",
"[sl-u2-049 vety] Urči druh vety: „Dnes svieti slnko.“|oznamovacia|opytovacia|rozkazovacia#Veta „Dnes svieti slnko.“ niečo oznamuje, preto je oznamovacia.",
"[sl-u2-050 vety] Urči druh vety: „Ideš do školy?“|opytovacia|oznamovacia|rozkazovacia#Veta „Ideš do školy?“ sa pýta, preto je opytovacia.",
"[sl-u2-051 vety] Urči druh vety: „Umy si ruky!“|rozkazovacia|opytovacia|oznamovacia#Veta „Umy si ruky!“ niekoho vyzýva, preto je rozkazovacia.",
"[sl-u2-052 vety] Aké znamienko patrí na koniec oznamovacej vety?|.|?|!#Oznamovacia veta sa končí bodkou.",
"[sl-u2-053 vety] Aké znamienko patrí na koniec jasnej rozkazovacej vety?|!|.|?#Jasná rozkazovacia veta sa končí výkričníkom.",
"[sl-u2-054 vety] Ktorá veta je opytovacia?|Kde je moja čiapka?|Čiapka je na stole.|Daj mi čiapku!#Veta „Kde je moja čiapka?“ sa pýta, preto je opytovacia.",
"[sl-u2-055 vety] Ktorá veta je rozkazovacia?|Zober si bundu!|Mám bundu.|Máš bundu?#Veta „Zober si bundu!“ niekoho vyzýva, preto je rozkazovacia.",
"[sl-u2-056 vety] Ktorá veta je oznamovacia?|Pes spí v búde.|Spí pes v búde?|Ľahni si!#Veta „Pes spí v búde.“ niečo oznamuje, preto je oznamovacia.",
"[sl-u2-057 velke] Ktoré slovo píšeme s veľkým začiatočným písmenom?|Bratislava|mesto|ulica|rieka#Názov mesta Bratislava píšeme s veľkým začiatočným písmenom.",
"[sl-u2-058 vyznam] Ktoré slovo má opačný význam ako „horúci“?|studený|teplý|sladký|rýchly#Opak slova horúci je studený.",
"[sl-u2-059 vyznam] Ktoré slovo sa rýmuje so slovom „rak“?|mak|pes|kniha|auto#Slovo mak sa rýmuje so slovom rak, lebo sa končí rovnako.",
"[sl-u2-060 vyznam] Ktoré slovo má opačný význam ako „veselý“?|smutný|šťastný|rýchly|tichý#Opak slova veselý je smutný."
],
u1: [ /* Učiteľ – vloz_do_hry.py */
"[sl-u1-001 abeceda] Akým písmenom sa začína slovo na obrázku mamy?|m|p|s|l#Slovo mama sa začína písmenom m.",
"[sl-u1-002 abeceda] Akým písmenom sa začína slovo na obrázku psa?|p|k|n|t#Slovo pes sa začína písmenom p.",
"[sl-u1-003 abeceda] Akým písmenom sa začína slovo na obrázku lopty?|l|d|b|r#Slovo lopta sa začína písmenom l.",
"[sl-u1-004 abeceda] Akým písmenom sa končí slovo les?|s|b|a|o#Slovo les sa končí písmenom s.",
"[sl-u1-005 abeceda] Akým písmenom sa začína slovo „auto“?|a|u|t|o#Slovo auto sa začína písmenom a.",
"[sl-u1-006 slabiky] Ktoré z týchto písmen je samohláska?|e|b|s|t#Samohlásky sú a, ä, e, i, y, o, u, preto je e samohláska.",
"[sl-u1-007 slabiky] Ktoré písmeno vieme predĺžiť ako spev: iii?|i|d|l|p#Hlásku i vieme predĺžiť ako spev, lebo je to samohláska.",
"[sl-u1-008 spoluhlasky] Ktoré z týchto písmen je spoluhláska?|k|a|e|u#Písmeno k je spoluhláska, lebo ho na rozdiel od samohlások nevieme dlho vyslovovať samostatne, otvorenou ústnou dutinou.",
"[sl-u1-009 spoluhlasky] Ktoré písmeno nie je samohláska?|n|o|i|á#Písmeno n nie je samohláska, je to spoluhláska.",
"[sl-u1-010 citanie] Ako ideme pri čítaní po riadku?|zľava doprava|sprava doľava|odzadu na stred#Pri čítaní ideme po riadku zľava doprava.",
"[sl-u1-011 slabiky] Koľko hlások má slovo „nos“?|3|2|4|1#V slove nos počuješ tri hlásky: n, o a s.",
"[sl-u1-012 slabiky] Koľko hlások má slovo „mak“?|3|2|4#V slove mak počuješ tri hlásky: m, a a k.",
"[sl-u1-013 slabiky] Koľko slabík má slovo „kolo“?|2|1|3|4#Slovo kolo rozdelíme na ko-lo, to sú dve slabiky.",
"[sl-u1-014 slabiky] Koľko slabík má slovo „auto“?|2|1|3#Slovo auto rozdelíme na au-to, to sú dve slabiky.",
"[sl-u1-015 slabiky] Koľko slabík má slovo „mäso“?|2|1|3#Slovo mäso rozdelíme na mä-so, to sú dve slabiky.",
"[sl-u1-016 slabiky] Koľko slabík má slovo „dom“?|1|2|3#Slovo dom má len jednu slabiku.",
"[sl-u1-017 slabiky] Koľko slabík má slovo „banán“?|2|3|4#Slovo banán rozdelíme na ba-nán, to sú dve slabiky.",
"[sl-u1-018 vety] Koľko slov je vo vete: Pes beží.|2|1|3|4#Vo vete „Pes beží.“ sú dve slová: Pes a beží.",
"[sl-u1-019 vety] Koľko slov je vo vete: Mama má mak.|3|2|4#Vo vete „Mama má mak.“ sú tri slová.",
"[sl-u1-020 abeceda] Ktoré je slovo, nie len písmeno?|dom|m|t#Dom je slovo: má viac písmen a niečo znamená.",
"[sl-u1-021 abeceda] Ktoré je písmeno, nie slovo?|t|les|pes#Písmeno t nie je slovo, je to len jedno písmeno.",
"[sl-u1-022 abeceda] Ktoré slovo sa začína na „k“ ako kvet?|kolo|mama|auto|les#Slovo kolo sa začína na k, tak ako kvet.",
"[sl-u1-023 vety] Čím sa začína veta?|veľkým písmenom|malým písmenom|čiarkou#Vetu vždy začíname veľkým písmenom.",
"[sl-u1-024 vety] Ktorá veta je napísaná správne?|Pes spí.|pes spí.|pes Spí#Veta „Pes spí.“ sa začína veľkým písmenom a končí bodkou.",
"[sl-u1-025 vety] Aké znamienko dáme na koniec vety: „Ide mama“|.|?|!#Veta „Ide mama“ niečo oznamuje, preto na koniec dáme bodku.",
"[sl-u1-026 vety] Aké znamienko dáme na koniec vety: „Kde je pes“|?|.|!#Veta „Kde je pes“ sa pýta, preto na koniec dáme otáznik.",
"[sl-u1-027 vety] Aké znamienko dáme na koniec vety: „Pozri“|!|.|?#Veta „Pozri“ niekoho vyzýva, preto na koniec dáme výkričník.",
"[sl-u1-028 vety] Táto veta niečo oznamuje: „Prší.“ Čo to je?|oznámenie|otázka|výzva#Veta „Prší.“ niečo oznamuje, je to oznámenie.",
"[sl-u1-029 vety] Táto veta sa pýta: „Kde je mama?“ Čo to je?|otázka|oznámenie|výzva#Veta „Kde je mama?“ sa pýta, je to otázka.",
"[sl-u1-030 vety] Táto veta niekoho vyzýva: „Poď sem!“ Čo to je?|výzva|otázka|oznámenie#Veta „Poď sem!“ niekoho vyzýva, je to výzva.",
"[sl-u1-031 citanie] Ktoré slovo patrí k obrázku domu?|dom|les|pes#K obrázku domu patrí napísané slovo dom.",
"[sl-u1-032 citanie] Ktoré slovo patrí k obrázku psa?|pes|mak|nos#K obrázku psa patrí napísané slovo pes.",
"[sl-u1-033 citanie] Ktoré slovo patrí k obrázku lesa?|les|lak|sok#K obrázku lesa patrí napísané slovo les.",
"[sl-u1-034 citanie] Ktoré slovo patrí k obrázku slnka?|slnko|slama|sova#K obrázku slnka patrí napísané slovo slnko.",
"[sl-u1-035 citanie] Veta: Pes spí. Čo pes robí?|spí|beží|je#Vo vete „Pes spí.“ sa dozvieš, že pes spí.",
"[sl-u1-036 citanie] Veta: Ema má loptu. Čo má Ema?|loptu|knihu|auto#Vo vete „Ema má loptu.“ sa dozvieš, že Ema má loptu.",
"[sl-u1-037 citanie] Ktoré slovo je „mama“?|mama|máta|rama#Správne napísané slovo je mama.",
"[sl-u1-038 citanie] Ktorý nápis patrí k obrázku koňa?|kôň|kosa|kos#K obrázku koňa patrí nápis kôň.",
"[sl-u1-039 diakritika] Ktoré písmeno má dĺžeň?|á|a|o#Písmeno á má dĺžeň, čiarku nad písmenom.",
"[sl-u1-040 diakritika] Ktoré slovo má dĺžeň?|bábika|pes|dom#V slove bábika má písmeno á dĺžeň.",
"[sl-u1-041 diakritika] V ktorom slove počuješ dlhú samohlásku?|sýty|pes|les#V slove sýty počuješ dlhé ý.",
"[sl-u1-042 diakritika] Ktoré písmeno má mäkčeň?|ň|n|m#Písmeno ň má mäkčeň, malú značku nad písmenom.",
"[sl-u1-043 diakritika] Ktoré slovo má mäkčeň?|žaba|kosa|kolo#V slove žaba má písmeno ž mäkčeň.",
"[sl-u1-044 diakritika] Ktoré slovo je napísané správne?|mám|mam|maam#Správne píšeme mám s dĺžňom, lebo počujeme dlhé á.",
"[sl-u1-045 vyznam] Aký je opak slova „smutný“?|veselý|unavený|tichý#Opak slova smutný je veselý.",
"[sl-u1-046 vyznam] Aký je opak slova „otvorený“?|zatvorený|veľký|nový#Opak slova otvorený je zatvorený.",
"[sl-u1-047 vyznam] Aký je opak slova „čistý“?|špinavý|biely|mokrý#Opak slova čistý je špinavý.",
"[sl-u1-048 vyznam] Ktoré slovo sa rýmuje so slovom „dom“?|strom|les|auto#Slovo strom sa rýmuje so slovom dom, lebo sa končí rovnako.",
"[sl-u1-049 vyznam] Ktoré slovo sa rýmuje so slovom „kvet“?|svet|kolo|mama#Slovo svet sa rýmuje so slovom kvet, lebo sa končí rovnako.",
"[sl-u1-050 vyznam] Ktoré slová patria k sebe?|topánka a noha|topánka a ucho|topánka a nos#Topánka a noha patria k sebe, lebo topánku si obúvame na nohu.",
"[sl-u1-051 vyznam] Kto je mláďa mačky?|mačiatko|šteňa|teľa#Mláďa mačky je mačiatko.",
"[sl-u1-052 vyznam] Ako zmenšene povieme slovo „dom“?|domček|domovník|dvere#Dom zmenšene povieme domček.",
"[sl-u1-053 komunikacia] Čo povieš, keď dostaneš darček?|Ďakujem.|Nie.|Zmizni.#Keď dostaneš darček, slušne povieš „Ďakujem.“",
"[sl-u1-054 komunikacia] Čo povieš, keď niekomu nechtiac stúpiš na nohu?|Prepáč.|Ďakujem.|Dobrú chuť.#Keď niekomu nechtiac ublížiš, povieš „Prepáč.“",
"[sl-u1-055 komunikacia] Ako pozdravíš ráno učiteľku?|Dobré ráno.|Dobrú noc.|Dovidenia.#Ráno učiteľku pozdravíš slovami „Dobré ráno.“",
"[sl-u1-056 komunikacia] Ako slušne požiadaš o pastelku?|Prosím, požičaj mi pastelku.|Daj!|Ja chcem.#Slušná prosba sa začína slovom prosím, napríklad „Prosím, požičaj mi pastelku.“",
"[sl-u1-057 citanie] Veta: Pes spí. Ktorý obrázok k nej patrí?|spiaci pes|bežiaci kôň|lietajúci vták#K vete „Pes spí.“ patrí obrázok spiaceho psa.",
"[sl-u1-058 citanie] Na obrázku je dieťa v pláštenke. Čo asi príde v príbehu?|dážď|sneh v lete|stan v izbe#Dieťa v pláštenke naznačuje, že v príbehu príde dážď.",
"[sl-u1-059 citanie] Čo na stránke je kresba, nie písaný text?|obrázok stromu|veta Pes beží.|slovo mama#Obrázok stromu je kresba, nie písaný text.",
"[sl-u1-060 citanie] Ako sa asi skončí: Je zima. Padá …|sneh|lístie v lete|piesok z mora#Vetu „Je zima. Padá …“ doplníme slovom sneh."
],
g12: [
"[sl-g12-001 slabiky] Ktoré písmeno je samohláska?|a|b|k|m",
"[sl-g12-002 slabiky] Ktoré písmeno je samohláska?|o|t|s|p",
"[sl-g12-003 slabiky] Ktoré písmeno je samohláska?|u|v|r|n",
"[sl-g12-004 slabiky] Koľko slabík má slovo „mama“?|2|1|3|4#ma-ma",
"[sl-g12-005 slabiky] Koľko slabík má slovo „lopata“?|3|2|4|1#lo-pa-ta",
"[sl-g12-006 slabiky] Koľko slabík má slovo „pes“?|1|2|3#Slovo „pes“ má jednu slabiku.",
"[sl-g12-007 iy] Doplň i alebo y: ch_ba (omyl)|chyba|chiba#Po tvrdej spoluhláske ch píšeme y.",
"[sl-g12-008 iy] Doplň i alebo y: k_tica (kvetov)|kytica|kitica#Po tvrdej spoluhláske k píšeme y.",
"[sl-g12-009 iy] Doplň i alebo y: h_bať sa|hýbať sa|híbať sa#Po tvrdej spoluhláske h píšeme y/ý.",
"[sl-g12-010 iy] Doplň i alebo y: c_buľa|cibuľa|cybuľa#Po mäkkej spoluhláske c píšeme i.",
"[sl-g12-011 iy] Doplň i alebo y: č_tanka|čítanka|čýtanka#Po mäkkej spoluhláske č píšeme i/í.",
"[sl-g12-012 iy] Doplň i alebo y: ž_rafa|žirafa|žyrafa#Po mäkkej spoluhláske ž píšeme i.",
"[sl-g12-013 iy] Doplň i alebo y: š_pka (plod šípovej ruže)|šípka|šýpka#Po mäkkej spoluhláske š píšeme i/í.",
"[sl-g12-014 iy] Doplň i alebo y: k_slý (citrón)|kyslý|kislý#Po tvrdej spoluhláske k píšeme y.",
"[sl-g12-015 spoluhlasky] Ktoré písmeno je mäkká spoluhláska?|č|k|h|d",
"[sl-g12-016 spoluhlasky] Ktoré písmeno je mäkká spoluhláska?|ž|g|ch|n",
"[sl-g12-017 spoluhlasky] Ktoré písmeno je tvrdá spoluhláska?|h|č|ž|c",
"[sl-g12-018 spoluhlasky] Ktoré písmeno je tvrdá spoluhláska?|k|š|j|ť",
"[sl-g12-019 velke] Ktoré slovo píšeme s veľkým začiatočným písmenom?|Peter|pes|stôl|kniha#Mená ľudí píšeme s veľkým písmenom.",
"[sl-g12-020 velke] Ktoré slovo píšeme s veľkým začiatočným písmenom?|Slovensko|krajina|hora|rieka#Názvy štátov píšeme s veľkým písmenom.",
"[sl-g12-021 vety] Akým písmenom začíname každú vetu?|veľkým písmenom|malým písmenom|hocijakým písmenom",
"[sl-g12-022 vety] Ktoré znamienko patrí na koniec opytovacej vety?|?|.|!",
"[sl-g12-023 vety] Urči druh vety: „Kde bývaš?“|opytovacia|oznamovacia|rozkazovacia",
"[sl-g12-024 vety] Urči druh vety: „Zatvor dvere!“|rozkazovacia|opytovacia|oznamovacia",
"[sl-g12-025 vety] Urči druh vety: „Vonku prší.“|oznamovacia|opytovacia|rozkazovacia",
"[sl-g12-026 abeceda] Ktoré písmeno nasleduje v abecede hneď po písmene „b“?|c|d|a|e",
"[sl-g12-027 abeceda] Ktoré písmeno nasleduje v abecede hneď po písmene „k“?|l|m|j|o",
"[sl-g12-028 diakritika] Ktorá samohláska je dlhá?|á|a|e|o",
"[sl-g12-029 diakritika] Ktoré slovo má dlhú samohlásku?|vták|pes|mak|les",
"[sl-g12-030 vyznam] Ktoré slovo má opačný význam ako „veľký“?|malý|vysoký|pekný",
"[sl-g12-031 vyznam] Ktoré slovo má opačný význam ako „deň“?|noc|ráno|svetlo",
"[sl-g12-032 vyznam] Ktoré slovo sa rýmuje so slovom „mačka“?|hračka|pes|stôl",
"[sl-g12-033 dvojhlasky] Ktoré slovo obsahuje dvojhlásku?|kôň|pes|mak|dom#Dvojhlásky sú ia, ie, iu, ô.",
"[sl-g12-034 iy] T:Doplň i alebo y: k_slá kapusta|y#Po tvrdej spoluhláske k píšeme y: kyslá.",
"[sl-g12-035 iy] T:Doplň i alebo y: c_trón|i#Po mäkkej spoluhláske c píšeme i: citrón.",
"[sl-g12-036 iy] T:Doplň i alebo y: ch_tať loptu|y#Po tvrdej spoluhláske ch píšeme y: chytať."
],
g34: [
"[sl-g34-001 vybrane] Ktoré slovo je napísané správne?|ryba|riba#Ryba je vybrané slovo po r.",
"[sl-g34-002 vybrane] Ktoré slovo je napísané správne?|syr|sir#Syr je vybrané slovo po s.",
"[sl-g34-003 vybrane] Ktoré slovo je napísané správne?|mydlo|midlo#Mydlo je vybrané slovo po m.",
"[sl-g34-004 vybrane] Ktoré slovo je napísané správne?|jazyk|jazik#Jazyk je vybrané slovo po z.",
"[sl-g34-005 vybrane] Ktoré slovo je napísané správne?|dobytok|dobitok#Dobytok je vybrané slovo po b.",
"[sl-g34-006 vybrane] Ktoré slovo je napísané správne?|kobyla|kobila#Kobyla je vybrané slovo po b.",
"[sl-g34-007 vybrane] Ktoré slovo je napísané správne?|myš|miš#Myš je vybrané slovo po m.",
"[sl-g34-008 vybrane] Ktoré slovo je napísané správne?|sýkorka|síkorka#Sýkorka je vybrané slovo po s.",
"[sl-g34-009 vybrane] Ktoré slovo je napísané správne?|vydra|vidra#Vydra je vybrané slovo po v.",
"[sl-g34-010 vybrane] Ktoré slovo je napísané správne?|pýcha|pícha#Pýcha je vybrané slovo po p.",
"[sl-g34-011 vybrane] Ktoré slovo je napísané správne?|rýchly|ríchly#Rýchly je vybrané slovo po r.",
"[sl-g34-012 vybrane] Ktoré slovo je napísané správne?|syn|sin#Syn je vybrané slovo po s.",
"[sl-g34-013 vybrane] Doplň: Chcem b_ť lekárom.|byť|biť#„Byť“ (existovať) je vybrané slovo, „biť“ znamená udierať.",
"[sl-g34-014 vybrane] Doplň: M_ sme kamaráti.|My|Mi#„My“ znamená my všetci (1. pád množného čísla), „mi“ znamená „mne“.",
"[sl-g34-015 vybrane] Doplň: Daj m_ knihu.|mi|my#„Mi“ znamená „mne“.",
"[sl-g34-016 vybrane] Doplň: Strom je v_soký.|vysoký|visoký#Vysoký je vybrané slovo po v.",
"[sl-g34-017 vybrane] Doplň: Na lúke rastie b_lina.|bylina|bilina#Bylina je vybrané slovo po b.",
"[sl-g34-018 vybrane] Ktoré slovo je vybrané slovo?|myš|miska|písať",
"[sl-g34-019 druhy] Aký slovný druh je slovo „stôl“?|podstatné meno|prídavné meno|sloveso",
"[sl-g34-020 druhy] Aký slovný druh je slovo „zelený“?|prídavné meno|podstatné meno|sloveso",
"[sl-g34-021 druhy] Aký slovný druh je slovo „skáče“?|sloveso|podstatné meno|prídavné meno",
"[sl-g34-022 druhy] Aký slovný druh je slovo „my“?|zámeno|podstatné meno|číslovka",
"[sl-g34-023 druhy] Aký slovný druh je slovo „sedem“?|číslovka|zámeno|prídavné meno",
"[sl-g34-024 druhy] Ktoré slovo je podstatné meno?|mačka|rýchly|spí|ona",
"[sl-g34-025 druhy] Ktoré slovo je sloveso?|kreslí|farebný|obraz|on",
"[sl-g34-026 velke] Ktoré slovo je vlastné meno?|Dunaj|rieka|voda|breh#Názvy riek sú vlastné mená.",
"[sl-g34-027 velke] Ktoré slovo píšeme s veľkým začiatočným písmenom?|Tatry|hory|vrch|dolina",
"[sl-g34-028 vyznam] Ktoré slovo má opačný význam ako „rýchly“?|pomalý|bystrý|veselý",
"[sl-g34-029 vyznam] Ktoré slovo má podobný význam ako „veselý“?|radostný|smutný|tichý",
"[sl-g34-030 slabiky] Koľko slabík má slovo „čokoláda“?|4|3|5#čo-ko-lá-da",
"[sl-g34-031 rod] Aký rod má podstatné meno „kniha“?|ženský|mužský|stredný#tá kniha",
"[sl-g34-032 rod] Aký rod má podstatné meno „mesto“?|stredný|ženský|mužský#to mesto",
"[sl-g34-033 rod] Aký rod má podstatné meno „strom“?|mužský|ženský|stredný#ten strom",
"[sl-g34-034 vybrane] T:Doplň i alebo y: r_ža (jedlo)|y#Ryža je vybrané slovo po r.",
"[sl-g34-035 vybrane] T:Doplň i alebo y: s_peme piesok|y#Sypať je vybrané slovo po s.",
"[sl-g34-036 vybrane] T:Doplň i alebo y: v_dra (zviera)|y#Vydra je vybrané slovo po v.",
"[sl-g34-037 vybrane] T:Doplň i alebo y: m_ska na polievku|i#Miska nie je vybrané slovo, preto píšeme i."
],
g56: [
"[sl-g56-001 pady] Koľko pádov má slovenčina?|6|7|5|4",
"[sl-g56-002 pady] Na ktoré otázky odpovedá 1. pád (nominatív)?|kto? čo?|koho? čoho?|komu? čomu?",
"[sl-g56-003 pady] Na ktoré otázky odpovedá 3. pád (datív)?|komu? čomu?|kto? čo?|s kým? s čím?",
"[sl-g56-004 pady] Na ktoré otázky odpovedá 7. pád (inštrumentál)?|s kým? s čím?|o kom? o čom?|koho? čo?",
"[sl-g56-005 pady] V akom páde je „s kamarátom“?|7. pád (inštrumentál)|3. pád (datív)|6. pád (lokál)",
"[sl-g56-006 pady] V akom páde je „o škole“?|6. pád (lokál)|2. pád (genitív)|1. pád (nominatív)",
"[sl-g56-007 pady] Podľa akého vzoru sa skloňuje slovo „učiteľ“?|chlap|hrdina|dub|stroj",
"[sl-g56-008 pady] Podľa akého vzoru sa skloňuje slovo „turista“?|hrdina|chlap|žena|dub",
"[sl-g56-009 pady] Podľa akého vzoru sa skloňuje slovo „most“?|dub|stroj|chlap|kosť",
"[sl-g56-010 pady] Podľa akého vzoru sa skloňuje slovo „počítač“?|stroj|dub|chlap|ulica",
"[sl-g56-011 pady] Podľa akého vzoru sa skloňuje slovo „kniha“?|žena|ulica|dlaň|kosť",
"[sl-g56-012 pady] Podľa akého vzoru sa skloňuje slovo „ruža“?|ulica|žena|kosť|dlaň",
"[sl-g56-013 pady] Podľa akého vzoru sa skloňuje slovo „radosť“?|kosť|dlaň|žena|ulica",
"[sl-g56-014 pady] Podľa akého vzoru sa skloňuje slovo „jablko“?|mesto|srdce|vysvedčenie|dievča",
"[sl-g56-015 pady] Podľa akého vzoru sa skloňuje slovo „námestie“?|vysvedčenie|mesto|srdce|dievča",
"[sl-g56-016 pady] Podľa akého vzoru sa skloňuje slovo „kura“?|dievča|mesto|srdce|žena",
"[sl-g56-017 pady] Podľa akého vzoru sa skloňuje slovo „pole“?|srdce|mesto|vysvedčenie|dievča",
"[sl-g56-018 pady] Podľa akého vzoru sa skloňuje slovo „báseň“?|dlaň|kosť|žena|ulica",
"[sl-g56-019 druhy] Aký slovný druh je slovo „rýchlo“?|príslovka|prídavné meno|sloveso",
"[sl-g56-020 druhy] Aký slovný druh je „na“ vo vete „Kniha je na stole.“?|predložka|spojka|príslovka",
"[sl-g56-021 druhy] Aký slovný druh je „a“ vo vete „Mama a otec spievajú.“?|spojka|predložka|častica",
"[sl-g56-022 druhy] Aký slovný druh je slovo „au“?|citoslovce|častica|príslovka",
"[sl-g56-023 druhy] Koľko slovných druhov má slovenčina?|10|8|12|6",
"[sl-g56-024 druhy] Ktoré slovné druhy sú neohybné?|príslovky, predložky, spojky, častice, citoslovcia|podstatné mená a slovesá|prídavné mená a zámená",
"[sl-g56-025 druhy] V akom čase je sloveso „pôjdem“?|budúci čas|minulý čas|prítomný čas",
"[sl-g56-026 druhy] V akom čase je sloveso „písala“?|minulý čas|prítomný čas|budúci čas",
"[sl-g56-027 druhy] Ktorá osoba a číslo je sloveso „píšeme“?|1. osoba množného čísla|3. osoba jednotného čísla|2. osoba množného čísla",
"[sl-g56-028 vyznam] Ktoré slovo má podobný význam ako „hovoriť“?|rozprávať|mlčať|počúvať",
"[sl-g56-029 vyznam] Ktoré slovo má opačný význam ako „začiatok“?|koniec|štart|stred",
"[sl-g56-030 iy] Ktoré slovo je napísané správne?|výlet|vílet#Predponu vy-/vý- píšeme s y.",
"[sl-g56-031 vybrane] Ktoré slovo je napísané správne?|nazývať|nazívať#Nazývať je vybrané slovo po z.",
"[sl-g56-032 vybrane] Ktoré slovo je napísané správne?|umývať|umívať#Umývať je príbuzné s vybraným slovom myť.",
"[sl-g56-033 pady] T:Napíš slovo „mama“ v 3. páde jednotného čísla (komu?).|mame#Komu? mame.",
"[sl-g56-034 pady] T:Napíš slovo „brat“ v 2. páde jednotného čísla (koho?).|brata#Koho? brata."
],
g79: [
"[sl-g79-001 sklad] Čo je podmet?|vetný člen, o ktorom sa vo vete niečo hovorí|vetný člen, ktorý vyjadruje dej|rozvíjajúci vetný člen",
"[sl-g79-002 sklad] Ktoré slovo je podmet vo vete „Malý pes šteká.“?|pes|malý|šteká",
"[sl-g79-003 sklad] Čo je prísudok vo vete „Deti sa hrajú v parku.“?|hrajú sa|deti|v parku",
"[sl-g79-004 sklad] Aký vetný člen je „malý“ vo vete „Malý pes šteká.“?|prívlastok|predmet|podmet",
"[sl-g79-005 sklad] Aký vetný člen je „knihu“ vo vete „Čítam knihu.“?|predmet|prísudok|prívlastok",
"[sl-g79-006 sklad] Aký vetný člen je „ráno“ vo vete „Ráno vstávam.“?|príslovkové určenie času|predmet|podmet",
"[sl-g79-007 sklad] Ako sa volá spojenie podmetu a prísudku?|prisudzovací sklad|určovací sklad|priraďovací sklad",
"[sl-g79-008 sklad] Koľko jednoduchých viet má súvetie „Prišiel domov a sadol si.“?|2|1|3",
"[sl-g79-009 vety] Ktorá veta je napísaná správne?|Viem, že prídeš.|Viem že, prídeš.|Viem že prídeš,#Pred spojkou „že“ píšeme čiarku.",
"[sl-g79-010 vety] Ktorá veta je napísaná správne?|Prišiel, ale neostal.|Prišiel ale, neostal.|Prišiel ale neostal.#Pred spojkou „ale“ píšeme čiarku.",
"[sl-g79-011 frazeologia] Čo je frazeologizmus?|ustálené slovné spojenie s preneseným významom|nové cudzie slovo|skratka",
"[sl-g79-012 frazeologia] Čo znamená frazeologizmus „mať maslo na hlave“?|mať niečo na svedomí|byť hladný|byť šikovný",
"[sl-g79-013 frazeologia] Čo znamená frazeologizmus „hádzať hrach na stenu“?|robiť niečo zbytočne|variť obed|hrať sa",
"[sl-g79-014 tvorenie] Ktoré slovo vzniklo skladaním?|vodopád|učiteľ|domček#Vodopád = voda + padať.",
"[sl-g79-015 tvorenie] Ktoré slovo vzniklo odvodzovaním?|domček|vodopád|napr.#Domček vznikol z dom + prípona -ček.",
"[sl-g79-016 tvorenie] Ktoré slovo je skratka?|napr.|auto|vodopád",
"[sl-g79-017 sloh] Do ktorého jazykového štýlu patrí žiadosť?|administratívny|umelecký|hovorový",
"[sl-g79-018 sloh] Do ktorého jazykového štýlu patrí poviedka?|umelecký|administratívny|odborný",
"[sl-g79-019 vyznam] Čo je synonymum?|slovo s rovnakým alebo podobným významom|slovo s opačným významom|slovo s rovnakým znením, ale iným významom",
"[sl-g79-020 vyznam] Čo je homonymum?|slovo s rovnakým znením, ale iným významom|slovo s opačným významom|slovo s podobným významom",
"[sl-g79-021 sklad] Ktorá veta je súvetie?|Keď prší, zostanem doma.|Zostanem doma.|Dnes prší.",
"[sl-g79-022 sklad] Aká vedľajšia veta je v súvetí „Viem, že prídeš.“?|predmetová|podmetová|prívlastková#Pýtame sa: Viem čo? – že prídeš. Vedľajšia veta nahrádza predmet.",
"[sl-g79-023 velke] Ktorá veta je napísaná správne?|Bývam na Hlavnej ulici.|Bývam na hlavnej Ulici.|Bývam na Hlavnej Ulici.",
"[sl-g79-024 velke] Ktorý zápis je správny?|Slovenská republika|slovenská Republika|Slovenská Republika",
"[sl-g79-025 velke] Ktorý zápis názvu sviatku je správny?|Vianoce|vianoce|Vianóce",
"[sl-g79-026 spisovnost] Ktoré spojenie je správne?|desať chlapcov|desať chlapci|desiati chlapcov",
"[sl-g79-027 pady] Ktoré spojenie je správne?|s pánom učiteľom|so pánom učiteľom|z pánom učiteľom",
"[sl-g79-028 pady] Doplň predložku: „Idem ___ školy.“|zo|so|s#Odkiaľ? zo školy – predložka z/zo s 2. pádom.",
"[sl-g79-029 pady] Doplň predložku: „Vrátil sa ___ výletu.“|z|s|so#Odkiaľ? z výletu.",
"[sl-g79-030 pady] Doplň predložku: „Idem do kina ___ sestrou.“|so|zo|z#S kým? so sestrou – predložka s/so so 7. pádom.",
"[sl-g79-031 spisovnost] Čo je bohemizmus?|nespisovné slovo prevzaté z češtiny|slovo prevzaté z angličtiny|staré slovenské slovo",
"[sl-g79-032 spisovnost] Ktoré slovo je spisovné?|skoro|brzo|brzy#„Brzo“ je bohemizmus, spisovne „skoro“.",
"[sl-g79-033 spisovnost] Ktoré slovo je spisovné?|zbytočný|zbytečný|sbytočný#„Zbytečný“ je bohemizmus, spisovne „zbytočný“."
],
},
anglictina: {
u2: [ /* Učiteľ – vloz_do_hry.py */
"[an-u2-001 pozdravy] Čo znamená „Good night“?|Dobrú noc|Dobré ráno|Ďakujem|Dovidenia#Pozdrav „Good night“ znamená „Dobrú noc“.",
"[an-u2-002 pozdravy] Čo znamená „Excuse me“?|S dovolením / prepáčte|Ďakujem|Dovidenia|Áno#Spojenie „Excuse me“ znamená „S dovolením / prepáčte“.",
"[an-u2-003 pozdravy] Čo znamená „Sorry“?|Prepáč|Prosím|Ďakujem|Áno#Slovo „Sorry“ znamená „Prepáč“.",
"[an-u2-004 pozdravy] Čo znamená „I’m fine“?|Mám sa dobre|Som smutný|Ďakujem|Dovidenia#Spojenie „I’m fine“ znamená „Mám sa dobre“.",
"[an-u2-005 pozdravy] Čo znamená „See you“?|Dovidenia / uvidíme sa|Ďakujem|Prepáč|Áno#Spojenie „See you“ znamená „Dovidenia / uvidíme sa“.",
"[an-u2-006 pozdravy] Ako sa po anglicky opýtaš „Ako sa máš?“|How are you?|What is your name?|How old are you?|Where are you?#Keď sa chceš opýtať „Ako sa máš?“, po anglicky povieš „How are you?“",
"[an-u2-007 cisla] Čo znamená „eleven“?|jedenásť|dvanásť|sedem|jeden#Slovo „eleven“ znamená „jedenásť“.",
"[an-u2-008 cisla] Čo znamená „twelve“?|dvanásť|dvadsať|dva|jedenásť#Slovo „twelve“ znamená „dvanásť“.",
"[an-u2-009 cisla] Čo znamená „fifteen“?|pätnásť|päť|päťdesiat|štrnásť#Slovo „fifteen“ znamená „pätnásť“.",
"[an-u2-010 cisla] Ako sa po anglicky povie „dvadsať“?|twenty|twelve|two|ten#Slovo „dvadsať“ sa po anglicky povie „twenty“.",
"[an-u2-011 cisla] Ako sa po anglicky povie „osem“?|eight|seven|nine|six#Slovo „osem“ sa po anglicky povie „eight“.",
"[an-u2-012 cisla] Čo znamená „six“?|šesť|sedem|šestnásť|tri#Slovo „six“ znamená „šesť“.",
"[an-u2-013 farby] Ako sa po anglicky povie „ružová“?|pink|red|brown|orange#Slovo „ružová“ sa po anglicky povie „pink“.",
"[an-u2-014 farby] Ako sa po anglicky povie „hnedá“?|brown|black|blue|pink#Slovo „hnedá“ sa po anglicky povie „brown“.",
"[an-u2-015 farby] Ako sa po anglicky povie „oranžová“?|orange|yellow|pink|brown#Slovo „oranžová“ sa po anglicky povie „orange“.",
"[an-u2-016 farby] Čo znamená „grey“?|sivá|zelená|biela|hnedá#Slovo „grey“ znamená „sivá“.",
"[an-u2-017 farby] Ako sa po anglicky povie „topánky“?|shoes|socks|shirt|hat#Slovo „topánky“ sa po anglicky povie „shoes“.",
"[an-u2-018 farby] Ako sa po anglicky povie „klobúk“?|hat|shoes|coat|dress#Slovo „klobúk“ sa po anglicky povie „hat“.",
"[an-u2-019 farby] Čo znamená „coat“?|kabát|šaty|nohavice|ponožky#Slovo „coat“ znamená „kabát“.",
"[an-u2-020 farby] Čo znamená „socks“?|ponožky|topánky|rukavice|šatka#Slovo „socks“ znamená „ponožky“.",
"[an-u2-021 rodina] Ako sa po anglicky povie „sestra“?|sister|brother|mother|friend#Slovo „sestra“ sa po anglicky povie „sister“.",
"[an-u2-022 rodina] Ako sa po anglicky povie „brat“?|brother|sister|father|boy#Slovo „brat“ sa po anglicky povie „brother“.",
"[an-u2-023 rodina] Čo znamená „grandmother“?|babička|dedko|mama|teta#Slovo „grandmother“ znamená „babička“.",
"[an-u2-024 rodina] Čo znamená „grandfather“?|dedko|babička|otec|ujo#Slovo „grandfather“ znamená „dedko“.",
"[an-u2-025 rodina] Ako sa po anglicky povie „kamarát“?|friend|brother|teacher|child#Slovo „kamarát“ sa po anglicky povie „friend“.",
"[an-u2-026 rodina] Čo znamená „family“?|rodina|škola|trieda|dom#Slovo „family“ znamená „rodina“.",
"[an-u2-027 skola] Ako sa po anglicky povie „ceruzka“?|pencil|pen|rubber|bag#Slovo „ceruzka“ sa po anglicky povie „pencil“.",
"[an-u2-028 skola] Ako sa po anglicky povie „pero“?|pen|pencil|book|ruler#Slovo „pero“ sa po anglicky povie „pen“.",
"[an-u2-029 skola] Čo znamená „bag“?|taška|stôl|lavica|dvere#Slovo „bag“ znamená „taška“.",
"[an-u2-030 skola] Čo znamená „teacher“?|učiteľ|žiak|riaditeľ|kamarát#Slovo „teacher“ znamená „učiteľ“.",
"[an-u2-031 skola] Ako sa po anglicky povie „žiak“?|pupil|teacher|school|book#Slovo „žiak“ sa po anglicky povie „pupil“.",
"[an-u2-032 skola] Čo znamená „desk“?|lavica|tabuľa|taška|dvere#Slovo „desk“ znamená „lavica“.",
"[an-u2-033 skola] Ako sa po anglicky povie „tabuľa“?|board|door|window|wall#Slovo „tabuľa“ sa po anglicky povie „board“.",
"[an-u2-034 skola] Čo znamená „school“?|škola|trieda|dom|obchod#Slovo „school“ znamená „škola“.",
"[an-u2-035 jedlo] Ako sa po anglicky povie „chlieb“?|bread|milk|cheese|water#Slovo „chlieb“ sa po anglicky povie „bread“.",
"[an-u2-036 jedlo] Ako sa po anglicky povie „mlieko“?|milk|water|juice|tea#Slovo „mlieko“ sa po anglicky povie „milk“.",
"[an-u2-037 jedlo] Čo znamená „banana“?|banán|jablko|hruška|pomaranč#Slovo „banana“ znamená „banán“.",
"[an-u2-038 jedlo] Čo znamená „water“?|voda|mlieko|džús|čaj#Slovo „water“ znamená „voda“.",
"[an-u2-039 jedlo] Ako sa po anglicky povie „syr“?|cheese|bread|egg|meat#Slovo „syr“ sa po anglicky povie „cheese“.",
"[an-u2-040 jedlo] Čo znamená „egg“?|vajíčko|syr|chlieb|múka#Slovo „egg“ znamená „vajíčko“.",
"[an-u2-041 jedlo] Ako sa po anglicky povie „mrkva“?|carrot|potato|tomato|apple#Slovo „mrkva“ sa po anglicky povie „carrot“.",
"[an-u2-042 jedlo] Čo znamená „cake“?|torta|chlieb|syr|polievka#Slovo „cake“ znamená „torta“.",
"[an-u2-043 telo_pokyny] Ako sa po anglicky povie „hlava“?|head|hand|hair|hat#Slovo „hlava“ sa po anglicky povie „head“.",
"[an-u2-044 telo_pokyny] Ako sa po anglicky povie „oko“?|eye|ear|nose|mouth#Slovo „oko“ sa po anglicky povie „eye“.",
"[an-u2-045 telo_pokyny] Čo znamená „leg“?|noha|ruka|hlava|chrbát#Slovo „leg“ znamená „noha“.",
"[an-u2-046 telo_pokyny] Ako sa po anglicky povie „nos“?|nose|mouth|ear|face#Slovo „nos“ sa po anglicky povie „nose“.",
"[an-u2-047 telo_pokyny] Čo znamená „mouth“?|ústa|nos|oko|zub#Slovo „mouth“ znamená „ústa“.",
"[an-u2-048 telo_pokyny] Ako sa po anglicky povie „ucho“?|ear|eye|hair|head#Slovo „ucho“ sa po anglicky povie „ear“.",
"[an-u2-049 zvierata] Ako sa po anglicky povie „králik“?|rabbit|mouse|duck|frog#Slovo „králik“ sa po anglicky povie „rabbit“.",
"[an-u2-050 zvierata] Ako sa po anglicky povie „prasa“?|pig|sheep|duck|goat#Slovo „prasa“ sa po anglicky povie „pig“.",
"[an-u2-051 zvierata] Čo znamená „sheep“?|ovca|koza|krava|kôň#Slovo „sheep“ znamená „ovca“.",
"[an-u2-052 zvierata] Čo znamená „frog“?|žaba|myš|kačica|ryba#Slovo „frog“ znamená „žaba“.",
"[an-u2-053 zvierata] Ako sa po anglicky povie „kačica“?|duck|hen|bird|goose#Slovo „kačica“ sa po anglicky povie „duck“.",
"[an-u2-054 zvierata] Čo znamená „mouse“?|myš|mačka|pes|vták#Slovo „mouse“ znamená „myš“.",
"[an-u2-055 domov] Ako sa po anglicky povie „kuchyňa“?|kitchen|bedroom|bathroom|garden#Slovo „kuchyňa“ sa po anglicky povie „kitchen“.",
"[an-u2-056 domov] Čo znamená „bedroom“?|spálňa|kuchyňa|kúpeľňa|záhrada#Slovo „bedroom“ znamená „spálňa“.",
"[an-u2-057 domov] Ako sa po anglicky povie „bicykel“?|bike|bus|train|boat#Slovo „bicykel“ sa po anglicky povie „bike“.",
"[an-u2-058 domov] Čo znamená „doll“?|bábika|lopta|kocka|medvedík#Slovo „doll“ znamená „bábika“.",
"[an-u2-059 domov] Ako sa po anglicky povie „skakať“?|jump|run|swim|sing#Slovo „skakať“ sa po anglicky povie „jump“.",
"[an-u2-060 domov] Čo znamená „swim“?|plávať|bežať|spievať|sedieť#Slovo „swim“ znamená „plávať“."
],
u1: [ /* Učiteľ – vloz_do_hry.py */
"[an-u1-001 pozdravy] Čo povieš po anglicky, keď prídeš do triedy?|Hello|Goodbye|Sorry#Keď prídeš do triedy, pozdravíš po anglicky slovom Hello.",
"[an-u1-002 pozdravy] Čo povieš po anglicky, keď odchádzaš?|Bye|Hello|Please#Keď odchádzaš, po anglicky sa rozlúčiš slovom Bye.",
"[an-u1-003 pozdravy] Čo znamená Please?|prosím|ďakujem|ahoj#Slovo Please znamená prosím.",
"[an-u1-004 pozdravy] Čo odpovieš na Thank you?|You're welcome|Goodbye|Sit down#Na „Thank you“ odpovieš „You're welcome“.",
"[an-u1-005 pozdravy] Čo znamená Yes?|áno|nie|prosím#Slovo Yes znamená áno.",
"[an-u1-006 pozdravy] Čo znamená No?|nie|áno|ahoj#Slovo No znamená nie.",
"[an-u1-007 pozdravy] Ako sa po anglicky popraje dobré ráno?|Good morning|Good night|Happy birthday#Dobré ráno sa po anglicky povie Good morning.",
"[an-u1-008 pozdravy] Čo znamená Happy birthday?|všetko najlepšie k narodeninám|dobrú chuť|dobrú noc#Happy birthday znamená všetko najlepšie k narodeninám.",
"[an-u1-009 farby] Akú farbu má pomaranč na obrázku? Po anglicky.|orange|blue|black#Pomaranč je oranžový, po anglicky orange.",
"[an-u1-010 farby] Ktoré anglické slovo patrí k červenému balónu?|red|green|blue#Červená je po anglicky red.",
"[an-u1-011 farby] Ktoré anglické slovo patrí k žltému slnku?|yellow|black|pink#Žltá je po anglicky yellow.",
"[an-u1-012 farby] What colour is it? Aká je to farba? Na obrázku je zelený list.|green|orange|grey#Zelená je po anglicky green.",
"[an-u1-013 cisla] Koľko je four?|4|3|5|6#Slovo four znamená číslo 4.",
"[an-u1-014 cisla] Koľko je six?|6|5|7|8#Slovo six znamená číslo 6.",
"[an-u1-015 cisla] Koľko je seven?|7|6|8|9#Slovo seven znamená číslo 7.",
"[an-u1-016 cisla] Koľko je eight?|8|7|9|10#Slovo eight znamená číslo 8.",
"[an-u1-017 cisla] Koľko je nine?|9|8|10|1#Slovo nine znamená číslo 9.",
"[an-u1-018 cisla] Koľko je zero?|0|1|10|2#Slovo zero znamená číslo 0.",
"[an-u1-019 cisla] Ktoré anglické slovo je číslo 1?|one|ten|nine#Číslo 1 je po anglicky one.",
"[an-u1-020 zvierata] Ktoré anglické slovo patrí k obrázku prasaťa?|pig|hen|duck#K obrázku prasaťa patrí anglické slovo pig.",
"[an-u1-021 zvierata] Ktoré anglické slovo patrí k obrázku sliepky?|hen|frog|bear#K obrázku sliepky patrí anglické slovo hen.",
"[an-u1-022 zvierata] Ktoré anglické slovo patrí k obrázku králika?|rabbit|mouse|sheep#K obrázku králika patrí anglické slovo rabbit.",
"[an-u1-023 zvierata] Ktoré anglické slovo patrí k obrázku myšky?|mouse|duck|pig#K obrázku myšky patrí anglické slovo mouse.",
"[an-u1-024 zvierata] Ktoré anglické slovo patrí k obrázku medveďa?|bear|hen|frog#K obrázku medveďa patrí anglické slovo bear.",
"[an-u1-025 zvierata] Ktoré anglické slovo patrí k obrázku žaby?|frog|sheep|rabbit#K obrázku žaby patrí anglické slovo frog.",
"[an-u1-026 zvierata] Ktoré anglické slovo patrí k obrázku ovce?|sheep|bear|mouse#K obrázku ovce patrí anglické slovo sheep.",
"[an-u1-027 zvierata] Ktoré anglické slovo patrí k obrázku kačice?|duck|hen|pig#K obrázku kačice patrí anglické slovo duck.",
"[an-u1-028 rodina] Kto je sister?|sestra|brat|babička#Slovo sister znamená sestra.",
"[an-u1-029 rodina] Kto je brother?|brat|sestra|mama#Slovo brother znamená brat.",
"[an-u1-030 rodina] Kto je grandma?|babička|dedko|mama#Slovo grandma znamená babička.",
"[an-u1-031 rodina] Kto je grandpa?|dedko|babička|otec#Slovo grandpa znamená dedko.",
"[an-u1-032 rodina] Kto je baby?|bábätko|pes|učiteľ#Slovo baby znamená bábätko.",
"[an-u1-033 domov] Ktoré anglické slovo patrí k obrázku domu?|house|car|book#K obrázku domu patrí anglické slovo house.",
"[an-u1-034 rodina] Ktoré anglické slovo znamená rodina?|family|school|friend#Rodina je po anglicky family.",
"[an-u1-035 skola] Ktoré anglické slovo patrí k obrázku ceruzky?|pencil|rubber|bag#K obrázku ceruzky patrí anglické slovo pencil.",
"[an-u1-036 skola] Ktoré anglické slovo patrí k obrázku tašky?|bag|pencil|ruler#K obrázku tašky patrí anglické slovo bag.",
"[an-u1-037 skola] Ktoré anglické slovo patrí k obrázku gumy na mazanie?|rubber|pencil|pen#K obrázku gumy na mazanie patrí anglické slovo rubber.",
"[an-u1-038 domov] Ktoré anglické slovo patrí k obrázku bábiky?|doll|ball|car#K obrázku bábiky patrí anglické slovo doll.",
"[an-u1-039 domov] Ktoré anglické slovo patrí k obrázku plyšového medvedíka?|teddy|doll|bag#K obrázku plyšového medvedíka patrí anglické slovo teddy.",
"[an-u1-040 skola] Ktoré anglické slovo patrí k obrázku školy?|school|house|park#K obrázku školy patrí anglické slovo school.",
"[an-u1-041 skola] Kto je teacher?|učiteľ alebo učiteľka|žiak|vodič#Slovo teacher znamená učiteľ alebo učiteľka.",
"[an-u1-042 jedlo] Ktoré anglické slovo patrí k obrázku banánu?|banana|milk|bread#K obrázku banánu patrí anglické slovo banana.",
"[an-u1-043 jedlo] Ktoré anglické slovo patrí k obrázku mlieka?|milk|water|juice#K obrázku mlieka patrí anglické slovo milk.",
"[an-u1-044 jedlo] Ktoré anglické slovo patrí k obrázku chleba?|bread|cake|egg#K obrázku chleba patrí anglické slovo bread.",
"[an-u1-045 jedlo] Ktoré anglické slovo patrí k obrázku vody?|water|milk|juice#K obrázku vody patrí anglické slovo water.",
"[an-u1-046 jedlo] Ktoré anglické slovo patrí k obrázku koláča?|cake|bread|cheese#K obrázku koláča patrí anglické slovo cake.",
"[an-u1-047 jedlo] Ktoré anglické slovo patrí k obrázku vajíčka?|egg|cheese|banana#K obrázku vajíčka patrí anglické slovo egg.",
"[an-u1-048 jedlo] Ktoré anglické slovo patrí k obrázku syra?|cheese|bread|milk#K obrázku syra patrí anglické slovo cheese.",
"[an-u1-049 telo_pokyny] Čo je head?|hlava|ruka|noha#Slovo head znamená hlava.",
"[an-u1-050 telo_pokyny] Čo sú eyes?|oči|uši|ústa#Slovo eyes znamená oči.",
"[an-u1-051 telo_pokyny] Čo je nose?|nos|ústa|ucho#Slovo nose znamená nos.",
"[an-u1-052 telo_pokyny] Čo je mouth?|ústa|nos|oko#Slovo mouth znamená ústa.",
"[an-u1-053 telo_pokyny] Čo znamená Sit down?|sadni si|vstaň|pozeraj#Sit down znamená sadni si.",
"[an-u1-054 telo_pokyny] Čo znamená Stand up?|vstaň|sadni si|počúvaj#Stand up znamená vstaň.",
"[an-u1-055 telo_pokyny] Čo znamená Listen?|počúvaj|skákaj|spi#Slovo Listen znamená počúvaj."
],
g12: [
"[an-g12-001 zvierata] Ako sa po anglicky povie „pes“?|dog|cat|cow|bird",
"[an-g12-002 zvierata] Ako sa po anglicky povie „mačka“?|cat|dog|mouse|fish",
"[an-g12-003 farby] Ako sa po anglicky povie „červená“?|red|blue|green|yellow",
"[an-g12-004 farby] Ako sa po anglicky povie „modrá“?|blue|red|black|white",
"[an-g12-005 farby] Ako sa po anglicky povie „zelená“?|green|yellow|brown|pink",
"[an-g12-006 farby] Ako sa po anglicky povie „žltá“?|yellow|green|orange|grey",
"[an-g12-007 farby] Ako sa po anglicky povie „čierna“?|black|white|blue|red",
"[an-g12-008 farby] Ako sa po anglicky povie „biela“?|white|black|green|purple",
"[an-g12-009 cisla] Čo znamená „one“?|jeden|dva|tri|desať",
"[an-g12-010 cisla] Čo znamená „three“?|tri|dva|päť|osem",
"[an-g12-011 cisla] Čo znamená „five“?|päť|štyri|šesť|deväť",
"[an-g12-012 cisla] Čo znamená „ten“?|desať|dva|sedem|jedenásť",
"[an-g12-013 cisla] Čo znamená „two“?|dva|desať|tri|jeden",
"[an-g12-014 zvierata] Ako sa po anglicky povie „ryba“?|fish|frog|fox|bird",
"[an-g12-015 zvierata] Ako sa po anglicky povie „vták“?|bird|bear|bee|bat",
"[an-g12-016 zvierata] Ako sa po anglicky povie „krava“?|cow|horse|pig|sheep",
"[an-g12-017 zvierata] Ako sa po anglicky povie „kôň“?|horse|house|hen|goat",
"[an-g12-018 pozdravy] Čo znamená „Hello“?|Ahoj|Dovidenia|Ďakujem|Prosím",
"[an-g12-019 pozdravy] Čo znamená „Goodbye“?|Dovidenia|Ahoj|Dobrú noc|Prosím",
"[an-g12-020 pozdravy] Čo znamená „Thank you“?|Ďakujem|Prepáč|Prosím|Ahoj",
"[an-g12-021 jedlo] Čo znamená „apple“?|jablko|banán|hruška|slivka",
"[an-g12-022 domov] Čo znamená „house“?|dom|myš|strom|auto",
"[an-g12-023 slovicka] Čo znamená „sun“?|slnko|mesiac|hviezda|dážď",
"[an-g12-024 domov] Čo znamená „ball“?|lopta|bábika|kocka|auto",
"[an-g12-025 rodina] Čo znamená „mother“?|mama|otec|sestra|babka",
"[an-g12-026 rodina] Čo znamená „father“?|otec|brat|dedko|mama",
"[an-g12-027 slovicka] Čo znamená „car“?|auto|vlak|loď|bicykel",
"[an-g12-028 skola] Čo znamená „book“?|kniha|zošit|pero|stôl",
"[an-g12-029 slovicka] Čo znamená „tree“?|strom|kvet|tráva|les",
"[an-g12-030 zvierata] T:Napíš po anglicky „pes“.|dog",
"[an-g12-031 zvierata] T:Napíš po anglicky „mačka“.|cat",
"[an-g12-032 cisla] T:Napíš po anglicky číslo 4.|four"
],
g34: [
"[an-g34-001 gramatika] Doplň: I ___ a pupil.|am|is|are",
"[an-g34-002 gramatika] Doplň: She ___ my sister.|is|am|are",
"[an-g34-003 gramatika] Doplň: They ___ happy.|are|is|am",
"[an-g34-004 gramatika] Doplň: We ___ friends.|are|is|am",
"[an-g34-005 gramatika] Aké je množné číslo slova „cat“?|cats|cates|caties",
"[an-g34-006 gramatika] Aké je množné číslo slova „box“?|boxes|boxs|boxies",
"[an-g34-007 gramatika] Aké je množné číslo slova „child“?|children|childs|childes",
"[an-g34-008 gramatika] Aké je množné číslo slova „mouse“?|mice|mouses|mices",
"[an-g34-009 gramatika] Aké je množné číslo slova „man“?|men|mans|mens",
"[an-g34-010 rodina] Ako sa po anglicky povie „brat“?|brother|sister|father|uncle",
"[an-g34-011 rodina] Ako sa po anglicky povie „sestra“?|sister|brother|aunt|mother",
"[an-g34-012 rodina] Ako sa po anglicky povie „babka“?|grandmother|grandfather|aunt|daughter",
"[an-g34-013 jedlo] Ako sa po anglicky povie „chlieb“?|bread|butter|milk|cheese",
"[an-g34-014 jedlo] Ako sa po anglicky povie „mlieko“?|milk|water|juice|tea",
"[an-g34-015 jedlo] Ako sa po anglicky povie „syr“?|cheese|cherry|chicken|bread",
"[an-g34-016 slovicka] Ako sa po anglicky povie „pondelok“?|Monday|Sunday|Friday|Tuesday",
"[an-g34-017 slovicka] Ako sa po anglicky povie „nedeľa“?|Sunday|Saturday|Monday|Thursday",
"[an-g34-018 gramatika] Doplň: I ___ a dog.|have got|has got|am got",
"[an-g34-019 gramatika] Doplň: He ___ a bike.|has got|have got|are got",
"[an-g34-020 gramatika] Doplň: ___ you like apples?|Do|Does|Are",
"[an-g34-021 gramatika] Doplň: I can ___.|swim|swims|swimming",
"[an-g34-022 protiklady] Ktoré slovo má opačný význam ako „big“?|small|tall|long|old",
"[an-g34-023 protiklady] Ktoré slovo má opačný význam ako „hot“?|cold|warm|wet|new",
"[an-g34-024 protiklady] Ktoré slovo má opačný význam ako „happy“?|sad|good|nice|funny",
"[an-g34-025 domov] Čo znamená „kitchen“?|kuchyňa|spálňa|kúpeľňa|záhrada",
"[an-g34-026 skola] Čo znamená „school“?|škola|ulica|obchod|park",
"[an-g34-027 skola] Čo znamená „teacher“?|učiteľ|žiak|lekár|kuchár",
"[an-g34-028 cisla] Čo znamená „twelve“?|dvanásť|dvadsať|jedenásť|dva",
"[an-g34-029 cisla] Koľko je „seven + three“?|ten|nine|eleven|eight",
"[an-g34-030 jedlo] T:Napíš po anglicky „mlieko“.|milk",
"[an-g34-031 farby] T:Napíš po anglicky „červená“.|red",
"[an-g34-032 gramatika] T:Napíš množné číslo slova „book“.|books"
],
g56: [
"[an-g56-001 gramatika] Doplň: She ___ to school every day.|goes|go|going",
"[an-g56-002 gramatika] Doplň: He ___ football on Sundays.|plays|play|playing",
"[an-g56-003 casy] Doplň: Look! The baby ___.|is sleeping|sleeps|sleep",
"[an-g56-004 casy] Doplň: I ___ TV now.|am watching|watch|watches",
"[an-g56-005 casy] Doplň: They ___ in London last year.|were|was|are",
"[an-g56-006 casy] Doplň: I ___ at home yesterday.|was|were|am",
"[an-g56-007 casy] Aký je minulý čas slovesa „go“?|went|goed|gone",
"[an-g56-008 casy] Aký je minulý čas slovesa „see“?|saw|seed|seen",
"[an-g56-009 casy] Aký je minulý čas slovesa „eat“?|ate|eated|eaten",
"[an-g56-010 casy] Aký je minulý čas slovesa „have“?|had|haved|has",
"[an-g56-011 casy] Aký je minulý čas slovesa „play“?|played|plaied|plaid",
"[an-g56-012 casy] Aký je minulý čas slovesa „buy“?|bought|buyed|brought",
"[an-g56-013 gramatika] Doplň: ___ she like chocolate?|Does|Do|Is",
"[an-g56-014 gramatika] Doplň: We didn't ___ the film.|see|saw|seen",
"[an-g56-015 gramatika] Doplň: The book is ___ the table.|on|at|of",
"[an-g56-016 gramatika] Doplň: I was born ___ 2014.|in|on|at",
"[an-g56-017 gramatika] Doplň: My birthday is ___ Monday.|on|in|at",
"[an-g56-018 gramatika] Doplň: The lesson starts ___ 8 o'clock.|at|on|in",
"[an-g56-019 slovicka] Ako sa po anglicky opýtaš: „Koľko to stojí?“|How much is it?|How many is it?|What is it cost?",
"[an-g56-020 slovicka] Čo znamená veta: „Where do you live?“|Kde bývaš?|Kedy prídeš?|Ako sa máš?",
"[an-g56-021 slovicka] Čo znamená „often“?|často|nikdy|niekedy|vždy",
"[an-g56-022 slovicka] Čo znamená „never“?|nikdy|vždy|často|zriedka",
"[an-g56-023 slovicka] Čo znamená „weather“?|počasie|voda|vietor|víkend",
"[an-g56-024 slovicka] Čo znamená „usually“?|zvyčajne|nikdy|teraz|včera",
"[an-g56-025 gramatika] Doplň: There ___ two cats in the garden.|are|is|be",
"[an-g56-026 gramatika] Doplň: There ___ a cat on the sofa.|is|are|am",
"[an-g56-027 gramatika] Doplň: This is ___ apple.|an|a|many",
"[an-g56-028 gramatika] Doplň: She has ___ new car.|a|an|many",
"[an-g56-029 gramatika] Ktoré slovo je sloveso?|run|happy|table|blue",
"[an-g56-030 gramatika] Ktoré zámeno môže nahradiť meno „Peter“?|he|she|it|they",
"[an-g56-031 gramatika] Ktoré zámeno môže nahradiť „Anna and I“?|we|they|you|she",
"[an-g56-032 casy] T:Napíš minulý čas slovesa „go“.|went",
"[an-g56-033 casy] T:Napíš minulý čas slovesa „play“.|played",
"[an-g56-034 casy] T:Doplň správny tvar (prítomný čas): She ___ (have) a cat.|has"
],
g79: [
"[an-g79-001 casy] Doplň: I have ___ finished my homework.|already|yet|ago",
"[an-g79-002 casy] Doplň: Have you ever ___ to London?|been|was|go",
"[an-g79-003 casy] Doplň: She has lived here ___ 2015.|since|for|ago",
"[an-g79-004 casy] Doplň: We have known him ___ five years.|for|since|ago",
"[an-g79-005 casy] Doplň: I saw him two days ___.|ago|since|for",
"[an-g79-006 gramatika] Aký je 2. stupeň prídavného mena „big“?|bigger|biger|more big",
"[an-g79-007 gramatika] Aký je 3. stupeň prídavného mena „good“?|the best|the goodest|the better",
"[an-g79-008 gramatika] Aký je 2. stupeň prídavného mena „bad“?|worse|badder|worst",
"[an-g79-009 gramatika] Aký je 2. stupeň prídavného mena „beautiful“?|more beautiful|beautifuller|most beautiful",
"[an-g79-010 gramatika] Doplň: She is ___ than her brother.|taller|tallest|more tall",
"[an-g79-011 casy] Doplň: If it rains, I ___ at home.|will stay|stayed|would stayed",
"[an-g79-012 casy] Doplň: If I ___ rich, I would buy a house.|were|am|will be",
"[an-g79-013 gramatika] Doplň: The bridge ___ built in 1990.|was|were|is",
"[an-g79-014 gramatika] Doplň: English ___ spoken all over the world.|is|are|be",
"[an-g79-015 gramatika] Doplň: You ___ wear a helmet. It's the rule.|must|mustn't|can't",
"[an-g79-016 gramatika] Doplň: I'm looking forward ___ you.|to seeing|to see|seeing",
"[an-g79-017 gramatika] Doplň: He asked me where I ___.|lived|lives|living",
"[an-g79-018 casy] Doplň: While I ___ TV, the phone rang.|was watching|watched|am watching",
"[an-g79-019 gramatika] Doplň: She ___ like coffee.|doesn't|don't|isn't",
"[an-g79-020 gramatika] Doplň: How ___ water do you drink?|much|many|lot",
"[an-g79-021 gramatika] Doplň: How ___ friends do you have?|many|much|lot",
"[an-g79-022 gramatika] Ktoré sloveso je nepravidelné?|write|walk|play|watch",
"[an-g79-023 casy] Aký je 3. tvar (past participle) slovesa „write“?|written|wrote|writed",
"[an-g79-024 casy] Aký je 3. tvar slovesa „take“?|taken|took|taked",
"[an-g79-025 casy] Aký je 3. tvar slovesa „do“?|done|did|doed",
"[an-g79-026 slovicka] Čo znamená „although“?|hoci|preto|pretože|potom",
"[an-g79-027 slovicka] Čo znamená „because“?|pretože|hoci|ale|ak",
"[an-g79-028 slovicka] Čo znamená „environment“?|životné prostredie|vláda|zariadenie|spotreba",
"[an-g79-029 slovicka] Čo znamená „to improve“?|zlepšiť|zhoršiť|zabudnúť|zlomiť",
"[an-g79-030 gramatika] Doplň: This is the girl ___ won the race.|who|which|where",
"[an-g79-031 gramatika] Doplň: That's the house ___ I was born.|where|who|which",
"[an-g79-032 casy] T:Napíš 3. tvar slovesa „go“.|gone",
"[an-g79-033 gramatika] T:Napíš 2. stupeň prídavného mena „small“.|smaller",
"[an-g79-034 casy] T:Napíš minulý čas slovesa „write“.|wrote"
]
},
fyzika: {
u2: [ /* Učiteľ – vloz_do_hry.py */
"[fy-u2-001 pocasie] Ktorý prístroj meria teplotu vzduchu?|teplomer|hodiny|váhy|kompas#Teplotu vzduchu meriame teplomerom.",
"[fy-u2-002 pocasie] Čo je vietor?|pohybujúci sa vzduch|padajúca voda|svietiace slnko|tichý sneh#Vietor je vzduch, ktorý sa pohybuje.",
"[fy-u2-003 pocasie] Odkiaľ padá sneh?|z oblakov|zo zeme|zo Slnka|z Mesiaca#Sneh padá z oblakov, tak ako dážď.",
"[fy-u2-004 pocasie] Aké je počasie, keď z oblakov padajú kvapky vody?|prší|sneží|svieti iba slnko|je bezvetrie a sucho#Keď z oblakov padajú kvapky vody, prší.",
"[fy-u2-005 pocasie] Kedy na oblohe často vidíme dúhu?|keď svieti slnko a zároveň prší|keď je úplná tma|keď sneží v noci|keď je iba silný mráz#Dúhu často vidíme, keď svieti slnko a zároveň prší.",
"[fy-u2-006 pocasie] Prečo v zime nosíme teplú bundu?|vonku je chladný vzduch|vzduch je vždy horúci|bunda nás učí počítať|lebo prší piesok#V zime nosíme teplú bundu, lebo vonku je chladný vzduch.",
"[fy-u2-007 skupenstva] Čo vypĺňa aj priestory, ktoré vyzerajú prázdne?|vzduch|kamene|voda|piesok#Aj priestory, ktoré vyzerajú prázdne, vypĺňa vzduch.",
"[fy-u2-008 telo] Čo vo vzduchu potrebujeme na dýchanie?|kyslík|dym|piesok|olej#Na dýchanie potrebujeme zo vzduchu kyslík.",
"[fy-u2-009 pocasie] Aké oblaky bývajú na oblohe, keď začne silno pršať?|tmavé dažďové oblaky|žiadne oblaky|iba tenký mesiac|dúhové kamene#Keď začne silno pršať, na oblohe bývajú tmavé dažďové oblaky.",
"[fy-u2-010 pocasie] Čo máme urobiť pri búrke, keď sme vonku?|schovať sa do domu|stáť pod osamoteným vysokým stromom|držať kovovú tyč hore|bežať na kopec pod strom#Pri búrke sa schováme do domu a nestojíme pod osamoteným stromom.",
"[fy-u2-011 skupenstva] Na čo sa premení ľad, keď ho necháme v teplej izbe?|na kvapalnú vodu|na kameň|na soľ|na olej#Ľad sa v teplej izbe topí a premení sa na kvapalnú vodu.",
"[fy-u2-012 skupenstva] Prečo sa po daždi môžu na chodníku vysušiť kaluže?|voda sa vyparí|voda sa zmení na kameň|kaluž sa v lete vždy zmení na ľad|voda zmizne do slnka ako kameň#Kaluže po daždi môžu vyschnúť, lebo voda sa vyparí.",
"[fy-u2-013 voda_latky] Ktorá látka sa vo vode nerozpustí a ostane viditeľná?|piesok|cukor|soľ|šťava z citróna#Piesok sa vo vode nerozpustí, ostane viditeľný.",
"[fy-u2-014 voda_latky] Dá sa chuťou spoľahlivo spoznať, či je voda z potoka pitná?|nie|áno, vždy|iba keď je číra|iba keď je studená#Chuťou nespoznáš, či je voda z potoka pitná. Aj chutná voda môže byť znečistená.",
"[fy-u2-015 voda_latky] Prečo nesmieme piť vodu z neznámeho potoka?|môže byť znečistená|lebo je vždy sladká|lebo voda v potoku nie je mokrá|lebo potok nemá vzduch#Vodu z neznámeho potoka nepijeme, lebo môže byť znečistená.",
"[fy-u2-016 voda_latky] Čo potrebujú rastliny, živočíchy aj ľudia, aby mohli žiť?|vodu|iba kamene|iba tmu|iba plast#Rastliny, živočíchy aj ľudia potrebujú na život vodu.",
"[fy-u2-017 skupenstva] Čo stúpa nad hrniec, keď voda vrie?|para|piesok|ľad|cukor#Keď voda vrie, nad hrniec stúpa para.",
"[fy-u2-018 voda_latky] Ktorá voda je určená na pitie?|voda z overeného zdroja|voda z neznámej mláky|špinavá voda z cesty|voda s olejom#Na pitie je určená voda z overeného zdroja, nie z mláky ani z cesty.",
"[fy-u2-019 voda_latky] Ako môžeme oddeliť hlinu od vody?|preciedzaním cez filter|pridaním cukru|zamiešaním oleja|zaspievaním#Hlinu od vody oddelíme preciedzaním cez filter.",
"[fy-u2-020 voda_latky] Čo ostane na filtri, keď ním prelejeme vodu s hlinou?|hlina|čistá voda|cukor|vzduch#Na filtri ostane hlina, prečistená voda prejde ďalej.",
"[fy-u2-021 telo] Čo je oporou nášho tela?|kostra|žalúdok|vlasy|nechty#Oporou nášho tela je kostra.",
"[fy-u2-022 telo] Čo nám pomáha hýbať telom?|svaly|nechty|vlasy|zuby#Telom hýbeme vďaka svalom.",
"[fy-u2-023 telo] Ktorý orgán pumpuje krv po tele?|srdce|pľúca|žalúdok|koža#Srdce pumpuje krv po celom tele.",
"[fy-u2-024 telo] Kam ide vzduch, keď sa nadýchneme?|do pľúc|do vlasov|do nechtov|do kolien#Keď sa nadýchneme, vzduch ide do pľúc.",
"[fy-u2-025 telo] Prečo umývame ovocie pred jedlom?|môžu na ňom byť nečistoty|aby bolo ťažšie|aby zmenilo farbu|lebo ovocie nemá vodu#Ovocie pred jedlom umyjeme, lebo na ňom môžu byť nečistoty.",
"[fy-u2-026 telo] Prečo si čistíme zuby?|aby sme ich chránili pred kazom|aby rástli rýchlejšie|aby boli slané|lebo zuby k telu nepatria#Zuby si čistíme, aby sme ich chránili pred kazom.",
"[fy-u2-027 telo] Čo je pre svaly a zdravie veľmi dôležité?|pravidelný pohyb|sedieť celý deň|vôbec nespať|nepiť vodu#Pre svaly a zdravie je dôležitý pravidelný pohyb.",
"[fy-u2-028 telo] Prečo si umývame ruky pred jedlom?|aby sme nepreniesli nečistoty do úst|aby boli ruky slané|aby sme rýchlejšie behali|lebo voda ruky maľuje#Ruky si pred jedlom umyjeme, aby sme nepreniesli nečistoty do úst.",
"[fy-u2-029 telo] Čo treba urobiť, keď niekto zlomí kosť?|ísť k lekárovi|ešte viac skákať|sami si kosť napravovať|nerobiť nič a bežať ďalej#Keď niekto zlomí kosť, treba ísť k lekárovi.",
"[fy-u2-030 telo] Akú teplotu si ľudské telo bežne udržiava?|stálu, okolo 36 až 37 °C|každý deň úplne inú ako kameň|vždy 0 °C|vždy 100 °C#Ľudské telo si bežne udržiava stálu teplotu okolo 36 až 37 stupňov.",
"[fy-u2-031 telo] Ktorým zmyslom rozoznáme vôňu kvetu?|čuchom|zrakom|sluchom|hmatom#Vôňu kvetu rozoznáme čuchom.",
"[fy-u2-032 telo] Ktorým zmyslom zistíme, že je kocka cukru sladká?|chuťou|sluchom|zrakom|hmatom#Že je cukor sladký, zistíme chuťou.",
"[fy-u2-033 telo] Ktorým zmyslom zistíme, že je kameň drsný?|hmatom|chuťou|sluchom|čuchom#Že je kameň drsný, zistíme hmatom.",
"[fy-u2-034 telo] Koľko základných zmyslov má človek?|5|3|2|10#Človek má päť základných zmyslov.",
"[fy-u2-035 telo] Ktorý zmysel najviac použijeme v tmavej izbe pri hľadaní dverí?|hmat|chuť|zrak bez svetla|čuch na dvere#V tmavej izbe pri hľadaní dverí najviac použiješ hmat.",
"[fy-u2-036 telo] Prečo pri silnom hluku chránime uši?|aby sme si nepoškodili sluch|aby sme lepšie videli|aby nám rástli vlasy|lebo uši dýchajú#Pri silnom hluku chránime uši, aby sme si nepoškodili sluch.",
"[fy-u2-037 rastliny] Ktoré sú základné časti rastliny?|koreň, stonka, list, kvet a plod|iba krídla a zobák|iba kopytá|iba srsť#Základné časti rastliny sú koreň, stonka, list, kvet a plod.",
"[fy-u2-038 rastliny] Čo upevňuje rastlinu v pôde a čerpá vodu?|koreň|kvet|plod|tŕň#Koreň upevňuje rastlinu v pôde a čerpá vodu.",
"[fy-u2-039 rastliny] Čo môže vzniknúť z kvetu, keď sa naň prenesie peľ?|plod so semenami|kameň|vietor|tieň#Z kvetu, keď sa naň prenesie peľ, môže vzniknúť plod so semenami.",
"[fy-u2-040 rastliny] Čo potrebujú semená na klíčenie?|vodu, vzduch a vhodnú teplotu|iba tmu a soľ|iba suchý piesok bez vody|iba plastový sáčok#Semená na klíčenie potrebujú vodu, vzduch a vhodnú teplotu.",
"[fy-u2-041 rastliny] Čo potrebuje rastlina po vyklíčení navyše, aby mohla rásť?|svetlo a živiny z pôdy|iba kamene|iba tmu|plastový sáčok#Po vyklíčení potrebuje rastlina ešte svetlo a živiny z pôdy.",
"[fy-u2-042 rastliny] Čím je jablko pre jabloň?|plodom|koreňom|listom|stonkou#Jablko je plod jablone.",
"[fy-u2-043 rastliny] Mrkva, ktorú jeme, je predovšetkým:|koreň|kvet|list|plod#Mrkva, ktorú jeme, je predovšetkým koreň rastliny.",
"[fy-u2-044 rastliny] Šalát, ktorý jeme, tvoria predovšetkým:|listy|korene|kvety|kôra stromu#Šalát, ktorý jeme, tvoria predovšetkým listy.",
"[fy-u2-045 rastliny] Prečo sú rastliny dôležité pre človeka?|dávajú nám kyslík a potravu|vyrábajú iba dym|žijú bez vody naveky|vôbec ich nepotrebujeme#Rastliny sú pre nás dôležité, lebo nám dávajú kyslík a potravu.",
"[fy-u2-046 rastliny] Zo semena fazule vyrastie:|fazuľa|jabloň|dub|ruža#Zo semena fazule vyrastie zasa fazuľa.",
"[fy-u2-047 rastliny] Čo obsahuje úrodná pôda okrem hliny?|vodu, vzduch a zvyšky rastlín|iba sklo|iba plast|iba čistý kov#Úrodná pôda obsahuje okrem hliny aj vodu, vzduch a zvyšky rastlín.",
"[fy-u2-048 rastliny] Čo zlepšuje úrodnosť pôdy?|zvyšky odumretých rastlín (humus)|sklo|plast|staré batérie#Úrodnosť pôdy zlepšujú zvyšky odumretých rastlín, teda humus.",
"[fy-u2-049 rastliny] Čo sa nachádza pod vrstvou pôdy?|horniny|oblaky|hviezdy|dvere#Pod vrstvou pôdy sa nachádzajú horniny.",
"[fy-u2-050 rastliny] Prečo pôdu neznečisťujeme odpadom?|škodí rastlinám, živočíchom aj nám|pôda odpad potrebuje|odpad pôdu vždy vylepší|pôda premení odpad na cukor#Pôdu neznečisťujeme odpadom, lebo škodí rastlinám, živočíchom aj nám.",
"[fy-u2-051 rastliny] Ktoré živočíchy žijú v pôde a kypria ju?|dážďovky|lastovičky|delfíny|orly#Dážďovky žijú v pôde a kypria ju.",
"[fy-u2-052 rastliny] Prečo sú voda a vzduch v pôde dôležité?|pomáhajú rastlinám a živočíchom v pôde|pôdu vždy premenia na kameň|pôdu premenia na sklo|v pôde vzduch nie je potrebný#Voda a vzduch v pôde pomáhajú rastlinám a živočíchom, ktoré v nej žijú.",
"[fy-u2-053 priroda] Čo patrí medzi prejavy života?|pohyb, rast, dýchanie a príjem potravy|byť kameňom|byť nožom|byť sklom#Medzi prejavy života patrí pohyb, rast, dýchanie a príjem potravy.",
"[fy-u2-054 priroda] Čím sa líši kameň od mačky?|kameň nie je živý|kameň dýcha|kameň rastie ako dieťa|kameň hľadá potravu#Kameň nie je živý, mačka áno.",
"[fy-u2-055 priroda] Prečo sú včely pre rastliny dôležité?|prenášajú peľ z kvetu na kvet|jedia iba kamene|vyrábajú ľad|hasia oheň#Včely sú pre rastliny dôležité, lebo prenášajú peľ z kvetu na kvet.",
"[fy-u2-056 priroda] Kde žijú mravce vo veľkom spoločenstve?|v mravenisku|v hniezde orla|v rieke bez brehu|v oblakoch#Mravce žijú vo veľkom spoločenstve v mravenisku.",
"[fy-u2-057 priroda] V čom chová včelár včely?|úľ|mravenisko|brloh|klietka#Včelár chová včely v úli.",
"[fy-u2-058 priroda] Prečo nezbierame neznáme huby?|môžu byť jedovaté|všetky sú vždy jedlé|huby v lese nerastú|huby sú kamene#Neznáme huby nezbierame, lebo môžu byť jedovaté.",
"[fy-u2-059 priroda] Čím sa živé organizmy líšia od kameňa, noža či skla?|rastú, dýchajú a prijímajú potravu|sú vždy z kovu|nikdy nepotrebujú vodu|nemôžu rásť#Živé organizmy rastú, dýchajú a prijímajú potravu. Kameň, nôž ani sklo to nerobia.",
"[fy-u2-060 priroda] Prečo chránime prírodu?|potrebujeme ju na život|prírodu človek nepotrebuje|odpad prírode vždy pomáha|stromy vzduch neovplyvňujú#Prírodu chránime, lebo ju potrebujeme na život."
],
u1: [ /* Učiteľ – vloz_do_hry.py */
"[fy-u1-001 pozorovanie] Čo robíme, keď si niečo pozorne pozeráme a všímame si to?|pozorujeme|hádame naslepo|spieme#Keď si niečo pozorne pozeráme a všímame si to, pozorujeme.",
"[fy-u1-002 pozorovanie] Ktoré dve veci patria k sebe podľa farby?|červené jablko a červený balón|červené jablko a modrá lopta|červené jablko a žltá kačička#Červené jablko a červený balón majú rovnakú farbu, preto patria k sebe.",
"[fy-u1-003 pozorovanie] Ktoré dve veci patria k sebe podľa tvaru?|lopta a pomaranč|lopta a kniha|lopta a ceruzka#Lopta a pomaranč majú podobný okrúhly tvar, preto patria k sebe.",
"[fy-u1-004 pozorovanie] Ktorá vec je najťažšia?|kameň|pero|pierko#Kameň je ťažší ako pero aj pierko.",
"[fy-u1-005 pozorovanie] Ako zistíme, či je voda teplá alebo studená? Nesmieme ju ochutnať.|opatrne sa dotkneme pohára zvonka|hádame so zatvorenými očami|zatrasieme stolom#Teplotu vody zistíš tak, že sa opatrne dotkneš pohára zvonka. Vodu neochutnávaj.",
"[fy-u1-006 pozorovanie] Čo máme urobiť, keď si pri pozorovaní nie sme istí?|pozrieť sa ešte raz|vymyslieť si odpoveď|hneď sa prestať pozerať#Keď si nie si istý, pozri sa ešte raz a over si to.",
"[fy-u1-007 telo] Ktorým zmyslom cítime vôňu kvetu?|čuchom|zrakom|sluchom#Vôňu kvetu cítime čuchom, nosom.",
"[fy-u1-008 telo] Ktorým zmyslom ochutnáme jablko?|chuťou|hmatom|zrakom#Chuť jablka spoznáme chuťou, jazykom.",
"[fy-u1-009 telo] Ktorým zmyslom spoznáme, že je lopta hladká?|hmatom|chuťou|sluchom#Že je lopta hladká, spoznáme hmatom, dotykom.",
"[fy-u1-010 telo] Ktorým zmyslom vidíme farby?|zrakom|čuchom|chuťou#Farby vidíme zrakom, očami.",
"[fy-u1-011 telo] Koľko zmyslov má človek?|5|3|10|2#Človek má päť zmyslov: zrak, sluch, čuch, chuť a hmat.",
"[fy-u1-012 telo] Čo urobíme so zubami po jedle?|umyjeme ich|necháme ich tak|natrieme ich farbou#Po jedle si zuby umyjeme, aby ostali zdravé.",
"[fy-u1-013 telo] Kedy si umyjeme ruky?|pred jedlom a po WC|len na narodeniny|nikdy, keď sme vonku#Ruky si umyjeme pred jedlom a po WC, aby sme boli čistí.",
"[fy-u1-014 telo] Čo nám pomáha, aby sme boli zdraví?|pohyb, spánok a jedlo|iba sedenie pri obrazovke|vôbec nespať#Aby sme boli zdraví, potrebujeme pohyb, spánok a jedlo.",
"[fy-u1-015 voda_latky] Ktorá vec vo vani klesne na dno?|kameň|drevená doštička|plastová loptička#Kameň je ťažký a vo vode klesne na dno.",
"[fy-u1-016 voda_latky] Ktorá vec ostane na hladine vody?|korková zátka|železný kľúč|kamienok#Korková zátka je ľahká a ostane na hladine vody.",
"[fy-u1-017 voda_latky] Ktorá vec je mäkká?|vankúš|kameň|kľúč#Vankúš je mäkký, vieš ho stlačiť.",
"[fy-u1-018 voda_latky] Ktorá vec je tvrdá?|lyžica|deka|molitan#Lyžica je tvrdá, nestlačíš ju ako vankúš.",
"[fy-u1-019 voda_latky] Ktorá vec zaberá v krabici najviac miesta?|veľká lopta|gombík|ihla#Veľká lopta je najväčšia, preto v krabici zaberie najviac miesta.",
"[fy-u1-020 voda_latky] Čo ostane na dne pohára, lebo sa vo vode nerozpustí?|piesok|cukor|soľ#Piesok sa vo vode nerozpustí a ostane na dne.",
"[fy-u1-021 voda_latky] Ktorá vec sa v čaji rozpustí?|cukor|kamienok|drevo#Cukor sa v čaji rozpustí a prestaneš ho vidieť.",
"[fy-u1-022 svetlo_zvuk] Čo vznikne za stromom, keď na strom svieti slnko?|tieň|dážď|dúha#Keď na strom svieti slnko, za stromom vznikne tieň.",
"[fy-u1-023 svetlo_zvuk] Kedy je tieň dieťaťa dlhší?|ráno alebo večer, keď je slnko nízko|presne napoludnie, keď je slnko vysoko|tieň je vždy rovnaký#Tieň je dlhší ráno alebo večer, keď je slnko nízko nad zemou.",
"[fy-u1-024 svetlo_zvuk] Cez ktorú vec svetlo prejde a vidíme za ňu?|sklo v okne|drevené dvere|hrubú knihu#Cez sklo v okne svetlo prejde, preto vidíme aj zaň.",
"[fy-u1-025 skupenstva] Čo sa stane s kovovou lyžičkou v teplom čaji?|zohreje sa|zostane ľadovo studená|zmení sa na vodu#Kovová lyžička sa v teplom čaji zohreje, lebo teplo prejde do kovu.",
"[fy-u1-026 skupenstva] Ktorá vec je teplá?|hrejúci radiátor|kocka ľadu|snehová guľa#Radiátor hreje, preto je teplý.",
"[fy-u1-027 svetlo_zvuk] Čo potrebujeme, aby sme v noci videli v izbe?|svetlo|iba tmu|zatvorené oči#Aby sme v noci videli v izbe, potrebujeme svetlo.",
"[fy-u1-028 vesmir] Čo svieti a hreje vo dne na oblohe?|Slnko|Mesiac|hviezdy v noci#Vo dne na oblohe svieti a hreje Slnko.",
"[fy-u1-029 vesmir] Čo často vidíme v noci na oblohe?|Mesiac a hviezdy|iba slnko v noci|dúhu každý večer#V noci na oblohe často vidíme Mesiac a hviezdy.",
"[fy-u1-030 voda_latky] Čo potrebujú ľudia, zvieratá aj rastliny na život?|vodu|iba kamene|iba piesok#Ľudia, zvieratá aj rastliny potrebujú na život vodu.",
"[fy-u1-031 voda_latky] V akej podobe môžeme vidieť vodu v prírode?|rieka, dážď alebo sneh|iba vo fľaši v obchode|voda v prírode nie je#Vodu v prírode vidíme ako rieku, dážď alebo sneh.",
"[fy-u1-032 rastliny] Čo všetko môže byť v pôde?|kamienky, korene aj drobné živočíchy|iba čistý plast|iba sklo#V pôde môžu byť kamienky, korene aj drobné živočíchy.",
"[fy-u1-033 voda_latky] Je voda z mláky na ulici vhodná na pitie?|nie|áno, vždy|iba keď je hnedá#Voda z mláky na ulici nie je vhodná na pitie, môže byť špinavá.",
"[fy-u1-034 vesmir] Čo je Slnko?|hviezda, ktorá je k nám najbližšie|kúsok mesiaca|lampa v izbe#Slnko je hviezda, ktorá je k nám najbližšie.",
"[fy-u1-035 rastliny] Ktorá časť rastliny je väčšinou pod zemou?|koreň|list|kvet#Pod zemou je väčšinou koreň rastliny.",
"[fy-u1-036 rastliny] Ktorá časť rastliny drží listy a kvet nad zemou?|stonka|koreň|semeno v zemi#Stonka drží listy a kvet nad zemou.",
"[fy-u1-037 rastliny] Ktorá časť rastliny je väčšinou zelená a plochá?|list|koreň|kôra kmeňa#List je väčšinou zelený a plochý.",
"[fy-u1-038 rastliny] Ktorá časť rastliny býva farebná a voňavá?|kvet|koreň|hlina#Kvet rastliny býva farebný a voňavý.",
"[fy-u1-039 rastliny] Čo sa vyvinie z kvetu jablone?|plod (jablko)|koreň|tieň#Z kvetu jablone sa vyvinie plod, jablko.",
"[fy-u1-040 rastliny] Z ktorej časti rastliny je mrkva, ktorú jeme?|z koreňa|z kvetu|z listu#Mrkva, ktorú jeme, je koreň rastliny.",
"[fy-u1-041 rastliny] Čo je vo vnútri jablka, z čoho môže vyrásť nový strom?|semená|iba šťava bez semien|kôra#Vo vnútri jablka sú semená, z ktorých môže vyrásť nový strom.",
"[fy-u1-042 rastliny] Prečo sú pre nás rastliny dôležité?|lebo nám pomáhajú dýchať a dávajú potravu|lebo nám prekážajú na ceste|lebo nerobia nič užitočné#Rastliny sú dôležité, lebo nám pomáhajú dýchať a dávajú potravu.",
"[fy-u1-043 priroda] Ktoré zviera žije u nás doma ako miláčik?|mačka|srna|líška#Mačka žije u nás doma ako miláčik.",
"[fy-u1-044 priroda] Ktoré zviera patrí na farmu?|krava|veľryba|tučniak#Krava patrí na farmu medzi hospodárske zvieratá.",
"[fy-u1-045 priroda] Ktoré zviera žije vo voľnej prírode, nie ako domáci miláčik?|jeleň|pes|mačka#Jeleň žije vo voľnej prírode, nie ako domáci miláčik.",
"[fy-u1-046 priroda] Kto je mláďa kravy?|teľa|kuriatko|prasiatko#Mláďa kravy je teľa.",
"[fy-u1-047 priroda] Kto je mláďa sliepky?|kuriatko|teľa|šteňa#Mláďa sliepky je kuriatko.",
"[fy-u1-048 priroda] Komu sa šteňa najviac podobá?|psovi|kačici|rybe#Šteňa je mláďa psa, preto sa najviac podobá psovi.",
"[fy-u1-049 priroda] Ktoré zviera lieta?|vták|ryba|krt#Vták je zviera, ktoré lieta.",
"[fy-u1-050 priroda] Ktoré zviera žije vo vode a dýcha žiabrami?|ryba|pes|vrabec#Ryba žije vo vode a dýcha žiabrami.",
"[fy-u1-051 priroda] Ako sa máme správať k živým živočíchom?|ohľaduplne, neubližujeme im|môžeme im ubližovať|môžeme ich zahadzovať#K živým živočíchom sa správame ohľaduplne a neubližujeme im.",
"[fy-u1-052 obdobia] V ktorom období často padá sneh a je zima?|v zime|v lete|na jar, keď kvitnú čerešne#Sneh a mráz patria k zime.",
"[fy-u1-053 obdobia] V ktorom období je teplo a chodíme sa kúpať?|v lete|v zime|keď mrzne#V lete je teplo a chodíme sa kúpať.",
"[fy-u1-054 obdobia] V ktorom období stromy pučia a kvitnú prvé kvety?|na jar|v zime pri snehovej vánici|keď opadáva všetko lístie#Na jar stromy pučia a kvitnú prvé kvety.",
"[fy-u1-055 obdobia] V ktorom období padá zo stromov farebné lístie?|na jeseň|v lete, keď je všetko zelené|v zime pod snehom#Na jeseň padá zo stromov farebné lístie.",
"[fy-u1-056 obdobia] Čo si oblečieme, keď vonku mrzne?|čiapku, kabát a rukavice|plavky|krátke tričko bez rukávov#Keď vonku mrzne, oblečieme si čiapku, kabát a rukavice.",
"[fy-u1-057 priroda] Kam hodíme papier po desiate?|do koša na papier|na zem v parku|do potoka#Papier po desiate hodíme do koša na papier, aby sme triedili odpad.",
"[fy-u1-058 priroda] Je správne lámať živé konáre stromu len tak pre zábavu?|nie|áno|iba keď sa nám páčia#Živé konáre nelámeme pre zábavu, stromu by sme ublížili.",
"[fy-u1-059 priroda] Prečo máme chrániť prírodu?|aby v nej mohli žiť rastliny, zvieratá aj ľudia|lebo nám je to jedno|lebo príroda ochranu nepotrebuje#Prírodu chránime, aby v nej mohli žiť rastliny, zvieratá aj ľudia."
],
zaklad: [
"[fy-zaklad-001 skupenstva] Pri akej teplote zamŕza voda?|0 °C|10 °C|100 °C|−20 °C",
"[fy-zaklad-002 skupenstva] Pri akej teplote vrie voda (pri bežnom tlaku)?|100 °C|50 °C|0 °C|200 °C",
"[fy-zaklad-003 skupenstva] Ktorá látka je pri izbovej teplote kvapalná?|voda|ľad|kameň|drevo",
"[fy-zaklad-004 elektrina] Čo priťahuje magnet?|železný klinec|drevenú paličku|plastovú lyžičku|papier",
"[fy-zaklad-005 sily] Prečo predmet spadne na zem, keď ho pustíš?|priťahuje ho Zem (gravitácia)|fúka vietor|lebo je ráno",
"[fy-zaklad-006 vesmir] Okolo čoho obieha Zem?|okolo Slnka|okolo Mesiaca|okolo Marsu",
"[fy-zaklad-007 vesmir] Ako dlho trvá, kým sa Zem raz otočí okolo svojej osi?|približne 1 deň|1 týždeň|1 rok|1 hodinu",
"[fy-zaklad-008 vesmir] Ako dlho trvá, kým Zem obehne Slnko?|približne 1 rok|1 deň|1 mesiac",
"[fy-zaklad-009 rastliny] Čo potrebujú rastliny na rast?|svetlo, vodu a vzduch|len tmu|len piesok",
"[fy-zaklad-010 obdobia] Ktoré ročné obdobie nasleduje po jari?|leto|jeseň|zima",
"[fy-zaklad-011 svetlo_zvuk] Čo je zdrojom svetla?|Slnko|Mesiac|zrkadlo|okno#Mesiac iba odráža svetlo zo Slnka.",
"[fy-zaklad-012 elektrina] Ktorý materiál dobre vedie elektrický prúd?|meď|guma|drevo|plast",
"[fy-zaklad-013 voda_latky] Ktorý predmet bude plávať na vode?|drevená zátka|železný kľúč|kameň|minca",
"[fy-zaklad-014 skupenstva] Čo sa stane s ľadom na teplom slnku?|roztopí sa|zväčší sa|zmení sa na kameň",
"[fy-zaklad-015 skupenstva] Čo sa stane s vodou v mrazničke?|zamrzne|vyparí sa|zmizne",
"[fy-zaklad-016 pocasie] Odkiaľ padá dážď?|z oblakov|zo zeme|zo Slnka",
"[fy-zaklad-017 meranie] Čím meriame teplotu?|teplomerom|pravítkom|váhami|hodinami",
"[fy-zaklad-018 meranie] Čím meriame dĺžku?|pravítkom alebo metrom|teplomerom|váhami|hodinami",
"[fy-zaklad-019 meranie] Čím meriame hmotnosť?|váhami|teplomerom|pravítkom|kompasom",
"[fy-zaklad-020 meranie] Koľko centimetrov má 1 meter?|100|10|1 000|50",
"[fy-zaklad-021 meranie] Koľko minút má 1 hodina?|60|100|30|24",
"[fy-zaklad-022 meranie] Koľko hodín má 1 deň?|24|12|60|100",
"[fy-zaklad-023 telo] Ktorým zmyslom počujeme?|sluchom|zrakom|čuchom|hmatom",
"[fy-zaklad-024 telo] Ktorým orgánom dýchame?|pľúcami|žalúdkom|srdcom",
"[fy-zaklad-025 vesmir] Kde vychádza Slnko?|na východe|na západe|na severe|na juhu",
"[fy-zaklad-026 rastliny] Akú farbu majú listy väčšiny rastlín?|zelenú|modrú|čiernu",
"[fy-zaklad-027 svetlo_zvuk] Čo vznikne, keď svetlo dopadne na nepriehľadný predmet?|tieň|dúha|zvuk",
"[fy-zaklad-028 priroda] Ktoré zviera je cicavec?|pes|kapor|vrabec|žaba",
"[fy-zaklad-029 vesmir] Ktorá planéta je najbližšie k Slnku?|Merkúr|Zem|Mars|Jupiter",
"[fy-zaklad-030 priroda] Čo potrebuje oheň na horenie?|vzduch (kyslík)|vodu|piesok",
"[fy-zaklad-031 priroda] T:Koľko nôh má pavúk?|8;osem",
"[fy-zaklad-032 meranie] T:Koľko dní má týždeň?|7;sedem"
],
g67: [
"[fy-g67-001 meranie] Aká je základná jednotka dĺžky?|meter (m)|kilogram (kg)|sekunda (s)|liter (l)",
"[fy-g67-002 meranie] Aká je základná jednotka hmotnosti?|kilogram (kg)|meter (m)|newton (N)|liter (l)",
"[fy-g67-003 meranie] Aká je základná jednotka času?|sekunda (s)|minúta (min)|hodina (h)|deň (d)",
"[fy-g67-004 sily] Aká je jednotka sily?|newton (N)|joule (J)|watt (W)|kilogram (kg)",
"[fy-g67-005 meranie] Koľko gramov má 1 kilogram?|1 000|100|10|10 000",
"[fy-g67-006 meranie] Koľko mililitrov má 1 liter?|1 000|100|10",
"[fy-g67-007 meranie] Koľko metrov má 1 kilometer?|1 000|100|10 000",
"[fy-g67-008 meranie] Koľko sekúnd má 1 minúta?|60|100|30",
"[fy-g67-009 meranie] Čo udáva hustota látky?|hmotnosť jednotkového objemu látky|rýchlosť pohybu|teplotu látky",
"[fy-g67-010 meranie] Aká je približne hustota vody?|1 000 kg/m³|100 kg/m³|10 kg/m³|1 kg/m³",
"[fy-g67-011 sily] Prečo drevo pláva na vode?|má menšiu hustotu ako voda|má väčšiu hustotu ako voda|je vždy suché",
"[fy-g67-012 meranie] Čím meriame objem kvapaliny?|odmerným valcom|teplomerom|silomerom",
"[fy-g67-013 sily] Čím meriame silu?|silomerom|teplomerom|odmerným valcom",
"[fy-g67-014 sily] Ako vypočítame rýchlosť?|v = s : t|v = s · t|v = t : s",
"[fy-g67-015 sily] T:Auto prešlo 120 km za 2 hodiny. Aká bola jeho priemerná rýchlosť v km/h?|60#v = s : t = 120 : 2 = 60 km/h",
"[fy-g67-016 sily] T:Cyklista ide rýchlosťou 15 km/h. Koľko km prejde za 3 hodiny?|45#s = v · t = 15 · 3 = 45 km",
"[fy-g67-017 sily] T:Chodec prejde 10 km rýchlosťou 5 km/h. Koľko hodín ide?|2#t = s : v = 10 : 5 = 2 h",
"[fy-g67-018 sily] T:Bežec prebehol 100 m za 20 s. Aká bola jeho rýchlosť v m/s?|5#v = 100 : 20 = 5 m/s",
"[fy-g67-019 meranie] Koľko km/h je 10 m/s?|36 km/h|10 km/h|100 km/h|3,6 km/h#1 m/s = 3,6 km/h",
"[fy-g67-020 sily] Ktorá sila spôsobuje, že predmety padajú na zem?|gravitačná sila|trecia sila|magnetická sila",
"[fy-g67-021 sily] Ktorá sila brzdí sánky na snehu?|trecia sila|gravitačná sila|vztlaková sila",
"[fy-g67-022 sily] Akou silou približne pôsobí Zem na teleso s hmotnosťou 1 kg?|10 N|1 N|100 N|0,1 N#Presnejšie je to 9,81 N.",
"[fy-g67-023 sily] T:Akou silou (v N) pôsobí Zem na teleso s hmotnosťou 5 kg? Ber g = 10 N/kg.|50#F = m · g = 5 · 10 = 50 N",
"[fy-g67-024 skupenstva] Pri akej teplote sa topí ľad?|0 °C|100 °C|−10 °C|4 °C",
"[fy-g67-025 skupenstva] Ako sa volá zmena kvapaliny na plyn?|vyparovanie|topenie|tuhnutie|kondenzácia",
"[fy-g67-026 skupenstva] Ako sa volá zmena kvapaliny na pevnú látku?|tuhnutie|topenie|vyparovanie",
"[fy-g67-027 skupenstva] Ako sa volá zmena plynu na kvapalinu?|kondenzácia (skvapalňovanie)|tuhnutie|topenie",
"[fy-g67-028 skupenstva] Čo sa deje s väčšinou látok pri zahrievaní?|zväčšujú svoj objem|zmenšujú svoj objem|strácajú hmotnosť",
"[fy-g67-029 skupenstva] Ktorý materiál je dobrý tepelný izolant?|vlna|meď|hliník|železo",
"[fy-g67-030 sily] Ako sa volá pohyb, pri ktorom sa rýchlosť nemení?|rovnomerný|zrýchlený|spomalený",
"[fy-g67-031 meranie] Koľko minút je 0,5 hodiny?|30|50|5|60",
"[fy-g67-032 meranie] V akých jednotkách bežne udávame teplotu?|v stupňoch Celzia (°C)|v metroch (m)|v newtonoch (N)",
"[fy-g67-033 meranie] T:Koľko centimetrov je 2,5 m?|250#1 m = 100 cm"
],
g89: [
"[fy-g89-001 energia] Aká je jednotka práce a energie?|joule (J)|watt (W)|newton (N)|volt (V)",
"[fy-g89-002 energia] Aká je jednotka výkonu?|watt (W)|joule (J)|ampér (A)|ohm (Ω)",
"[fy-g89-003 elektrina] Aká je jednotka elektrického prúdu?|ampér (A)|volt (V)|ohm (Ω)|watt (W)",
"[fy-g89-004 elektrina] Aká je jednotka elektrického napätia?|volt (V)|ampér (A)|joule (J)|newton (N)",
"[fy-g89-005 elektrina] Aká je jednotka elektrického odporu?|ohm (Ω)|volt (V)|watt (W)|ampér (A)",
"[fy-g89-006 elektrina] Ako znie Ohmov zákon?|I = U : R|I = U · R|I = R : U",
"[fy-g89-007 elektrina] T:Napätie je 12 V a odpor 4 Ω. Aký prúd (v A) prechádza obvodom?|3#I = U : R = 12 : 4 = 3 A",
"[fy-g89-008 elektrina] T:Odpor je 10 Ω a prúd 2 A. Aké je napätie (vo V)?|20#U = R · I = 10 · 2 = 20 V",
"[fy-g89-009 energia] Ako vypočítame mechanickú prácu?|W = F · s|W = F : s|W = m · t",
"[fy-g89-010 energia] T:Sila 50 N posunie debnu o 4 m. Akú prácu (v J) vykoná?|200#W = F · s = 50 · 4 = 200 J",
"[fy-g89-011 energia] Ako vypočítame výkon?|P = W : t|P = W · t|P = F · m",
"[fy-g89-012 energia] T:Motor vykoná prácu 600 J za 3 s. Aký je jeho výkon (vo W)?|200#P = W : t = 600 : 3 = 200 W",
"[fy-g89-013 energia] Akú energiu má teleso vďaka svojmu pohybu?|pohybovú (kinetickú)|polohovú (potenciálnu)|chemickú",
"[fy-g89-014 energia] Akú energiu má kniha položená na vysokej poličke?|polohovú (potenciálnu)|pohybovú (kinetickú)|elektrickú",
"[fy-g89-015 energia] Čo platí o celkovej energii v uzavretej sústave?|zachováva sa|stále rastie|stále klesá",
"[fy-g89-016 energia] Na akú energiu mení žiarovka elektrickú energiu?|na svetelnú a tepelnú|na pohybovú|na chemickú",
"[fy-g89-017 energia] Na akú energiu mení elektromotor elektrickú energiu?|na pohybovú (mechanickú)|na svetelnú|na chemickú",
"[fy-g89-018 energia] Ktorý zdroj energie je obnoviteľný?|slnečná energia|uhlie|ropa|zemný plyn",
"[fy-g89-019 elektrina] Ako sú zapojené spotrebiče v domácnosti?|paralelne (vedľa seba)|sériovo (za sebou)|bez vodičov",
"[fy-g89-020 elektrina] Čo platí pre prúd v sériovom zapojení?|je všade rovnaký|v každom spotrebiči je iný|je nulový",
"[fy-g89-021 elektrina] Čím meriame elektrický prúd?|ampérmetrom|voltmetrom|teplomerom",
"[fy-g89-022 elektrina] Ako zapájame voltmeter?|paralelne k spotrebiču|sériovo so spotrebičom|vôbec ho nezapájame",
"[fy-g89-023 svetlo_zvuk] Akou rýchlosťou sa približne šíri svetlo vo vákuu?|300 000 km/s|340 m/s|300 km/h|1 000 m/s",
"[fy-g89-024 svetlo_zvuk] Akou rýchlosťou sa približne šíri zvuk vo vzduchu?|340 m/s|300 000 km/s|3 m/s|34 000 m/s",
"[fy-g89-025 elektrina] Ktoré póly dvoch magnetov sa priťahujú?|nesúhlasné (severný a južný)|súhlasné (dva severné)|žiadne",
"[fy-g89-026 elektrina] Čo vzniká okolo vodiča, ktorým prechádza prúd?|magnetické pole|zvuk|dúha",
"[fy-g89-027 svetlo_zvuk] Čo nastáva pri dopade svetla na zrkadlo?|odraz svetla|lom svetla|pohltenie všetkého svetla",
"[fy-g89-028 svetlo_zvuk] Čo vznikne, keď biele svetlo prejde hranolom?|spektrum farieb (dúha)|tieň|zvuk",
"[fy-g89-029 energia] T:Koľko wattov je 2 kW?|2000;2 000",
"[fy-g89-030 energia] T:Koľko joulov je 3 kJ?|3000;3 000",
"[fy-g89-031 meranie] Ako vypočítame hustotu?|ρ = m : V|ρ = m · V|ρ = V : m",
"[fy-g89-032 sily] Ako vypočítame tlak?|p = F : S|p = F · S|p = S : F",
"[fy-g89-033 sily] Aká je jednotka tlaku?|pascal (Pa)|newton (N)|joule (J)|kilogram (kg)"
]
},
chemia: {
u6: [ /* 6. ročník – Učiteľ 23. 11. 2026 (otazky_hra/chemia_6), len pri prepínači „chémia od 6. ročníka“ */
"[ch-u6-001 latky] Čo skúma chémia?|látky, ich vlastnosti a premeny|iba živé organizmy|iba pohyb telies a sily|iba počasie a podnebie#Chémia je veda o látkach: skúma ich zloženie, vlastnosti a to, ako sa menia na iné látky.",
"[ch-u6-002 bezpecnost] Ktorú ochrannú pomôcku si pred pokusom nasadíme na oči?|ochranné okuliare|laboratórny plášť|rukavice|rúško#Oči chránime ochrannými okuliarmi, aby sa do nich nedostala chemikália. Plášť a rukavice chránia telo a ruky.",
"[ch-u6-003 bezpecnost] Čo označuje výstražný piktogram s plameňom?|horľavinu|žieravinu|látku vhodnú na jedenie|látku, ktorú treba zmraziť#Piktogram s plameňom označuje horľavú látku. Pri práci s ňou nesmie byť v jej blízkosti otvorený oheň.",
"[ch-u6-004 bezpecnost] Čo označuje výstražný piktogram, na ktorom látka poleptáva ruku a podložku?|žieravinu|horľavinu|výbušninu|neškodnú látku#Tento piktogram označuje žieravinu: látka môže poleptať kožu, oči alebo poškodiť materiál.",
"[ch-u6-005 bezpecnost] Čo nesmieme urobiť s neznámou látkou v laboratóriu?|ochutnať ju|prečítať označenie na fľaši|použiť ochranné pomôcky|postupovať podľa návodu#Chemikálie nikdy neochutnávame. Vlastnosti zisťujeme pozorovaním a predpísanými pokusmi.",
"[ch-u6-006 bezpecnost] Ktorá laboratórna pomôcka slúži na odmeranie objemu kvapaliny?|odmerný valec|laboratórna lyžička|stojan|kahan#Objem kvapaliny odmeriame odmerným valcom. Lyžičkou naberáme tuhé látky, kahan slúži na zahrievanie.",
"[ch-u6-007 latky] Ktorú vlastnosť látky zistíme opatrne čuchom?|zápach alebo vôňu|hustotu|teplotu varu|tvrdosť#Zápach a vôňu zisťujeme opatrne čuchom, nie priamym vdýchnutím z nádoby. Hustotu, teplotu varu ani tvrdosť čuchom nezistíme.",
"[ch-u6-008 latky] Ktorá z týchto látok sa vo vode dobre rozpúšťa?|kuchynská soľ|piesok|kriedový prášok|jedlý olej#Kuchynská soľ sa vo vode rozpúšťa. Piesok, kriedový prášok ani olej sa vo vode nerozpustia, s vodou tvoria rôznorodú zmes.",
"[ch-u6-009 latky] Ktorá z týchto látok je horľavá?|etanol (lieh)|piesok|voda|kuchynská soľ#Etanol (lieh) je horľavina. Piesok, voda ani kuchynská soľ nehoria.",
"[ch-u6-010 latky] Čím sa líši topenie od rozpúšťania?|pri topení sa mení skupenstvo látky, pri rozpúšťaní sa látka rozptýli v rozpúšťadle|topenie a rozpúšťanie sú vždy ten istý dej|pri topení látka vždy navždy zmizne|pri rozpúšťaní látka vždy zhorí#Ľad sa topí na vodu: mení sa len skupenstvo. Cukor sa vo vode rozpúšťa, ale ostáva cukrom; vo vode ho len prestávame vidieť.",
"[ch-u6-011 latky] Prečo olej vo vode vypláva na povrch?|má menšiu hustotu ako voda|má väčšiu hustotu ako voda|voda ho priťahuje magnetom|olej je vždy teplejší ako voda#Látka s menšou hustotou ako voda pláva na hladine. Olej má menšiu hustotu, preto ostáva na hladine.",
"[ch-u6-012 latky] Ktorá vlastnosť vyjadruje, ako veľmi povrch látky odoláva poškriabaniu?|tvrdosť|zápach|horľavosť|chuť#Tvrdosť vyjadruje, ako veľmi látka odoláva poškriabaniu alebo odieraniu. Zápach, horľavosť ani chuť o tom nehovoria.",
"[ch-u6-013 zmesi] Čo je chemicky čistá látka?|látka, ktorá nie je zmesou iných látok a má stále zloženie|každá látka, ktorú umyjeme vodou|každá priesvitná kvapalina|každý výrobok z obchodu#Chemicky čistá látka má stále zloženie a stále vlastnosti. Nie je zmesou viacerých rôznych látok.",
"[ch-u6-014 zmesi] Ktorá z týchto látok je chemicky čistá?|destilovaná voda|morská voda|vzduch|sladký čaj#Destilovaná voda je v školských pokusoch príklad chemicky čistej látky. Morská voda, vzduch aj čaj sú zmesi.",
"[ch-u6-015 zmesi] Čím sa zmes líši od chemicky čistej látky?|zmes obsahuje viacero látok, ktoré si spravidla zachovávajú svoje vlastnosti|zmes vždy horí|zmes má vždy len jednu zložku|chemicky čistú látku vždy oddelíme filtráciou#Zmes vzniká zmiešaním viacerých látok. Tieto zložky si väčšinou zachovávajú svoje vlastnosti a často ich vieme vhodnou metódou oddeliť.",
"[ch-u6-016 zmesi] Ktorá zmes je rôznorodá (heterogénna)?|olej vo vode|cukor úplne rozpustený vo vode|vzduch|kuchynská soľ rozpustená vo vode#V rôznorodej zmesi zložky rozoznáme zrakom alebo lupou. Olej vo vode tvorí viditeľné vrstvy. Cukor alebo soľ úplne rozpustené vo vode aj vzduch sú rovnorodé zmesi.",
"[ch-u6-017 zmesi] Ktorá zmes je rovnorodá (homogénna)?|bronz (zliatina medi a cínu)|piesok vo vode|zeleninový šalát|žula#Zliatina je rovnorodá zmes kovov; zložky v nej voľným okom nerozoznáme. Piesok vo vode, šalát aj žula sú rôznorodé zmesi.",
"[ch-u6-018 zmesi] Ako sa volá rovnorodá zmes rozpustenej látky a rozpúšťadla?|roztok|suspenzia|zrazenina|para#Roztok je rovnorodá zmes, napríklad cukor rozpustený vo vode. Rozpúšťadlo a rozpustená látka v ňom voľným okom neodlíšime.",
"[ch-u6-019 zmesi] Čo je rozpúšťadlom v roztoku cukru vo vode?|voda|cukor|vzduch|lyžica#Rozpúšťadlo je látka, v ktorej sa druhá látka rozpúšťa. Vo vodnom roztoku cukru je rozpúšťadlom voda a rozpustenou látkou cukor.",
"[ch-u6-020 zmesi] Čo sa stane, keď do nasýteného roztoku soli pri rovnakej teplote pridáme ešte soľ a zamiešame?|soľ sa už nerozpustí a ostane na dne|soľ sa vždy celá rozpustí|voda sa zmení na ľad|soľ sa zmení na plyn#V nasýtenom roztoku je pri danej teplote rozpustené najviac látky, koľko sa dokáže rozpustiť. Ďalšia soľ ostane nerozpustená.",
"[ch-u6-021 oddelovanie] Ako sa volá oddeľovanie zložiek zmesi cez filtračný papier?|filtrácia|destilácia|kryštalizácia|sublimácia#Pri filtrácii prejde kvapalina cez filtračný papier a nerozpustené čiastočky ostanú na filtri.",
"[ch-u6-022 oddelovanie] Na čo slúži usadzovanie?|na oddelenie ťažších nerozpustených čiastočiek, ktoré klesnú na dno|na premenu vody na paru|na rozpúšťanie kovov|na meranie teploty#Pri usadzovaní klesnú ťažšie čiastočky na dno. Číru kvapalinu nad nimi potom môžeme opatrne zliať.",
"[ch-u6-023 oddelovanie] Ktorou metódou oddelíme rozpustenú kuchynskú soľ od vody tak, aby nám soľ ostala v miske?|odparovaním|filtráciou|magnetom|usadzovaním#Rozpustená soľ prejde s vodou cez filter. Usadzovaním sa nedá oddeliť, lebo na dno neklesne. Po odparení vody ostane soľ v miske.",
"[ch-u6-024 oddelovanie] Čím sa destilácia líši od obyčajného odparovania?|pri destilácii paru zachytíme a skondenzujeme naspäť na kvapalinu|destilácia prebieha iba v mrazničke|pri destilácii látky vždy zhoria|destilácia slúži len na oddelenie piesku#Pri destilácii sa kvapalina odparí a jej para sa v chladiči opäť premení na kvapalinu. Tak získame napríklad destilovanú vodu.",
"[ch-u6-025 oddelovanie] Ako sa volá vylučovanie rozpustenej látky z roztoku v podobe kryštálov?|kryštalizácia|filtrácia|horenie|magnetické oddeľovanie#Kryštalizácia je metóda, pri ktorej z roztoku vznikajú kryštály rozpustenej látky, napríklad kuchynskej soli.",
"[ch-u6-026 oddelovanie] Ako oddelíme farebné zložky atramentu na filtračnom papieri?|chromatografiou|magnetom|tavením|vážením#Chromatografia rozdelí zložky zmesi podľa toho, ako rýchlo putujú po papieri. Tak vieme oddeliť farby v atramente.",
"[ch-u6-027 oddelovanie] Prečo filtráciou neoddelíme cukor rozpustený vo vode?|rozpustený cukor prechádza spolu s vodou cez filtračný papier|cukor je príliš ťažký pre filter|filtračný papier cukor spáli|cukor je kov#Filter zachytí len nerozpustené čiastočky. Rozpustená látka je súčasťou roztoku, a preto cez filtračný papier prejde.",
"[ch-u6-028 voda] Ako nazývame vodu vyčistenú destiláciou?|destilovaná voda|minerálna voda|odpadová voda|morská voda#Destiláciou získame destilovanú vodu. Je to príklad chemicky čistej vody, bez rozpustených solí typických pre minerálnu alebo morskú vodu.",
"[ch-u6-029 voda] Ktorá voda je určená na pitie?|pitná voda|odpadová voda|úžitková voda určená na splachovanie|voda z mláky pri ceste#Pitná voda spĺňa zdravotné požiadavky na pitie. Odpadová ani úžitková voda na pitie nie sú určené.",
"[ch-u6-030 voda] Kam zaraďujeme dažďovú vodu podľa miesta výskytu?|medzi zrážkové vody|medzi podzemné vody|medzi odpadové vody|medzi destilované vody#Podľa výskytu delíme vody na zrážkové, povrchové a podzemné. Dažďová voda je zrážková.",
"[ch-u6-031 voda] Ktorá voda patrí medzi povrchové vody?|voda v rieke|voda v hlbokej studni pod zemou|dažďové kvapky ešte vo vzduchu|destilovaná voda v laboratóriu#Povrchové vody sú napríklad rieky, jazerá a rybníky. Voda v studni je podzemná, dážď ešte vo vzduchu je zrážková voda.",
"[ch-u6-032 voda] Prečo čistíme odpadové vody v čistiarni?|aby sme znížili znečistenie riek a životného prostredia|aby voda rýchlejšie zamrzla|aby sme z vody vždy získali zlato|aby voda stratila skupenstvo#Odpadové vody obsahujú nečistoty, ktoré by poškodili prírodu. V čistiarni sa voda upraví a až potom sa vracia do tokov.",
"[ch-u6-033 voda] Ktoré tvrdenie o pitnej vode z vodovodu je správne?|je to zmes, lebo obsahuje aj rozpustené látky|je to vždy destilovaná voda|je to chemicky čistý oxid uhličitý|neobsahuje žiadne rozpustené látky#Pitná voda z vodovodu nie je destilovaná. Obsahuje malé množstvo rozpustených látok, ktoré ovplyvňujú jej chuť a vlastnosti.",
"[ch-u6-034 vzduch] Čím je vzduch z chemického hľadiska?|zmesou plynov|chemicky čistou látkou|jediným chemickým prvkom|kvapalinou#Vzduch je rovnorodá zmes plynov. Najviac je v ňom dusíka a kyslíka, v menšom množstve aj ďalších plynov a vodnej pary.",
"[ch-u6-035 vzduch] Ktorý plyn tvorí najväčšiu časť vzduchu?|dusík|kyslík|oxid uhličitý|vodná para#Najväčšiu časť vzduchu tvorí dusík, približne 78 %. Kyslíka je približne 21 %, oxidu uhličitého a vodnej pary je oveľa menej.",
"[ch-u6-036 vzduch] Ktorý plyn patrí medzi skleníkové plyny a pribúda spaľovaním uhlia, ropy a zemného plynu?|oxid uhličitý|kyslík|dusík|hélium#Oxid uhličitý je skleníkový plyn. Vo vzduchu ho je málo, ale jeho množstvo rastie najmä spaľovaním fosílnych palív.",
"[ch-u6-037 vzduch] Načo je dôležitá ozónová vrstva vysoko v atmosfére?|zachytáva časť škodlivého ultrafialového žiarenia zo Slnka|vyrába pitnú vodu|bráni dýchaniu na Zemi|spôsobuje zemetrasenia#Ozónová vrstva v stratosfére chráni živé organizmy pred nadmerným ultrafialovým žiarením zo Slnka.",
"[ch-u6-038 reakcie] Ktorý dej je fyzikálnou zmenou, nie chemickou premenou?|vyparovanie vody z mokrého prádla|horenie sviečky|hrdzavenie bicykla|reakcia octu so sódou bikarbónou#Pri vyparovaní ostáva voda vodou, mení sa len skupenstvo. Pri horení, hrdzavení aj pri reakcii octu so sódou vznikajú nové látky.",
"[ch-u6-039 reakcie] Čo je typickým znakom, že prebehla chemická premena?|vznikne nová látka s inými vlastnosťami|zmení sa len tvar telesa|látka sa len zohreje a ostane rovnaká|zmes sa len preleje do inej nádoby#Pri chemickej premene vznikajú nové látky. Často to sprevádza zmena farby, únik plynu, vznik zrazeniny alebo uvoľnenie tepla.",
"[ch-u6-040 reakcie] Čo je potrebné na horenie sviečky okrem horľavej látky a zapálenia?|kyslík (prístup vzduchu)|tma v miestnosti|magnet vedľa sviečky|destilovaná voda namiesto vzduchu#Horenie je chemická premena, na ktorú treba kyslík. Preto oheň bez prístupu vzduchu zhasne."
],
zaklad: [
"[ch-zaklad-001 voda] V akom skupenstve je ľad?|pevnom|kvapalnom|plynnom",
"[ch-zaklad-002 voda] V akom skupenstve je vodná para?|plynnom|pevnom|kvapalnom",
"[ch-zaklad-003 latky] V akom skupenstve je mlieko?|kvapalnom|plynnom|pevnom",
"[ch-zaklad-004 latky] Ktorá látka je plyn?|vzduch|piesok|olej|soľ",
"[ch-zaklad-005 zmesi] Čo sa stane s cukrom vo vode, keď ho zamiešaš?|rozpustí sa|zhorí|zmení sa na kameň",
"[ch-zaklad-006 oddelovanie] Ako oddelíme piesok od vody?|prefiltrujeme cez papierový filter|zamrazíme ich|pridáme cukor",
"[ch-zaklad-007 oddelovanie] Ako dostaneme soľ späť zo slanej vody?|necháme vodu odpariť|vodu zamiešame|pridáme ľad",
"[ch-zaklad-008 zmesi] Čo je zmes?|látka zložená z viacerých látok|iba čistá voda|iba jeden kov",
"[ch-zaklad-009 zmesi] Ktorá látka je zmes?|morská voda|destilovaná voda|zlato",
"[ch-zaklad-010 vzduch] Čím uhasíme malý plamienok sviečky?|prikryjeme ho pohárom|pridáme papier|prilejeme olej#Bez vzduchu oheň zhasne.",
"[ch-zaklad-011 reakcie] Čo zostane po horení dreva?|popol|cukor|železo",
"[ch-zaklad-012 vzduch] Ktorý plyn potrebujeme na dýchanie?|kyslík|oxid uhličitý|hélium",
"[ch-zaklad-013 vzduch] Ktorý plyn vydychujeme viac, ako ho vdychujeme?|oxid uhličitý|kyslík|vodík",
"[ch-zaklad-014 reakcie] Čo spôsobuje hrdzavenie železa?|vlhkosť a vzduch|tma|teplo zo Slnka",
"[ch-zaklad-015 latky] Ktorá látka je kov?|železo|drevo|sklo|papier",
"[ch-zaklad-016 latky] Ktorý kov je pri izbovej teplote kvapalný?|ortuť|železo|zlato|meď",
"[ch-zaklad-017 latky] Prečo dávame jedlo do chladničky?|aby sa pomalšie kazilo|aby bolo ťažšie|aby zmenilo farbu",
"[ch-zaklad-018 latky] Čo sa stane s maslom na horúcej panvici?|roztopí sa|zamrzne|zmení sa na kov",
"[ch-zaklad-019 voda] Ako sa volá zmena vody na ľad?|tuhnutie (mrznutie)|topenie|vyparovanie",
"[ch-zaklad-020 voda] Ako sa volá zmena ľadu na vodu?|topenie|tuhnutie|kondenzácia",
"[ch-zaklad-021 latky] Čo sa objaví na studenom okne, keď varíme vodu?|kvapôčky vody|piesok|soľ",
"[ch-zaklad-022 latky] Akú chuť má citrón?|kyslú|sladkú|slanú",
"[ch-zaklad-023 kyseliny] Ktorá látka je kyslá?|ocot|cukor|voda",
"[ch-zaklad-024 latky] Kam patrí plastová fľaša?|do žltého kontajnera|do zeleného kontajnera|do modrého kontajnera",
"[ch-zaklad-025 latky] Kam patrí papier?|do modrého kontajnera|do zeleného kontajnera|do žltého kontajnera",
"[ch-zaklad-026 latky] Kam patrí sklo?|do zeleného kontajnera|do modrého kontajnera|do žltého kontajnera",
"[ch-zaklad-027 latky] Z čoho sa vyrába sklo?|z piesku|z dreva|z mlieka",
"[ch-zaklad-028 latky] Z čoho sa vyrába papier?|z dreva|zo skla|zo železa",
"[ch-zaklad-029 zmesi] Ktorá látka sa vo vode nerozpustí?|olej|soľ|cukor",
"[ch-zaklad-030 voda] Čo je para?|voda v plynnom skupenstve|voda v pevnom skupenstve|dym z ohňa",
"[ch-zaklad-031 voda] T:Koľko skupenstiev vody poznáš (ľad, voda, para)?|3;tri"
],
g7: [
"[ch-g7-001 vzorce] Aká je chemická značka kyslíka?|O|K|Ky|C",
"[ch-g7-002 vzorce] Aká je chemická značka vodíka?|H|V|He|O",
"[ch-g7-003 vzorce] Aká je chemická značka uhlíka?|C|U|Ca|Co",
"[ch-g7-004 vzorce] Aká je chemická značka železa?|Fe|Ž|Ir|F",
"[ch-g7-005 vzorce] Aká je chemická značka sodíka?|Na|S|So|Sd",
"[ch-g7-006 vzorce] Aká je chemická značka zlata?|Au|Zl|Ag|Go",
"[ch-g7-007 vzorce] Aká je chemická značka striebra?|Ag|St|Au|S",
"[ch-g7-008 vzorce] Aká je chemická značka medi?|Cu|Me|Md|C",
"[ch-g7-009 vzorce] Aká je chemická značka dusíka?|N|D|Du|Ni",
"[ch-g7-010 vzorce] Ktorý prvok má značku Ca?|vápnik|uhlík|kadmium|kobalt",
"[ch-g7-011 vzorce] Ktorý prvok má značku S?|síra|sodík|striebro|kremík",
"[ch-g7-012 vzorce] Ktorý prvok má značku Cl?|chlór|uhlík|vápnik|chróm",
"[ch-g7-013 vzorce] Ktorý prvok má značku He?|hélium|vodík|ortuť",
"[ch-g7-014 atom] Ktorá látka je chemický prvok?|kyslík|voda|soľ|vzduch",
"[ch-g7-015 atom] Ktorá látka je chemická zlúčenina?|voda (H₂O)|kyslík (O₂)|železo (Fe)|vzduch",
"[ch-g7-016 zmesi] Ktorá zmes je rôznorodá?|piesok vo vode|slaná voda|vzduch",
"[ch-g7-017 zmesi] Ktorá zmes je roztok (rovnorodá zmes)?|cukor rozpustený vo vode|piesok vo vode|olej vo vode",
"[ch-g7-018 oddelovanie] Ako oddelíme piesok od vody?|filtráciou|kryštalizáciou|magnetom",
"[ch-g7-019 oddelovanie] Ako oddelíme železné piliny od piesku?|magnetom|filtráciou|destiláciou",
"[ch-g7-020 oddelovanie] Ako získame čistú vodu zo slanej vody?|destiláciou|filtráciou|usadzovaním",
"[ch-g7-021 oddelovanie] Ako oddelíme olej od vody?|v oddeľovacom lieviku|filtráciou|magnetom",
"[ch-g7-022 voda] Pri akej teplote vrie čistá voda pri normálnom tlaku?|100 °C|0 °C|50 °C",
"[ch-g7-023 latky] Ako sa volá priama zmena pevnej látky na plyn?|sublimácia|topenie|vyparovanie",
"[ch-g7-024 zmesi] Čo je nasýtený roztok?|roztok, v ktorom sa pri danej teplote už viac látky nerozpustí|roztok bez vody|veľmi zriedený roztok",
"[ch-g7-025 atom] Z čoho sa skladá atóm?|z jadra a elektrónového obalu|iba z vody|z molekúl",
"[ch-g7-026 atom] Aký náboj má protón?|kladný|záporný|žiadny",
"[ch-g7-027 atom] Aký náboj má elektrón?|záporný|kladný|žiadny",
"[ch-g7-028 atom] Aký náboj má neutrón?|žiadny (je neutrálny)|kladný|záporný",
"[ch-g7-029 vzduch] Ktoré dva plyny tvoria väčšinu vzduchu?|dusík a kyslík|vodík a hélium|oxid uhličitý a vodná para",
"[ch-g7-030 vzorce] T:Napíš chemickú značku kyslíka.|O",
"[ch-g7-031 vzorce] T:Napíš chemickú značku vodíka.|H",
"[ch-g7-032 vzorce] T:Koľko atómov vodíka je v molekule vody H₂O?|2;dva",
"[ch-g7-033 vzduch] T:Koľko percent kyslíka je približne vo vzduchu?|21;20;21 %;20 %#Vzduch obsahuje asi 21 % kyslíka a 78 % dusíka."
],
g89: [
"[ch-g89-001 reakcie] Čo je chemická reakcia?|dej, pri ktorom z látok vznikajú nové látky|zmena skupenstva|rozpúšťanie cukru vo vode",
"[ch-g89-002 reakcie] Ktorý dej je chemická reakcia?|horenie dreva|topenie ľadu|lámanie skla|rozpúšťanie soli",
"[ch-g89-003 reakcie] Ako sa volajú látky, ktoré do reakcie vstupujú?|reaktanty|produkty|indikátory",
"[ch-g89-004 reakcie] Ako sa volajú látky, ktoré pri reakcii vznikajú?|produkty|reaktanty|indikátory",
"[ch-g89-005 reakcie] Čo vznikne reakciou vodíka s kyslíkom?|voda|soľ|oxid uhličitý",
"[ch-g89-006 kyseliny] Aké pH má neutrálny roztok?|7|0|14|1",
"[ch-g89-007 kyseliny] Aký je roztok s pH 2?|kyslý|zásaditý|neutrálny",
"[ch-g89-008 kyseliny] Aký je roztok s pH 12?|zásaditý|kyslý|neutrálny",
"[ch-g89-009 kyseliny] Ktorá látka je kyselina?|kyselina chlorovodíková (HCl)|hydroxid sodný (NaOH)|chlorid sodný (NaCl)",
"[ch-g89-010 kyseliny] Ktorá látka je hydroxid?|hydroxid sodný (NaOH)|kyselina sírová (H₂SO₄)|voda (H₂O)",
"[ch-g89-011 kyseliny] Čo vzniká pri neutralizácii kyseliny a hydroxidu?|soľ a voda|kyslík a vodík|oxid a kov",
"[ch-g89-012 vzorce] Aký je chemický vzorec kuchynskej soli?|NaCl|KCl|NaOH|HCl",
"[ch-g89-013 vzorce] Aký je chemický vzorec oxidu uhličitého?|CO₂|CO|C₂O|O₂",
"[ch-g89-014 vzorce] Aký je chemický vzorec vody?|H₂O|HO₂|H₂O₂|OH",
"[ch-g89-015 atom] Čo je oxid?|dvojprvková zlúčenina kyslíka s iným prvkom|zlúčenina prvku s vodíkom|zmes plynov",
"[ch-g89-016 reakcie] Aký plyn vzniká pri dokonalom horení uhlíka?|oxid uhličitý|oxid uhoľnatý|vodík",
"[ch-g89-017 bezpecnost] Ako bezpečne riedime koncentrovanú kyselinu?|lejeme kyselinu do vody|lejeme vodu do kyseliny|zmiešame ich naraz",
"[ch-g89-018 kyseliny] Čím zistíme, či je roztok kyslý alebo zásaditý?|indikátorom (napr. univerzálnym papierikom)|teplomerom|magnetom",
"[ch-g89-019 organicke] Ktorý prvok tvorí základ organických látok?|uhlík|železo|sodík|hélium",
"[ch-g89-020 organicke] Ktorý uhľovodík je najjednoduchší?|metán (CH₄)|etanol|benzén|propán",
"[ch-g89-021 kyseliny] Akú farbu má fenolftaleín v zásaditom roztoku?|ružovofialovú|bezfarebnú|zelenú",
"[ch-g89-022 atom] Ktorý kov je v zemskej kôre najrozšírenejší?|hliník|železo|zlato|meď",
"[ch-g89-023 atom] Ako sa volá vodorovný riadok periodickej tabuľky?|perióda|skupina|blok",
"[ch-g89-024 atom] Ako sa volá zvislý stĺpec periodickej tabuľky?|skupina|perióda|riadok",
"[ch-g89-025 atom] Ktoré prvky patria medzi vzácne plyny?|hélium, neón, argón|kyslík, dusík|sodík, draslík",
"[ch-g89-026 reakcie] Čo sa deje pri fotosyntéze?|z oxidu uhličitého a vody vzniká glukóza a kyslík|z kyslíka vzniká uhlie|rastlina spaľuje cukor na oxid uhličitý",
"[ch-g89-027 organicke] Ktorá látka patrí medzi sacharidy?|glukóza|metán|kyselina octová|soľ",
"[ch-g89-028 organicke] Čo je etanol?|alkohol|kyselina|kov|oxid",
"[ch-g89-029 kyseliny] Aká kyselina je v octe?|kyselina octová|kyselina sírová|kyselina dusičná",
"[ch-g89-030 atom] Ktorý kov reaguje s vodou veľmi prudko?|sodík|zlato|meď|striebro",
"[ch-g89-031 kyseliny] T:Aké pH má čistá voda?|7;sedem",
"[ch-g89-032 vzorce] T:Napíš vzorec vody.|H2O;H₂O",
"[ch-g89-033 vzorce] T:Koľko atómov kyslíka je v molekule CO₂?|2;dva"
]
}
};

window.OTAZKY_TIPY={
"an-u1-001": {
"sk": "Každé ráno sa pozdravte: Hello! Ahoj!",
"en": "Say Hello to each other every morning."
},
"an-u1-002": {
"sk": "Pri odchode z detského ihriska skúste: Bye! Dovidenia!",
"en": "When you leave the playground, say Bye together."
},
"an-u1-003": {
"sk": "Keď dieťa požiada o vodu, pridajte: Please.",
"en": "When your child asks for a drink, add the word please together."
},
"an-u1-004": {
"sk": "Cvičte dvojicu: Thank you. – You're welcome.",
"en": "Practise the pair together: Thank you. – You're welcome."
},
"an-u1-005": {
"sk": "Hrajte sa: kývanie hlavou je Yes, krútenie je No.",
"en": "Play a game: nodding means yes and shaking your head means no."
},
"an-u1-006": {
"sk": "Striedajte otázky: Chceš jablko? Yes. / No.",
"en": "Ask simple questions such as Would you like an apple? and answer with yes or no."
},
"an-u1-007": {
"sk": "Ráno pri raňajkách povedzte spolu: Good morning!",
"en": "Say Good morning together at breakfast."
},
"an-u1-008": {
"sk": "Pri narodeninách zaspievajte aj Happy birthday.",
"en": "At a birthday party, sing Happy Birthday together."
},
"an-u1-009": {
"sk": "Hľadajte v izbe oranžové veci a hovorte: orange.",
"en": "Look for orange things in the room and say: orange."
},
"an-u1-010": {
"sk": "Pri červenom svetle alebo tričku povedzte: red.",
"en": "When you see a red light or a red T-shirt, say: red."
},
"an-u1-011": {
"sk": "Pri slnku alebo žltom tričku povedzte: yellow.",
"en": "When you see the sun or a yellow T-shirt, say: yellow."
},
"an-u1-012": {
"sk": "Zbierajte listy a opakujte: green.",
"en": "Collect leaves together and say: green."
},
"an-u1-013": {
"sk": "Počítajte po anglicky do desiatich pri chôdzi po schodoch.",
"en": "Count to ten together as you walk up the stairs."
},
"an-u1-014": {
"sk": "Ukážte šesť prstov a povedzte: six.",
"en": "Hold up six fingers and say: six."
},
"an-u1-015": {
"sk": "Kockou alebo kartou ukážte číslo 7: seven.",
"en": "Show the number 7 on a card and say: seven."
},
"an-u1-016": {
"sk": "Spočítajte osem kociek a povedzte: eight.",
"en": "Count eight bricks together and say: eight."
},
"an-u1-017": {
"sk": "Od desiatich odpočítajte jeden prst: nine.",
"en": "Count down from ten on your fingers: ten, nine, eight."
},
"an-u1-018": {
"sk": "Ukážte prázdnu misku: zero. Nič tam nie je.",
"en": "Show an empty bowl and say: zero. There is nothing in it."
},
"an-u1-019": {
"sk": "Na kartičkách priraďte číslicu k anglickému slovu.",
"en": "Match number cards to the number words."
},
"an-u1-020": {
"sk": "Pri obrázkoch zvierat opakujte anglické názvy.",
"en": "Look at pictures of animals and make their sounds together."
},
"an-u1-021": {
"sk": "Zahrajte sa na farmu a pomenujte zvieratá po anglicky.",
"en": "Play farms and name the animals together."
},
"an-u1-022": {
"sk": "Ukážte plyšového králika: rabbit.",
"en": "Show a toy rabbit and hop like a rabbit together."
},
"an-u1-023": {
"sk": "Pri obrázku myšky povedzte: mouse.",
"en": "Look at a picture of a mouse and say: mouse, squeak."
},
"an-u1-024": {
"sk": "Pri plyšovom medvedíkovi povedzte: bear.",
"en": "With a teddy, talk about real bears sleeping in winter."
},
"an-u1-025": {
"sk": "Pri rozprávke o žabe opakujte: frog.",
"en": "When you read a story about a frog, jump and say ribbit together."
},
"an-u1-026": {
"sk": "Pri bielej plyšovej ovci povedzte: sheep.",
"en": "Feel something woolly together and say: sheep, baa."
},
"an-u1-027": {
"sk": "Pri kačici v knihe povedzte: duck.",
"en": "When you see a duck in a book or at a pond, say: duck, quack."
},
"an-u1-028": {
"sk": "Ukážte fotku rodiny a pomenujte: mum, dad, sister, brother.",
"en": "Look at a family photo and name everyone: mum, dad, sister, brother."
},
"an-u1-029": {
"sk": "Pri súrodencoch hovorte: This is my brother / sister.",
"en": "Talk about brothers and sisters: This is my brother. This is my sister."
},
"an-u1-030": {
"sk": "Pri návšteve babičky povedzte: grandma.",
"en": "When you visit Grandma, say: grandma."
},
"an-u1-031": {
"sk": "Pri fotke dedka povedzte: grandpa.",
"en": "Look at a photo of Grandpa and say: grandpa."
},
"an-u1-032": {
"sk": "Pri obrázku bábätka povedzte: baby.",
"en": "Look at a picture of a baby and say: baby."
},
"an-u1-033": {
"sk": "Keď prídete k domu, ukážte naň a povedzte: house.",
"en": "When you walk past a house, point to it and say: house."
},
"an-u1-034": {
"sk": "Na rodinnej fotke povedzte: This is my family.",
"en": "Look at a family photo and say: This is my family."
},
"an-u1-035": {
"sk": "Pri chystaní tašky pomenujte veci po anglicky: pencil, bag, book.",
"en": "When you pack the school bag, name the things: pencil, bag, book."
},
"an-u1-036": {
"sk": "Ráno pri taške povedzte: bag.",
"en": "In the morning, point to the school bag and say: bag."
},
"an-u1-037": {
"sk": "Ukážte gumu: rubber (v britskej angličtine v škole).",
"en": "Show a rubber and rub out a pencil line together."
},
"an-u1-038": {
"sk": "Pri hračkách povedzte: doll, teddy, ball.",
"en": "When you tidy up toys, name them: doll, teddy, ball."
},
"an-u1-039": {
"sk": "Pri plyšákovi povedzte: teddy.",
"en": "Point to a soft toy bear and say: teddy."
},
"an-u1-040": {
"sk": "Cestou do školy povedzte: We go to school.",
"en": "On the way to school, say together: We go to school."
},
"an-u1-041": {
"sk": "O učiteľke povedzte: She is a teacher.",
"en": "Talk about the teacher: She is a teacher. He is a teacher."
},
"an-u1-042": {
"sk": "Pri ovocí na tanieri pomenujte: banana, apple.",
"en": "Name the fruit on a plate together: banana, apple."
},
"an-u1-043": {
"sk": "Pri pohári mlieka povedzte: milk.",
"en": "When you pour a glass of milk, say: milk."
},
"an-u1-044": {
"sk": "Pri raňajkách povedzte: bread.",
"en": "At breakfast, point to the bread and say: bread."
},
"an-u1-045": {
"sk": "Keď dieťa pije vodu, povedzte: water.",
"en": "When your child drinks water, say: water."
},
"an-u1-046": {
"sk": "Pri oslave povedzte: cake.",
"en": "At a birthday party, point to the cake and say: cake."
},
"an-u1-047": {
"sk": "Pri vajíčku na tanieri povedzte: egg.",
"en": "When there is an egg on the plate, say: egg."
},
"an-u1-048": {
"sk": "Pri kúsku syra povedzte: cheese.",
"en": "When you eat a piece of cheese, say: cheese."
},
"an-u1-049": {
"sk": "Ukazujte na časti tela a hovorte: head, hand, leg.",
"en": "Point to parts of the body and name them: head, hand, leg."
},
"an-u1-050": {
"sk": "Hrajte: Touch your eyes. Dotkni sa očí.",
"en": "Play a game: Touch your eyes. Touch your nose."
},
"an-u1-051": {
"sk": "Dotknite sa nosa a povedzte: nose.",
"en": "Touch your nose together and say: nose."
},
"an-u1-052": {
"sk": "Pri umývaní zubov povedzte: mouth.",
"en": "When brushing teeth, point to your mouth and say: mouth."
},
"an-u1-053": {
"sk": "Doma skúšajte krátke pokyny: Sit down. Stand up.",
"en": "Practise short instructions at home: Sit down. Stand up."
},
"an-u1-054": {
"sk": "Striedajte Sit down a Stand up ako hru.",
"en": "Play a game of Sit down and Stand up."
},
"an-u1-055": {
"sk": "Pred rozprávkou povedzte: Listen! Počúvaj.",
"en": "Before a story, say: Listen! and wait until it is quiet."
},
"fy-u1-001": {
"sk": "Pri okne chvíľu ticho pozorujte strom alebo vtáka a povedzte, čo ste si všimli.",
"en": "Look quietly at a tree or a bird through the window for a while, then say what you noticed."
},
"fy-u1-002": {
"sk": "Triedte ponožky alebo kocky podľa farby.",
"en": "Sort socks or bricks by colour together."
},
"fy-u1-003": {
"sk": "Hľadajte v izbe veci, ktoré sú okrúhle ako lopta.",
"en": "Look for things in the room that are round like a ball."
},
"fy-u1-004": {
"sk": "Vezmite do rúk kameň a pero a porovnajte, čo ťahá ruku viac.",
"en": "Hold a stone and a pen and compare which one pulls your hand down more."
},
"fy-u1-005": {
"sk": "Porovnajte pohár studenej a vlažnej vody dotykom prsta zvonka pohára. Do vody nesiahajte, mohla by byť horúca.",
"en": "Compare a glass of cold water and a glass of lukewarm water by touching the outside. Do not put fingers in the water, as it could be hot."
},
"fy-u1-006": {
"sk": "Keď si dieťa nie je isté, povedzte: Poďme sa pozrieť znova.",
"en": "When your child is not sure, say: Let's look again."
},
"fy-u1-007": {
"sk": "So zaviazanými očami voňajte chlieb a kvet a hádajte, čo to je.",
"en": "With eyes closed, smell bread and a flower and guess which is which."
},
"fy-u1-008": {
"sk": "Ochutnajte kúsok jablka a kúsok citróna. Aký je rozdiel?",
"en": "Taste a piece of apple and a piece of lemon. What is the difference?"
},
"fy-u1-009": {
"sk": "Vložte do vrecka predmet a nechajte dieťa uhádnuť ho hmatom.",
"en": "Put an object in a bag and let your child guess what it is by touch."
},
"fy-u1-010": {
"sk": "Pomenujte farby vecí v izbe. Na to potrebujeme oči, teda zrak.",
"en": "Name the colours of things in the room. We need our eyes, our sense of sight, for this."
},
"fy-u1-011": {
"sk": "Spolu ich vymenujte: zrak, sluch, čuch, chuť a hmat. Ukážte príslušnú časť tela.",
"en": "Name the five senses together: sight, hearing, smell, taste and touch. Point to the part of the body for each one."
},
"fy-u1-012": {
"sk": "Ukážte, ako sa správne umývajú zuby ráno a večer.",
"en": "Show how to brush teeth properly in the morning and in the evening."
},
"fy-u1-013": {
"sk": "Pri umývaní rúk spievajte krátku umývaciu pesničku.",
"en": "Sing a short song while washing hands together."
},
"fy-u1-014": {
"sk": "Rozprávajte, čo dnes dieťa jedlo, kedy spalo a kedy sa hýbalo.",
"en": "Talk about what your child ate today, when they slept and when they were active."
},
"fy-u1-015": {
"sk": "V miske s vodou skúste, čo klesne a čo ostane hore. Pozorujte spolu.",
"en": "In a bowl of water, test together what sinks and what floats."
},
"fy-u1-016": {
"sk": "Do misky s vodou vložte korkovú zátku a kľúč. Čo ostane hore?",
"en": "Put a cork and a key in a bowl of water. Which one floats?"
},
"fy-u1-017": {
"sk": "Porovnajte vankúš a kameň: čo je mäkké, čo je tvrdé?",
"en": "Compare a pillow and a stone: which is soft and which is hard?"
},
"fy-u1-018": {
"sk": "V kuchyni hľadajte tvrdé a mäkké veci a pomenujte ich.",
"en": "Look for hard and soft things in the kitchen and name them."
},
"fy-u1-019": {
"sk": "Skúste do rovnakej krabice vložiť loptu a potom gombík. Čo potrebuje viac miesta?",
"en": "Put a ball and then a button in the same box. Which needs more space?"
},
"fy-u1-020": {
"sk": "Do dvoch pohárov dajte cukor a piesok, zamiešajte a pozorujte rozdiel.",
"en": "Put sugar in one glass of water and sand in another, stir and watch the difference."
},
"fy-u1-021": {
"sk": "Pri čaji ukážte, ako sa cukor stratí z dohľadu, ale čaj zosladne.",
"en": "When making tea, show how the sugar disappears but the tea tastes sweet."
},
"fy-u1-022": {
"sk": "Na slnku alebo pri lampičke stavajte tieň rúk na stenu.",
"en": "Make hand shadows on a wall in the sunshine or with a lamp."
},
"fy-u1-023": {
"sk": "Na dvore ráno a napoludnie porovnajte dĺžku tieňa. Nakreslite ho kriedou.",
"en": "Outside, compare the length of a shadow in the morning and at midday. Draw round it with chalk."
},
"fy-u1-024": {
"sk": "Pozrite sa cez pohár a cez knižku. Cez čo vidíte?",
"en": "Look through a glass and through a book together. Which can you see through?"
},
"fy-u1-025": {
"sk": "Opatrne sa po chvíli dotknite lyžičky v teplom čaji. Pozor, nech nie je príliš horúca.",
"en": "After a while, carefully touch a spoon in warm tea. Make sure it is not too hot."
},
"fy-u1-026": {
"sk": "Opatrne porovnajte teplo radiátora a chlad okna. Nedotýkajte sa horúcich platní.",
"en": "Carefully compare the warmth of a radiator and the coolness of a window. Do not touch a hot cooker."
},
"fy-u1-027": {
"sk": "Na chvíľu zhasnite a znova zasvieťte. Rozprávajte, prečo potrebujeme svetlo.",
"en": "Turn the light off for a moment and then on again. Talk about why we need light."
},
"fy-u1-028": {
"sk": "Cez deň ukážte slnko (nepozerajte priamo do neho) a povedzte, že nám svieti a hreje.",
"en": "During the day, point to where the Sun is (never look straight at it) and say that it gives us light and warmth."
},
"fy-u1-029": {
"sk": "Večer sa pozrite z okna na oblohu a hľadajte mesiac.",
"en": "In the evening, look out of the window at the sky and look for the Moon."
},
"fy-u1-030": {
"sk": "Zalejte kvet a napite sa spolu vody. Povedzte, že vodu potrebujeme všetci.",
"en": "Water a plant and have a drink of water together. Say that we all need water."
},
"fy-u1-031": {
"sk": "Na prechádzke hľadajte vodu: mláka, potok, dážď, rosa.",
"en": "On a walk, look for water: puddles, streams, rain, dew."
},
"fy-u1-032": {
"sk": "V kvetináči opatrne pozrite pôdu: kamienky, korienky, možno dážďovku. Potom všetko vráťte.",
"en": "Carefully look at the soil in a flowerpot: small stones, roots, maybe a worm. Then put everything back."
},
"fy-u1-033": {
"sk": "Vysvetlite: pijeme vodu z kohútika alebo balenú, nie z mláky ani z potoka.",
"en": "Explain that we drink tap water or bottled water, not water from puddles or streams."
},
"fy-u1-034": {
"sk": "Povedzte jednoducho: Slnko je hviezda. Iné hviezdy vidíme v noci, lebo sú ďalej.",
"en": "Explain simply: the Sun is a star. We see other stars at night because they are much further away."
},
"fy-u1-035": {
"sk": "Pri presádzaní kvetu ukážte korene. S pôdou zaobchádzajte opatrne.",
"en": "When repotting a plant, show your child the roots. Handle the soil carefully."
},
"fy-u1-036": {
"sk": "Na kvetine vo váze ukážte stonku, list a kvet.",
"en": "On a flower in a vase, point to the stem, a leaf and the flower."
},
"fy-u1-037": {
"sk": "Pozbierajte niekoľko listov a porovnajte ich tvar.",
"en": "Collect a few leaves and compare their shapes."
},
"fy-u1-038": {
"sk": "Na prechádzke ovoňajte kvet, ale netrhajte ho bez dovolenia.",
"en": "On a walk, smell a flower, but do not pick it without permission."
},
"fy-u1-039": {
"sk": "Ukážte jablko a povedzte, že je to plod, vnútri sú semená.",
"en": "Show an apple and say that it is a fruit with seeds inside."
},
"fy-u1-040": {
"sk": "Ukážte mrkvu s vňaťou: oranžová časť rástla v zemi, je to koreň.",
"en": "Show a carrot with its leaves: the orange part grew in the ground, so it is the root."
},
"fy-u1-041": {
"sk": "Rozkrojte jablko a nájdite semená. Do zeme ich dávajte len s dospelým.",
"en": "Cut an apple in half and find the seeds. Plant them only with an adult."
},
"fy-u1-042": {
"sk": "Pri ovocí na tanieri povedzte, že pochádza z rastlín. Vonku sa nadýchnite čerstvého vzduchu.",
"en": "With fruit on a plate, say that it comes from plants. Outside, take a deep breath of fresh air."
},
"fy-u1-043": {
"sk": "Pomenujte zvieratá, ktoré poznáte z domu, z farmy a z lesa.",
"en": "Name animals you know from home, from a farm and from the woods."
},
"fy-u1-044": {
"sk": "Pri knihe o farme pomenujte kravu, ošípanú, sliepku a koňa.",
"en": "With a farm book, name the cow, the pig, the hen and the horse."
},
"fy-u1-045": {
"sk": "Na prechádzke v lese hľadajte stopy, zvieratá nelovte. Pozorujte z diaľky.",
"en": "On a walk in the woods, look for animal tracks and watch animals from a distance."
},
"fy-u1-046": {
"sk": "Priraďujte kartičky: krava – teľa, sliepka – kuriatko, ošípaná – prasiatko.",
"en": "Match cards together: cow – calf, hen – chick, pig – piglet."
},
"fy-u1-047": {
"sk": "Zahrajte si pexeso mláďat a rodičov.",
"en": "Play a matching game with baby animals and their parents."
},
"fy-u1-048": {
"sk": "Porovnajte fotku šteňaťa a dospelého psa. Sú si podobní.",
"en": "Compare a photo of a puppy and a grown-up dog. They look alike."
},
"fy-u1-049": {
"sk": "Pozorujte vtáka na oblohe. Povedzte, že má krídla a lieta.",
"en": "Watch a bird in the sky together. Say that it has wings and flies."
},
"fy-u1-050": {
"sk": "Pri akváriu alebo v knihe ukážte, že ryba žije vo vode.",
"en": "At an aquarium or in a book, show that a fish lives in water."
},
"fy-u1-051": {
"sk": "Ukážte, ako jemne pohladíme mačku, ak to chce, a kedy ju treba nechať na pokoji.",
"en": "Show how to stroke a cat gently if it wants, and when to leave it alone."
},
"fy-u1-052": {
"sk": "Pri zimnom oblečení povedzte: Je zima, padá sneh.",
"en": "When putting on winter clothes, say: It is cold, it is snowing."
},
"fy-u1-053": {
"sk": "Pozrite letné fotky: slnko, kúpanie, tenké oblečenie.",
"en": "Look at summer photos together: sunshine, swimming, light clothes."
},
"fy-u1-054": {
"sk": "Na jar hľadajte prvé púčiky a snežienky.",
"en": "In spring, look for the first buds and snowdrops."
},
"fy-u1-055": {
"sk": "Na jeseň zbierajte farebné listy a pomenujte farby.",
"en": "In autumn, collect colourful leaves and name their colours."
},
"fy-u1-056": {
"sk": "Pred vychádzkou spoločne vyberte oblečenie podľa počasia.",
"en": "Before going out, choose clothes for the weather together."
},
"fy-u1-057": {
"sk": "V parku alebo v škole hľadajte kôš či kontajner na papier (často je modrý). Ak nie je, papier si odneste domov.",
"en": "In the park or at school, look for a bin for paper. If there is none, take the paper home."
},
"fy-u1-058": {
"sk": "Stromu necháme konáre. Padnuté konáriky na zemi môžeme zbierať na hru, ak to treba.",
"en": "Leave branches on the tree. Fallen twigs on the ground can be collected for play."
},
"fy-u1-059": {
"sk": "Na prechádzke povedzte jednu vec, ktorou ste dnes prírode pomohli, napríklad že ste nič neodhodili.",
"en": "On a walk, say one thing you did to help nature today, for example not dropping litter."
},
"sl-u1-001": {
"sk": "Hľadajte na prechádzke veci, ktoré sa začínajú na m: mama, maslo.",
"en": "On a walk, look for things that start with m, such as mum and milk."
},
"sl-u1-002": {
"sk": "Pomenujte obrázok nahlas a počúvajte prvú hlásku.",
"en": "Name the picture out loud together and listen for the first sound."
},
"sl-u1-003": {
"sk": "Hrajte hru: prines niečo, čo sa začína na l.",
"en": "Play a game: ask your child to bring you something that starts with b."
},
"sl-u1-004": {
"sk": "Povedzte slovo les pomaly a počúvajte poslednú hlásku.",
"en": "Say the word forest slowly together and listen for the last sound."
},
"sl-u1-005": {
"sk": "Ukážte prvé písmeno v slove auto: a.",
"en": "Point to the first letter in the word car: c."
},
"sl-u1-006": {
"sk": "Spievajte samohlásky: a, ä, e, i, o, u, y. Spoluhlásky sa spievajú ťažšie.",
"en": "Sing the vowels together: a, e, i, o, u."
},
"sl-u1-007": {
"sk": "Samohlásky a, ä, e, i, o, u, y vieme spievať a predĺžiť.",
"en": "Say short words slowly and listen for the vowel in the middle: s-i-t, c-a-t."
},
"sl-u1-008": {
"sk": "Pri spoluhláske ucítite, že vzduch v ústach niečo zastaví.",
"en": "Sort letter cards into two piles: vowels (a, e, i, o, u) and consonants."
},
"sl-u1-009": {
"sk": "Samohlásky sú a, ä, e, i, o, u, y (aj s dĺžňom). N je spoluhláska.",
"en": "Remind your child that the vowels are a, e, i, o and u. N is a consonant."
},
"sl-u1-010": {
"sk": "Prstom ťahajte riadok v knihe zľava doprava.",
"en": "Run your finger along a line in a book from left to right while you read."
},
"sl-u1-011": {
"sk": "Povedzte slovo po hláskach: n-o-s. Každá hláska je jeden zvuk.",
"en": "Say the word sound by sound: s-u-n. Each sound is one part of the word."
},
"sl-u1-012": {
"sk": "Klapnite pri každej hláske: m-a-k.",
"en": "Clap once for each sound: m-a-p."
},
"sl-u1-013": {
"sk": "Tlieskajte pri každej slabike: ko-lo.",
"en": "Clap for each syllable together: ted-dy."
},
"sl-u1-014": {
"sk": "Tlieskajte: au-to. Dve tliesknutia znamenajú dve slabiky.",
"en": "Clap together: rab-bit. Two claps mean two syllables."
},
"sl-u1-015": {
"sk": "Tlieskajte: mä-so.",
"en": "Clap together: ap-ple."
},
"sl-u1-016": {
"sk": "Slovo dom sa nedá rozdeliť. Je to jedna slabika.",
"en": "The word cat cannot be split up. It is one clap, so one syllable."
},
"sl-u1-017": {
"sk": "Tlieskajte: ba-nán.",
"en": "Clap together: ba-na-na."
},
"sl-u1-018": {
"sk": "Pri každom slove položte jednu kocku: Pes. Beží.",
"en": "Put down one brick for each word: Dogs. Run."
},
"sl-u1-019": {
"sk": "Oddeľujte slová tlesknutím: Mama – má – mak.",
"en": "Clap once for each word: Sam – has – jam."
},
"sl-u1-020": {
"sk": "Písmeno je jeden znak. Slovo je zložené z písmen a niečo znamená.",
"en": "A letter is one sign. A word is made of letters and means something."
},
"sl-u1-021": {
"sk": "Ukážte v knihe jedno písmeno a celé slovo.",
"en": "Point to one letter and then to a whole word in a book."
},
"sl-u1-022": {
"sk": "Hľadajte v izbe veci na rovnakú prvú hlásku.",
"en": "Look around the room for things that start with the same letter."
},
"sl-u1-023": {
"sk": "V knižke hľadajte veľké písmeno na začiatku každej vety.",
"en": "In a book, look for the capital letter at the start of each sentence."
},
"sl-u1-024": {
"sk": "Ukážte: prvé písmeno je veľké, na konci je bodka.",
"en": "Show your child: the first letter is a capital letter and there is a full stop at the end."
},
"sl-u1-025": {
"sk": "Keď niečo oznamujeme, na konci je bodka.",
"en": "When a sentence tells us something, it ends with a full stop."
},
"sl-u1-026": {
"sk": "Keď sa pýtame, na konci je otáznik.",
"en": "When we ask something, the sentence ends with a question mark."
},
"sl-u1-027": {
"sk": "Keď niekoho voláme alebo rozkazujeme, často dáme výkričník.",
"en": "When someone shouts or is surprised, we often use an exclamation mark."
},
"sl-u1-028": {
"sk": "Povedzte vetu nahlas. Oznámenie znie pokojne, nie ako otázka.",
"en": "Say the sentence out loud. A statement sounds calm, not like a question."
},
"sl-u1-029": {
"sk": "Hľadajte vety s otáznikom a skúste na ne odpovedať.",
"en": "Look for sentences with a question mark and try to answer them."
},
"sl-u1-030": {
"sk": "Zahrajte si: povedzte výzvu (Poď sem!) a potom otázku (Ideš?).",
"en": "Play a game: give a command (Come here!) and then ask a question (Are you coming?)."
},
"sl-u1-031": {
"sk": "Pridajte k obrázkom kartičky so slovami a priraďujte ich.",
"en": "Make word cards for pictures and match them together."
},
"sl-u1-032": {
"sk": "Prečítajte slovo po slabikách a ukážte na obrázok.",
"en": "Read the word sound by sound and point to the picture."
},
"sl-u1-033": {
"sk": "Čítajte krátke slová na kartičkách a hľadajte ich v okolí.",
"en": "Read short words on cards and look for those things around you."
},
"sl-u1-034": {
"sk": "Hovorte prvé hlásky a spoločne ukážte na správne slovo.",
"en": "Say the first sounds together and point to the right word."
},
"sl-u1-035": {
"sk": "Prečítajte krátku vetu a pýtajte sa, kto a čo robí.",
"en": "Read a short sentence together and ask who is doing what."
},
"sl-u1-036": {
"sk": "Po prečítaní vety nechajte dieťa ukázať na správny obrázok.",
"en": "After reading the sentence, let your child point to the right picture."
},
"sl-u1-037": {
"sk": "Ukážte tri kartičky a nechajte dieťa prečítať ich nahlas.",
"en": "Show three word cards and let your child read them out loud."
},
"sl-u1-038": {
"sk": "Čítajte krátke nápisy pod obrázkami v knižke.",
"en": "Read the short labels under the pictures in a book together."
},
"sl-u1-039": {
"sk": "Dĺžeň je čiarka nad písmenom. Hľadajte ju v mene dieťaťa alebo v knihe.",
"en": "Stretch the sound together: beeee. In bed and hen the e is short."
},
"sl-u1-040": {
"sk": "Povedzte slová nahlas: bá-bi-ka. Počujete dlhé á.",
"en": "Say the words slowly: sp-oo-n. Listen for the long oo."
},
"sl-u1-041": {
"sk": "Natiahnite dlhú hlásku: sýýý-ty. V slovách pes a les sú samohlásky krátke.",
"en": "Say the words together and stretch the long sound: gaaate. Compare it with cat."
},
"sl-u1-042": {
"sk": "Mäkčeň je značka nad písmenom, napríklad na ň, š, č.",
"en": "Look for things at home that start with sh: shoe, sheep, shell."
},
"sl-u1-043": {
"sk": "Ukážte slovo žaba a prstom ukážte na písmeno ž s mäkčeňom.",
"en": "Show your child the word chip and point to the two letters c and h that make ch."
},
"sl-u1-044": {
"sk": "Slovo mám píšeme s dĺžňom nad á. Povedzte ho natiahnuto.",
"en": "Write the word said and read it together several times. It does not sound the way it looks."
},
"sl-u1-045": {
"sk": "Hrajte: ja poviem slovo, ty povedz opak. Horúci – studený.",
"en": "Play a game: you say a word and your child says the opposite. Hot – cold."
},
"sl-u1-046": {
"sk": "Otvárajte a zatvárajte skrinku a pomenujte to.",
"en": "Open and close a cupboard together and say the words."
},
"sl-u1-047": {
"sk": "Porovnajte čistý a špinavý tanier.",
"en": "Compare a clean plate and a dirty plate."
},
"sl-u1-048": {
"sk": "Vymýšľajte veselé rýmy: dom – strom, pes – les.",
"en": "Make up silly rhymes together: dog – log, cat – hat."
},
"sl-u1-049": {
"sk": "Spievajte krátku riekanku a hľadajte slová, ktoré znejú na konci rovnako: kvet – svet.",
"en": "Sing a short nursery rhyme and look for words that sound the same at the end."
},
"sl-u1-050": {
"sk": "Triedte obrázky: čo nosíme, čo jeme, kto je z rodiny.",
"en": "Sort pictures together: things we wear, things we eat, people in the family."
},
"sl-u1-051": {
"sk": "Pomenujte mláďatá: pes – šteňa, krava – teľa, sliepka – kuriatko.",
"en": "Name baby animals together: dog – puppy, cow – calf, hen – chick."
},
"sl-u1-052": {
"sk": "Hrajte sa so slovami: pes – psík, kvet – kvietok.",
"en": "Play with words: happy – unhappy, kind – unkind, lock – unlock."
},
"sl-u1-053": {
"sk": "Cvičte poďakovanie pri každom podaní hračky alebo jedla.",
"en": "Practise saying thank you whenever you pass your child a toy or some food."
},
"sl-u1-054": {
"sk": "Cvičte ospravedlnenie v krátkych scenkách.",
"en": "Practise saying sorry in short role-plays."
},
"sl-u1-055": {
"sk": "Ráno sa zdravia: Dobré ráno. Večer: Dobrú noc.",
"en": "In the morning say Good morning to each other, and in the evening Good night."
},
"sl-u1-056": {
"sk": "Keď dieťa o niečo požiada, pridajte spolu slovo prosím.",
"en": "When your child asks for something, add the word please together."
},
"sl-u1-057": {
"sk": "Pri čítaní knižky sa pýtajte: čo vidíme na obrázku k tejto vete?",
"en": "When you read a book together, ask: what can we see in the picture for this sentence?"
},
"sl-u1-058": {
"sk": "Pred čítaním si podľa obrázka tipnite, o čom bude príbeh.",
"en": "Before reading, guess together from the picture what the story will be about."
},
"sl-u1-059": {
"sk": "V knižke ukazujte: tu je text, tu je obrázok.",
"en": "In a book, point out together: here is the text, here is the picture."
},
"sl-u1-060": {
"sk": "Dočítajte krátku vetu a nechajte dieťa doplniť slovo podľa obrázka.",
"en": "Read a short sentence and let your child finish it with a word that fits the picture."
},
"an-u2-001": {
"sk": "Večer pri ukladaní do postele povedzte Good night. Dobré ráno ostáva Good morning.",
"en": "At bedtime, say Good night to each other, and Good morning when you wake up."
},
"an-u2-002": {
"sk": "Excuse me použite, keď chcete prejsť alebo niekoho osloviť. Sorry je skôr ospravedlnenie za chybu.",
"en": "Practise saying Excuse me when you need to get past someone in a shop or on a bus."
},
"an-u2-003": {
"sk": "Keď niekomu nechtiac vkročíte do cesty, povedzte spolu Sorry.",
"en": "Talk about when we say sorry, for example after bumping into someone."
},
"an-u2-004": {
"sk": "Po otázke How are you? odpovedzte: I’m fine, thank you. Ukážte palec hore.",
"en": "Practise a short conversation: 'How are you?' 'I’m fine, thank you.'"
},
"an-u2-005": {
"sk": "Pri odchode z ihriska povedzte See you! Je to priateľské rozlúčenie, podobné ako Goodbye.",
"en": "When you leave the playground, say 'See you!' to friends. It is a friendly way to say goodbye."
},
"an-u2-006": {
"sk": "Nacvičte krátky dialóg: How are you? – I’m fine, thank you.",
"en": "Take turns asking each other 'How are you?' and answering in different ways."
},
"an-u2-007": {
"sk": "Počítajte spoločne od 11 do 20 po anglicky. Eleven je prvé číslo po ten.",
"en": "Count from 11 to 20 together. Eleven is the first number after ten."
},
"an-u2-008": {
"sk": "Pozor na zámenu twelve a twenty. Twelve je 12, twenty je 20.",
"en": "Twelve and twenty are easy to mix up. Twelve is 12 and twenty is 20."
},
"an-u2-009": {
"sk": "Čísla 13 až 19 často končia na -teen. Fifteen je päť + ten, teda 15.",
"en": "Many numbers from 13 to 19 end in -teen. Fifteen is five and ten."
},
"an-u2-010": {
"sk": "Twenty znie inak ako twelve. Zopakujte: twelve – 12, twenty – 20.",
"en": "Say twelve and twenty and listen to how different they sound: twelve is 12, twenty is 20."
},
"an-u2-011": {
"sk": "Doplňte čísla 6 až 9, ktoré sa v 1. ročníku ešte málo precvičovali: six, seven, eight, nine.",
"en": "Count small objects together and say the number words aloud: six, seven, eight, nine."
},
"an-u2-012": {
"sk": "Nezameňte six (6) a sixteen (16). Ukážte šesť prstov a povedzte six.",
"en": "Six and sixteen are easy to mix up. Hold up six fingers and say six."
},
"an-u2-013": {
"sk": "Hľadajte doma ružové veci a pomenujte ich: a pink T-shirt, a pink bag.",
"en": "Mix a little red and white paint together and name the colour."
},
"an-u2-014": {
"sk": "Ukážte hnedý predmet, napríklad medvedíka alebo topánku, a povedzte brown.",
"en": "Look for brown things at home, such as a teddy bear or a shoe, and say brown."
},
"an-u2-015": {
"sk": "Slovo orange je farba aj ovocie. Ukážte pomaranč a povedzte: The orange is orange.",
"en": "Show an orange and say: The orange is orange."
},
"an-u2-016": {
"sk": "V učebniciach býva British English: grey. Ukážte sivý kameň alebo oblak.",
"en": "Look at the sky together and name the colour of the clouds."
},
"an-u2-017": {
"sk": "Pri obúvaní povedzte: Put on your shoes. Ponožky sú socks.",
"en": "When getting dressed, say: Put on your shoes."
},
"an-u2-018": {
"sk": "Hat je klobúk. Pletená čiapka je woolly hat, šiltovka je cap.",
"en": "A woolly hat keeps you warm in winter and a cap has a peak at the front. Both go on your head."
},
"an-u2-019": {
"sk": "Ukážte kabát v predsieni a povedzte coat. Šaty sú dress, nohavice trousers.",
"en": "Point to the coat by the door and say coat. Name other clothes too: dress, trousers."
},
"an-u2-020": {
"sk": "Pri obliekaní najprv socks, potom shoes. Spočítajte páry ponožiek po anglicky.",
"en": "When getting dressed, socks go on first, then shoes. Count pairs of socks together."
},
"an-u2-021": {
"sk": "Nakreslite rodokmeň a pod každý obrázok napíšte anglické slovo: mum, dad, sister, brother.",
"en": "Draw a family tree and write a word under each picture: mum, dad, sister, brother."
},
"an-u2-022": {
"sk": "Brother je brat, boy je chlapec. Nie každý chlapec je brat.",
"en": "Talk about the brothers and sisters of people your child knows."
},
"an-u2-023": {
"sk": "Grandmother sa dá skrátiť na grandma. Dedko je grandfather alebo grandpa.",
"en": "Grandmother can be shortened to grandma or granny. Look at family photos together."
},
"an-u2-024": {
"sk": "Povedzte spolu: This is my grandfather. Môžete ukázať fotografiu.",
"en": "Say together: This is my grandfather. You can show a photo."
},
"an-u2-025": {
"sk": "Ukážte fotku kamaráta a povedzte: This is my friend.",
"en": "Show a photo of a friend and say: This is my friend."
},
"an-u2-026": {
"sk": "Spoločne povedzte: This is my family a ukážte na všetkých členov domácnosti.",
"en": "Say together: This is my family, and point to everyone at home."
},
"an-u2-027": {
"sk": "Pri kreslení pomenujte: pencil je ceruzka, pen je pero. Guma je rubber.",
"en": "When drawing, name the things you use: pencil, pen and rubber."
},
"an-u2-028": {
"sk": "Položte vedľa seba pero a ceruzku a striedajte slová pen a pencil.",
"en": "Put a pen and a pencil side by side and take turns naming them."
},
"an-u2-029": {
"sk": "Ukážte školskú tašku a povedzte school bag.",
"en": "Show your child’s school bag and say school bag."
},
"an-u2-030": {
"sk": "Žiak je pupil alebo student. Učiteľ je teacher. Precvičte: This is my teacher.",
"en": "Talk about your child’s teacher: This is my teacher."
},
"an-u2-031": {
"sk": "V mnohých slovenských učebniciach sa používa pupil. Student príde neskôr v širšom význame.",
"en": "A pupil learns and a teacher teaches. Practise: I am a pupil."
},
"an-u2-032": {
"sk": "Desk je školská lavica alebo pracovný stôl. Table je stôl, napríklad v kuchyni.",
"en": "A desk is a table for working at. Point to a desk or table at home."
},
"an-u2-033": {
"sk": "V triede povedzte: Look at the board. Dvere sú door, okno window.",
"en": "Play classroom at home: Look at the board!"
},
"an-u2-034": {
"sk": "Trieda je classroom, škola je school. Povedzte: I go to school.",
"en": "Say together: I go to school. Name other places, such as shop and park."
},
"an-u2-035": {
"sk": "Pri raňajkách pomenujte: bread, milk, butter. Stačia krátke slová, vety ešte netreba.",
"en": "At breakfast, name the food: bread, milk, butter."
},
"an-u2-036": {
"sk": "Ukážte pohár mlieka a povedzte milk. Voda je water, džús je juice.",
"en": "Show a glass of milk and say milk. Name other drinks: water, juice."
},
"an-u2-037": {
"sk": "Ovocie pomenujte pri nákupnom zozname: banana, orange, pear. Jablko apple už dieťa pozná.",
"en": "Name fruits on a shopping list: banana, orange, pear, apple."
},
"an-u2-038": {
"sk": "Pri pití povedzte: I drink water. Je to jedno z najčastejších slov v 2. ročníku.",
"en": "When drinking, say: I drink water."
},
"an-u2-039": {
"sk": "Pri večeri pomenujte cheese. Vajíčko je egg, mäso je meat.",
"en": "At dinner, name the food: cheese, egg, meat."
},
"an-u2-040": {
"sk": "Ukážte obrázok vajíčka a zopakujte egg. Množné číslo eggs zatiaľ stačí len počuť.",
"en": "Show a picture of an egg and say egg. Then say eggs for more than one."
},
"an-u2-041": {
"sk": "Zeleninu pomenujte v kuchyni: carrot, potato, tomato. Apple je jablko, nie zelenina.",
"en": "Name vegetables in the kitchen: carrot, potato, tomato. An apple is a fruit, not a vegetable."
},
"an-u2-042": {
"sk": "Pri oslave povedzte birthday cake, teda torta. Slovo cake môže znamenať aj koláč; v tejto otázke je správna odpoveď torta a koláč medzi možnosťami nie je.",
"en": "At a party, say birthday cake together and count the candles."
},
"an-u2-043": {
"sk": "Spievajte pieseň o tele a ukazujte: head, shoulders, knees and toes.",
"en": "Sing Head, Shoulders, Knees and Toes and point to each part."
},
"an-u2-044": {
"sk": "Ukážte na oko a povedzte eye. Pozor, píše sa inak, ako znie.",
"en": "Point to your eye and say eye. It is spelt differently from how it sounds."
},
"an-u2-045": {
"sk": "Leg je noha od bedra po členok. Foot je chodidlo. Ukážte obe časti na sebe.",
"en": "Point to your leg and your foot and name both parts."
},
"an-u2-046": {
"sk": "Ukážte na nos, ústa a uši a pomenujte: nose, mouth, ear.",
"en": "Point to your nose, mouth and ears and name them: nose, mouth, ear."
},
"an-u2-047": {
"sk": "Tooth je zub, mouth sú ústa. Precvičte pred zrkadlom.",
"en": "A tooth is in your mouth. Practise the words in front of a mirror."
},
"an-u2-048": {
"sk": "Ear a eye sa ľahko pomýlia. Ukážte ucho a oko naraz a slová vystriedajte.",
"en": "Ear and eye are easy to mix up. Point to an ear and an eye and take turns saying the words."
},
"an-u2-049": {
"sk": "V učebniciach 2. ročníka je rabbit králik, v súlade s 1. ročníkom. Poľný zajac je hare, to sa zvyčajne učí neskôr.",
"en": "Talk about pet rabbits. A wild animal like a big rabbit is a hare, but that word usually comes later."
},
"an-u2-050": {
"sk": "Na farme pomenujte nové zvieratá: pig, sheep, duck. Pes a mačka už boli v 1. ročníku.",
"en": "Name farm animals and make their sounds: pig, sheep, duck."
},
"an-u2-051": {
"sk": "Sheep je rovnaké v jednotnom aj množnom čísle. Koza je goat, krava cow.",
"en": "The word sheep is the same for one or more: one sheep, two sheep."
},
"an-u2-052": {
"sk": "Ukážte obrázok žaby a zopakujte frog. Myš je mouse, ryba fish.",
"en": "Show a picture of a frog and say frog. A mouse and a fish are different animals."
},
"an-u2-053": {
"sk": "Duck je kačica, hen je sliepka, goose je hus. Bird je vták všeobecne.",
"en": "Name birds you see: duck, hen, goose. Bird is the word for all of them."
},
"an-u2-054": {
"sk": "Mouse je myš. Nezameňte so slovom mouth (ústa), znejú podobne.",
"en": "Mouse and mouth sound similar. Say both words slowly together."
},
"an-u2-055": {
"sk": "Prejdite izby v byte a pomenujte ich: kitchen, bedroom, bathroom, garden.",
"en": "Walk round your home and name the rooms: kitchen, bedroom, bathroom, garden."
},
"an-u2-056": {
"sk": "Bed je posteľ, bedroom je izba na spanie. Bathroom je kúpeľňa.",
"en": "A bed is for sleeping, and a bedroom is a room for sleeping. A bathroom is for washing."
},
"an-u2-057": {
"sk": "Bike je krátke slovo pre bicycle. Bus je autobus, train vlak, boat loď.",
"en": "Bike is a short word for bicycle. Name other ways to travel: bus, train, boat."
},
"an-u2-058": {
"sk": "Pri upratovaní hračiek pomenujte: doll, ball, teddy. Lopta ball už bola v starších otázkach, tu je iné slovo.",
"en": "When tidying up toys, name them: doll, ball, teddy."
},
"an-u2-059": {
"sk": "Zahrajte hru Šimon hovorí: Jump! Run! Swim! Sing! Dieťa predvádza pohyb.",
"en": "Play Simon Says: Jump! Run! Swim! Sing! Your child acts out each word."
},
"an-u2-060": {
"sk": "Pri kúpani alebo v bazéne povedzte: I can swim. Bežať je run, spievať sing.",
"en": "At the swimming pool or in the bath, say: I can swim."
},
"fy-u2-001": {
"sk": "Spoločne si ráno pozrite teplomer za oknom a povedzte, či je teplejšie, alebo chladnejšie ako včera.",
"en": "In the morning, look at the thermometer outside the window together and say whether it is warmer or colder than yesterday."
},
"fy-u2-002": {
"sk": "Vyjdite von a pozorujte, ako vietor hýbe listami. Vzduch nevidíme, ale jeho pohyb cítime.",
"en": "Go outside and watch the wind move the leaves. We cannot see air, but we can feel it moving."
},
"fy-u2-003": {
"sk": "Sneh aj dážď padajú z oblakov. V zime je v oblakoch voda v tuhej podobe.",
"en": "Snow and rain both fall from clouds. In winter, the water in the clouds is frozen."
},
"fy-u2-004": {
"sk": "Veďte si jednoduchý týždenný záznam počasia: prší, sneží, je oblačno, svieti slnko.",
"en": "Keep a simple weather diary for a week: rain, snow, cloud, sun."
},
"fy-u2-005": {
"sk": "Ak uvidíte dúhu, všimnite si slnko aj dážď. Netreba ešte vysvetľovať rozklad svetla do detailov.",
"en": "If you see a rainbow, notice both the sun and the rain. There is no need to explain how light splits yet."
},
"fy-u2-006": {
"sk": "Pred odchodom sa opýtajte: Aké je dnes počasie? Čo si máme obliecť?",
"en": "Before going out, ask: What is the weather like today? What should we wear?"
},
"fy-u2-007": {
"sk": "Mávnite prázdnym vreckom alebo igelitovou taškou: naplnia sa vzduchom, hoci vyzerajú prázdne.",
"en": "Wave an empty paper or plastic bag about: it fills with air, even though it looked empty."
},
"fy-u2-008": {
"sk": "Pripomeňte, že čistý vzduch je dôležitý pre zdravie. V zadymenej miestnosti sa dýcha ťažšie.",
"en": "Remind your child that clean air is important for health. It is harder to breathe in a smoky room."
},
"fy-u2-009": {
"sk": "Pozorujte oblohu pred dažďom. Tmavé nízke oblaky často znamenajú, že bude pršať.",
"en": "Watch the sky before rain. Dark, low clouds often mean that rain is coming."
},
"fy-u2-010": {
"sk": "Pri búrke ideme do domu a nestojíme pod vysokým stromom. O bezpečnosti hovorte pokojne, bez strašenia.",
"en": "In a thunderstorm, we go indoors and do not shelter under tall trees. Talk about safety calmly, without frightening your child."
},
"fy-u2-011": {
"sk": "Nechajte v miske roztopiť ľadovú kocku a pozorujte, že vznikne obyčajná voda.",
"en": "Let an ice cube melt in a bowl and see that it turns into ordinary water."
},
"fy-u2-012": {
"sk": "Nalejte trochu vody na tanier a nechajte ho na teplom mieste. Po čase voda ubudne – vyparí sa.",
"en": "Pour a little water onto a plate and leave it somewhere warm. After a while there is less water: it has evaporated."
},
"fy-u2-013": {
"sk": "Skúste do dvoch pohárov dať cukor a piesok. Cukor zmizne, piesok ostane na dne.",
"en": "Put sugar in one glass of water and sand in another. The sugar disappears, but the sand stays at the bottom."
},
"fy-u2-014": {
"sk": "Špinavú vodu nie vždy spoznáme zrakom, čuchom ani chuťou. Pijeme len vodu z overeného zdroja.",
"en": "We cannot always spot dirty water by looking, smelling or tasting. We only drink water from a safe source."
},
"fy-u2-015": {
"sk": "Vysvetlite, že v potoku môžu byť pre oko neviditeľné nečistoty. Na výlete pite vodu, ktorú ste si doniesli.",
"en": "Explain that a stream can contain dirt too small to see. On a day out, drink the water you brought with you."
},
"fy-u2-016": {
"sk": "Pozorujte, ako zvädne kvet bez vody a ako sa zotaví, keď ho zalejete.",
"en": "Watch a flower wilt without water and recover when you water it."
},
"fy-u2-017": {
"sk": "Pri varení opatrne ukážte paru nad hrncom. Para je voda v plynnom skupenstve, nie dym.",
"en": "When cooking, carefully show your child the steam above the pan. Steam comes from water, it is not smoke."
},
"fy-u2-018": {
"sk": "Ukážte kohútik alebo balenú vodu a povedzte, že ide o pitnú vodu, ktorú overili dospelí.",
"en": "Show the tap or bottled water and explain that it is drinking water that adults have checked."
},
"fy-u2-019": {
"sk": "Cez kávový filter alebo hrubú látku preceďte vodu s hlinou. Na filtri ostane hlina.",
"en": "Pour muddy water through a coffee filter or a thick cloth. The soil stays on the filter."
},
"fy-u2-020": {
"sk": "Filter zachytí väčšie čiastočky. Nie všetko sa však filtrom dá oddeliť, napríklad rozpustenú soľ nie.",
"en": "A filter catches bigger bits. Not everything can be filtered out, though: dissolved salt cannot."
},
"fy-u2-021": {
"sk": "Ukážte na obrázku niekoľko kostí: lebku, rebrá, kosti rúk a nôh. Netreba učiť všetky názvy.",
"en": "Show a few bones in a picture: the skull, the ribs and the bones of the arms and legs. There is no need to learn all the names."
},
"fy-u2-022": {
"sk": "Nechajte dieťa zatnúť päsť alebo zdvihnúť ruku a nahmatať, ako sa sval stiahne.",
"en": "Let your child make a fist or lift an arm and feel the muscle tighten."
},
"fy-u2-023": {
"sk": "Položte ruku na hruď a skúste v pokoji a po krátkom pohybe vnímať tlkot srdca.",
"en": "Put a hand on the chest and feel the heartbeat while resting and after a short run around."
},
"fy-u2-024": {
"sk": "Položte ruku na hruď a nadýchnite sa: hruď sa zdvihne, lebo sa naplnia pľúca.",
"en": "Put a hand on the chest and breathe in: the chest rises because the lungs fill with air."
},
"fy-u2-025": {
"sk": "Pred olúpaním jablka ho spoločne umyte a povedzte, prečo to robíte.",
"en": "Wash an apple together before peeling it and talk about why you are doing it."
},
"fy-u2-026": {
"sk": "Čistite zuby ráno a večer dve minúty. Môžete použiť presýpacie hodiny.",
"en": "Brush teeth for two minutes in the morning and at night. You can use a sand timer."
},
"fy-u2-027": {
"sk": "Choďte spoločne na prechádzku alebo si zahrajte vonku. Pohyb posilňuje svaly aj kosti.",
"en": "Go for a walk together or play outside. Exercise makes muscles and bones stronger."
},
"fy-u2-028": {
"sk": "Urobte z umývania rúk krátku rutinu pred každým jedlom a po príchode zvonku.",
"en": "Make handwashing a short routine before every meal and after coming in from outside."
},
"fy-u2-029": {
"sk": "Pri úraze voláme dospelého a lekára. Dieťa nemá kosti napravovať samo.",
"en": "After an accident, we call an adult and a doctor. A child should never try to fix a bone on their own."
},
"fy-u2-030": {
"sk": "Ak meriate teplotu pri nádche, ukážte, že zdravé telo má približne 36 až 37 stupňov.",
"en": "If you take your child’s temperature during a cold, show that a healthy body is about 36 to 37 degrees."
},
"fy-u2-031": {
"sk": "Ovoňajte kvet, mydlo a kôru chleba. Pomenujte, čo cítite, ale neochutnávajte neznáme veci.",
"en": "Smell a flower, some soap and a bread crust. Name what you can smell, but never taste unknown things."
},
"fy-u2-032": {
"sk": "Chuťou rozoznáme sladké, slané, kyslé a horké. Skúste jablko a kúsok citróna.",
"en": "With taste we can tell sweet, salty, sour and bitter. Try an apple and a piece of lemon."
},
"fy-u2-033": {
"sk": "So zaviazanými očami nechajte dieťa uhádnuť predmet podľa hmatu: kameň, šatka, lyžica.",
"en": "Blindfold your child and let them guess objects by touch: a stone, a scarf, a spoon."
},
"fy-u2-034": {
"sk": "Vymenujte ich spolu: zrak, sluch, čuch, chuť a hmat. Ku každému ukážte orgán.",
"en": "Name them together: sight, hearing, smell, taste and touch. Point to the body part for each one."
},
"fy-u2-035": {
"sk": "V tme si opatrne pomáhame hmatom. Zrak bez svetla nestačí. Nikdy neochutnávame neznáme veci.",
"en": "In the dark, we feel our way carefully. Our eyes cannot help without light. We never taste unknown things."
},
"fy-u2-036": {
"sk": "Pri hlučnej práci alebo ohňostroji si zakryjeme uši. Sluch treba chrániť.",
"en": "During noisy work or fireworks, cover your ears. Our hearing needs protecting."
},
"fy-u2-037": {
"sk": "Na izbovej rastline alebo na kvete zo záhrady ukážte jednotlivé časti a pomenujte ich.",
"en": "On a houseplant or a garden flower, point to each part and name it together."
},
"fy-u2-038": {
"sk": "Ak presádzate kvet, opatrne ukážte korene. Bez koreňa sa rastlina v pôde neudrží.",
"en": "When repotting a plant, carefully show the roots. Without roots, a plant cannot stay in the soil."
},
"fy-u2-039": {
"sk": "Ukážte jablko a kvet jablone na obrázku. Nie z každého kvetu plod vznikne, treba aj peľ.",
"en": "Show a picture of an apple and of apple blossom. Not every flower makes a fruit: it needs pollen too."
},
"fy-u2-040": {
"sk": "Dajte fazuľu na vlhkú vatu do tepla. Svetlo pri klíčení ešte nie je nutné; pribudne po vyklíčení.",
"en": "Put a bean on damp cotton wool somewhere warm. Seeds do not need light to start growing; they need it once they have sprouted."
},
"fy-u2-041": {
"sk": "Porovnajte dva klíčky: jeden na svetle, druhý v tme. Na svetle bude zelenší a pevnejší.",
"en": "Compare two seedlings, one in the light and one in the dark. The one in the light will be greener and stronger."
},
"fy-u2-042": {
"sk": "Rozkrojte jablko a ukážte semienka vo vnútri. Plod semienka chráni.",
"en": "Cut an apple open and show the seeds inside. The fruit protects the seeds."
},
"fy-u2-043": {
"sk": "Ukážte celú mrkvu s vňaťou: oranžová časť rastie v zemi a je to koreň.",
"en": "Show a whole carrot with its leaves: the orange part grows in the soil and it is the root."
},
"fy-u2-044": {
"sk": "Pri večeri pomenujte, ktorú časť rastliny jeme: list, koreň, plod alebo semeno.",
"en": "At dinner, name the part of the plant you are eating: leaf, root, fruit or seed."
},
"fy-u2-045": {
"sk": "Pripomeňte, že bez rastlín by sme nemali čím dýchať ani čo jesť. Preto o ne starostlivo dbáme.",
"en": "Remind your child that without plants we would have nothing to breathe or eat. That is why we look after them."
},
"fy-u2-046": {
"sk": "Zo semena vyrastie vždy rastlina toho istého druhu. Z fazule nebude strom.",
"en": "A seed always grows into the same kind of plant. A bean will not become a tree."
},
"fy-u2-047": {
"sk": "Pozrite si hrudu zeme: sú v nej korienky, kamienky, vlhkosť aj drobné živočíchy.",
"en": "Look at a lump of soil together: it has tiny roots, small stones, moisture and little creatures in it."
},
"fy-u2-048": {
"sk": "V komposte ostávajú zvyšky rastlín, z ktorých vzniká humus. Do pôdy nepatrí odpad ani batérie.",
"en": "In a compost heap, plant scraps rot down and turn into humus. Rubbish and batteries do not belong in soil."
},
"fy-u2-049": {
"sk": "Ak vidíte výkop alebo skalný zárez, ukážte, že pod hlinou je kameň a hornina.",
"en": "If you see a building site or a rocky cutting, show that there is rock under the soil."
},
"fy-u2-050": {
"sk": "Na prechádzke odpad odneste do koša. Pôda je živé prostredie, nie smetisko.",
"en": "On a walk, take your rubbish to a bin. Soil is a living home for many creatures, not a rubbish tip."
},
"fy-u2-051": {
"sk": "Po daždi môžete na chodníku vidieť dážďovky. Vracajte ich opatrne do trávy, pôde pomáhajú.",
"en": "After rain you may see earthworms on the pavement. Gently put them back on the grass: they help the soil."
},
"fy-u2-052": {
"sk": "Korene aj dážďovky potrebujú vodu a vzduch. Preto pôdu zbytočne nestláčame do tvrdej kôry.",
"en": "Roots and earthworms need water and air. That is why we avoid pressing soil down into a hard crust."
},
"fy-u2-053": {
"sk": "Porovnajte kameň a mačku: mačka sa hýbe, dýcha, rastie a prijíma potravu, kameň nie.",
"en": "Compare a stone and a cat: a cat moves, breathes, grows and eats, but a stone does not."
},
"fy-u2-054": {
"sk": "Triedte predmety na živé a neživé. Rastliny sú živé, aj keď sa neprechádzajú ako živočíchy.",
"en": "Sort objects into living and non-living things. Plants are alive, even though they do not walk about like animals."
},
"fy-u2-055": {
"sk": "Na lúke pozorujte, ako včela usedá na kvety. Peľ, ktorý prenáša, pomáha vzniku plodov.",
"en": "In a meadow, watch a bee land on flowers. The pollen it carries helps fruits to grow."
},
"fy-u2-056": {
"sk": "Pri mravenisku sa prizrite z bezpečnej vzdialenosti. Mravce pracujú spolu, hniezdo nerušíme.",
"en": "Watch an anthill from a safe distance. Ants work together, and we do not disturb their nest."
},
"fy-u2-057": {
"sk": "Úľ je príbytok, ktorý včelám pripraví človek. Voľne žijúce včely majú hniezdo, napríklad v dutine stromu. Brloh patrí napríklad medveďovi, mravenisko mravcom.",
"en": "A hive is a home that people make for bees. Wild bees have nests, for example in a hollow tree. A den is a bear’s home and an anthill is the ants’ home."
},
"fy-u2-058": {
"sk": "Huby zbierajú len skúsení dospelí. Dieťa ich samo netrhá a neochutnáva.",
"en": "Only experienced adults should pick mushrooms. Children should never pick or taste them on their own."
},
"fy-u2-059": {
"sk": "Zopakujte prejavy života na ďalších príkladoch: strom, ryba, človek oproti stolu či autu.",
"en": "Talk about more examples of living things, such as a tree, a fish and a person, and compare them with a table or a car."
},
"fy-u2-060": {
"sk": "Na prechádzke si všímajte, čo všetko nám príroda dáva: vzduch, vodu, potravu aj krásu. Odpad odnášame so sebou.",
"en": "On a walk, notice everything nature gives us: air, water, food and beauty. We take our rubbish home with us."
},
"sl-u2-001": {
"sk": "Spievajte alebo vymenúvajte abecedu nahlas. Po c nasleduje č, až potom d.",
"en": "Sing or say the alphabet aloud together and stop at c. Which letter comes next?"
},
"sl-u2-002": {
"sk": "Pripomeňte, že ch je jedno písmeno slovenskej abecedy a stojí hneď po h.",
"en": "Write the letters g to k on cards, mix them up and put them back in order together."
},
"sl-u2-003": {
"sk": "Po ch v abecede nasleduje i. Spoločne ukážte tieto písmená v abecednom prehľade.",
"en": "Point to the letters m, n, o and p on an alphabet chart and say them aloud together."
},
"sl-u2-004": {
"sk": "Po s ide š, až potom t. Hľadajte v slovníku alebo v zozname mená začínajúce na s a š.",
"en": "Look for names starting with s and t in a list or a book and say which comes first."
},
"sl-u2-005": {
"sk": "Ž je posledné písmeno slovenskej abecedy a stojí hneď po z.",
"en": "Say the end of the alphabet together: w, x, y, z. Z is the last letter."
},
"sl-u2-006": {
"sk": "Zoraďujte tri kartičky so slovami podľa prvého písmena. A je pred d, d je pred š.",
"en": "Put three word cards in order by their first letters. A comes before d, and d comes before s."
},
"sl-u2-007": {
"sk": "Pozerajte na prvé písmeno: č je v abecede pred h a h je pred j.",
"en": "Look at the first letter of each word. If two words start with the same letter, look at the second letter."
},
"sl-u2-008": {
"sk": "Abecedu začínajte vždy od a. Dlhé á v abecede stojí až za krátkym a.",
"en": "Always start the alphabet from a. Ask your child which letter is last."
},
"sl-u2-009": {
"sk": "Samohlásky sa dajú spievať samy. Pridajte aj ich dlhé dvojice á, é, í, ó, ú, ý.",
"en": "Say the five vowels aloud together and look for them in your child’s name."
},
"sl-u2-010": {
"sk": "Krátka samohláska nemá dĺžeň. Ukážte rozdiel medzi e a é na kartičkách.",
"en": "Say pairs of words aloud, such as hot and boat, and listen for the short and the long o sound."
},
"sl-u2-011": {
"sk": "Dlhá samohláska má dĺžeň. Hľadajte v izbe nápisy s á, é, í, ó, ú, ý.",
"en": "Say cat and cake slowly together. Which one has the long a sound?"
},
"sl-u2-012": {
"sk": "Vyslovujte slová predĺžene a krátko. V slove múka počuť dlhé ú.",
"en": "Stretch the vowel sound in words such as moon, tree and cake, then say short words such as pen and cat."
},
"sl-u2-013": {
"sk": "Tlieskajte prvú slabiku a všímajte si, či je krátka, alebo dlhá.",
"en": "Clap each word and listen: is the vowel sound short or long?"
},
"sl-u2-014": {
"sk": "Vytvorte páry a–á, e–é, i–í, o–ó, u–ú, y–ý a povedzte ich nahlas.",
"en": "Write boat, coat and road and underline oa together."
},
"sl-u2-015": {
"sk": "Vysvetlite: vila je typ domu, víla je rozprávková bytosť. Dĺžeň vie zmeniť význam slova.",
"en": "Write hop, cap and kit, then add e: hope, cape, kite. Read each pair aloud together."
},
"sl-u2-016": {
"sk": "V slove pes je jedna samohláska e. Spoluhlásky p a s nie sú samohlásky.",
"en": "Write short words such as dog, cat and sun and ask your child to circle the vowel."
},
"sl-u2-017": {
"sk": "Dvojhlásky sú ia, ie, iu a ô. Vyslovujú sa v jednej slabike.",
"en": "Look for sh, ch and th in a book and say the sound each one makes."
},
"sl-u2-018": {
"sk": "V slove chlieb počuť ie v jednej slabike. Hľadajte ďalšie slová: dieťa, piesok, vietor.",
"en": "Find more ee words together: see, feet, green."
},
"sl-u2-019": {
"sk": "Dvojhlásku ô hľadajte aj v slovách nôž, kôň, vôňa, môj. Nad o je vokáň, nie dĺžeň.",
"en": "Find more oo words together: spoon, food, zoo."
},
"sl-u2-020": {
"sk": "V slove piatok je ia jedna slabika. Ďalšie slová: sviatok, riad, priateľ.",
"en": "Find more ai words together: train, snail, paint."
},
"sl-u2-021": {
"sk": "Naučte sa štyri dvojhlásky naspamäť a hľadajte ich v čítanke.",
"en": "Write a few digraphs on cards and look for them in a picture book."
},
"sl-u2-022": {
"sk": "Dvojhláska ie sa neráta ako dve slabiky. Slovo chlieb sa vysloví v jednom dychu.",
"en": "Clap the word rain together. One clap means one syllable."
},
"sl-u2-023": {
"sk": "Mäkké spoluhlásky sú c, dz, j, ď, ť, ň, ľ, š, č, ž, dž. Po nich píšeme i alebo í.",
"en": "Sort letter cards into vowels and consonants together."
},
"sl-u2-024": {
"sk": "Porovnajte t a ť. Mäkčeň robí spoluhlásku mäkkou. Podobne d–ď, n–ň, l–ľ.",
"en": "Say the vowels a, e, i, o, u, then find them in a short word."
},
"sl-u2-025": {
"sk": "Tvrdé spoluhlásky sú k, g, h, ch, d, t, n, l. Po k, g, h, ch píšeme vždy y alebo ý.",
"en": "Explain that c often says s before e, i or y, as in city, ice and face."
},
"sl-u2-026": {
"sk": "Ch je tvrdá spoluhláska a zároveň jedno písmeno. Po ch píšeme y alebo ý, napríklad chyža.",
"en": "Sort words with c into two groups: c that says k and c that says s."
},
"sl-u2-027": {
"sk": "Vymenujte mäkké spoluhlásky nahlas a ukážte ich na abecednom prehľade.",
"en": "Say a group of letters aloud and ask your child to clap for every vowel."
},
"sl-u2-028": {
"sk": "Tvrdé spoluhlásky sú h, ch, k, g, d, t, n, l. Po nich píšeme y alebo ý.",
"en": "Explain that g often says j before e, i or y, as in giant and gem."
},
"sl-u2-029": {
"sk": "Obojaké spoluhlásky sú b, f, m, p, r, s, v, z. V 2. ročníku ich stačí vedieť pomenovať. Vybrané slová prídu neskôr.",
"en": "Read yes, yellow, my and fly together and listen to the sound of y."
},
"sl-u2-030": {
"sk": "Opakujte pravidlo: po mäkkej i/í, po tvrdej k, g, h, ch vždy y/ý.",
"en": "Write duck, back and sock and underline ck together."
},
"sl-u2-031": {
"sk": "Po tvrdej spoluhláske ch píšeme y. Vymýšľajte ďalšie slová s chy: chyža, chytať.",
"en": "Write a few qu words together: queen, quiet, quick."
},
"sl-u2-032": {
"sk": "Po tvrdej spoluhláske k píšeme y alebo ý. Tu je dlhé ý, lebo slabika je dlhá.",
"en": "Wave to each other, then write the word together."
},
"sl-u2-033": {
"sk": "Po tvrdej spoluhláske h píšeme y. Slovo hydina si dieťa môže spojiť s obrázkom sliepok.",
"en": "Write chicken on a card and look at it together, then try it from memory."
},
"sl-u2-034": {
"sk": "Po mäkkej spoluhláske č píšeme i alebo í. V slove číslo je dlhé í.",
"en": "Practise the words two, too and to in short sentences, for example: I have two cats, too."
},
"sl-u2-035": {
"sk": "Po mäkkej spoluhláske š píšeme i. Hľadajte šišky na prechádzke a slovo si zapíšte.",
"en": "Look for pine cones on a walk and write the word together at home."
},
"sl-u2-036": {
"sk": "Po mäkkej spoluhláske ž píšeme i. Pozor, prvá slabika je krátka: ži-had-lo.",
"en": "Find more words ending in ng together: king, ring, song."
},
"sl-u2-037": {
"sk": "Po mäkkej spoluhláske c píšeme i alebo í. V slove cítiť je prvá slabika dlhá.",
"en": "Explain that a short word often doubles l after a short vowel: bell, hill, smell."
},
"sl-u2-038": {
"sk": "Chyža je izba alebo chalúpka. Po ch píšeme y a prvá slabika je krátka.",
"en": "Write house and mouse together and notice that they end in the same way."
},
"sl-u2-039": {
"sk": "Po č píšeme i. Slovo čistý má krátku slabiku či, preto nie je dĺžeň.",
"en": "Find more ea words together: eat, sea, read."
},
"sl-u2-040": {
"sk": "Vždy sa pýtajte: aká spoluhláska stojí pred i/y? Ak je to k, g, h alebo ch, píšeme y alebo ý.",
"en": "Write bell, puff and kiss together and ask: Which sound comes just before the double letter?"
},
"sl-u2-041": {
"sk": "Tlieskajte slovo: ško-la. Koľko tliesknutí počujete, toľko má slovo slabík.",
"en": "Clap the word together: pen-cil. The number of claps tells you the number of syllables."
},
"sl-u2-042": {
"sk": "Tlieskajte: ja-ho-da. Môžete dať aj ruku pod bradu: koľkokrát klesne brada, toľko je slabík.",
"en": "Clap together: ba-na-na. You can also put a hand under your chin and count how many times it drops."
},
"sl-u2-043": {
"sk": "Slovo strom sa povie v jednom dychu. Má len jednu samohlásku, teda jednu slabiku.",
"en": "Say tree in one beat. It has one vowel sound, so it has one syllable."
},
"sl-u2-044": {
"sk": "Delíme: u-či-teľ. Pozor na mäkké ľ na konci, nie je to samostatná slabika.",
"en": "Clap together: el-e-phant. Try more animal names, such as tiger and kangaroo."
},
"sl-u2-045": {
"sk": "Každá slabika má samohlásku. V slove jahoda sú tri samohlásky, teda tri slabiky.",
"en": "Every syllable has a vowel sound. Banana has three vowel sounds, so it has three syllables."
},
"sl-u2-046": {
"sk": "Pero má dve slabiky: pe-ro. Strom má jednu, jahoda tri a učiteľka štyri.",
"en": "Rabbit has two syllables, tree has one, and banana and elephant have three."
},
"sl-u2-047": {
"sk": "Ukážte v knihe slovo rozdelené na konci riadka a spoločne ho prečítajte po slabikách.",
"en": "Show a word split at the end of a line in a book and read it together syllable by syllable."
},
"sl-u2-048": {
"sk": "Dvojhláska ô je v jednej slabike. Slovo stôl má teda len jednu slabiku, podobne ako chlieb.",
"en": "The letters oo make one sound, so moon has one syllable, like rain."
},
"sl-u2-049": {
"sk": "Oznamovacia veta niečo oznamuje a na konci má bodku. Hľadajte také vety v čítanke.",
"en": "A statement tells us something and ends with a full stop. Look for statements in a reading book."
},
"sl-u2-050": {
"sk": "Opytovacia veta sa pýta a na konci má otáznik. Skúste vymyslieť tri otázky o dni.",
"en": "A question asks something and ends with a question mark. Make up three questions about your day."
},
"sl-u2-051": {
"sk": "Rozkazovacia veta niekomu hovorí, čo má urobiť. Na konci má často výkričník.",
"en": "A command tells someone what to do. It often starts with a bossy verb, such as wash or sit."
},
"sl-u2-052": {
"sk": "Napíšte tri krátke oznamovacie vety a na koniec dajte bodku.",
"en": "Write three short statements together and put a full stop at the end of each one."
},
"sl-u2-053": {
"sk": "Pri jasnom rozkaze píšeme výkričník: „Počkaj!“ Môžete zahrať divadlo s rozkazmi.",
"en": "Play a game of giving urgent commands, such as 'Stop!' and 'Wait!', and write them with an exclamation mark."
},
"sl-u2-054": {
"sk": "Opytovacia veta sa dá spýtať nahlas so stúpajúcou melódiou. Všímajte si otáznik.",
"en": "Read questions aloud with your voice going up at the end. Point out the question mark."
},
"sl-u2-055": {
"sk": "Rozkaz alebo výzva niečo urobiť. Porovnajte ju s otázkou a s oznámením.",
"en": "Compare a command with a question and a statement about the same thing."
},
"sl-u2-056": {
"sk": "Oznamovacia veta hovorí, ako veci sú. Na konci je bodka, nie otáznik ani výkričník.",
"en": "A statement says how things are. It ends with a full stop, not a question mark or an exclamation mark."
},
"sl-u2-057": {
"sk": "Vlastné mená miest píšeme s veľkým písmenom. Hľadajte na mape ďalšie mestá Slovenska.",
"en": "Names of places start with a capital letter. Look for more town and city names on a map."
},
"sl-u2-058": {
"sk": "Hľadajte v izbe protiklady: horúci čaj a studená voda, veľký a malý tanier.",
"en": "Look for opposites at home: a hot drink and cold water, a big plate and a small plate."
},
"sl-u2-059": {
"sk": "Rýmujúce sa slová znejú na konci podobne. Vymýšľajte ďalšie dvojice, napríklad les – pes.",
"en": "Rhyming words sound the same at the end. Make up more pairs, such as sun and fun."
},
"sl-u2-060": {
"sk": "Pri čítaní rozprávky sa pýtajte, ktoré slová opisujú opačné pocity.",
"en": "When reading a story, ask which words describe opposite feelings."
}
};
