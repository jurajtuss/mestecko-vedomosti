"use strict";

(() => {
  const ostrov = document.getElementById("ostrov");
  const izba = document.getElementById("izba-kresba");
  const roomSelect = document.getElementById("izba-volba");
  const info = document.getElementById("napoveda");
  let current = {jazyk: "sk", obrazovka: "jazyk", postaveneDomy: ["06"], zbierka: []};
  let lastRoomItems = "";
  let lastTownHouses = "";
  let previousRoom = "";
  let seenReward = null;
  let roomCameraX = 360;
  let drag = null;
  const labels = {sk: ["Obývačka", "Detská izba", "Spálňa", "Predsieň", "Kuchyňa", "Záhrada"], en: ["Living room", "Children’s room", "Bedroom", "Hall", "Kitchen", "Garden"]};
  const roomIds = ["obyvacka","detska","spalna","predsien","kuchyna","zahrada"];
  const island = "M97 472 Q113 434 207 418 Q208 393 322 390 Q341 358 457 355 Q489 330 606 342 Q704 308 819 334 Q908 317 970 341 Q1055 324 1120 352 Q1218 347 1250 380 Q1361 374 1389 417 Q1490 431 1535 485 Q1582 533 1506 574 Q1477 630 1341 645 Q1280 687 1140 684 Q1081 714 971 704 Q871 736 780 719 Q652 749 548 720 Q435 722 373 682 Q250 672 229 627 Q144 615 143 567 Q64 540 97 472Z";
  const path = (d, fill, extra = "") => `<path d="${d}" fill="${fill}" ${extra}/>`;
  const stroke = (d, color, width) => `<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const ellipse = (x,y,rx,ry,fill) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}"/>`;
  const circle = (x,y,r,fill) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
  const rep = (min,max) => { let seed=85791; return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return min+(max-min)*seed/4294967296; }; };
  const rng = rep(0,1);
  function cloud(x,y,s) {
    return `<g transform="translate(${x} ${y}) scale(${s})" opacity=".7">${path("M0 24 Q2 18 15 17 Q22 2 44 12 Q58 -8 80 3 Q91 -4 99 6 Q116 4 124 20 Q142 19 145 26 Q70 31 0 27Z","#fff9dc")}</g>`;
  }
  function tree(x,y,s,kind) {
    const colors = kind%3===0?["#377a64","#53925f","#84af69","#a5c57a"]:kind%3===1?["#427962","#69965e","#93b46c","#b9cb7d"]:["#33756d","#559480","#82b392","#a4cba2"];
    return `<g transform="translate(${x} ${y}) scale(${s})">${ellipse(10,1,24,5,"#547e6336")}${stroke("M0 0 l1 -33 m0 12 l-9 -9", "#795b45",4)}${path("M-3 -12 Q-20 -12 -20 -25 Q-29 -39 -16 -47 Q-18 -58 -7 -59 Q4 -77 17 -63 Q31 -63 29 -49 Q42 -40 31 -28 Q32 -15 17 -15 Q8 -9 -3 -12Z",colors[0])}${path("M-18 -27 Q-25 -37 -16 -45 Q-18 -57 -5 -58 Q3 -74 15 -61 Q27 -62 26 -49 Q31 -38 20 -34 Q21 -23 9 -22 Q-4 -16 -8 -24Z",colors[1])}${path("M-16 -38 Q-20 -47 -9 -52 Q-7 -65 5 -63 Q13 -65 17 -58 Q6 -59 4 -50 Q-7 -53 -8 -42Z",colors[2])}${stroke("M-11 -44 q4 -6 7 -5 M4 -57 q4 -5 8 -2",colors[3],1.7)}</g>`;
  }
  function windowBox(x,y) {
    return `<g transform="translate(${x} ${y})">${path("M-10 1 Q0 -11 10 1 V24 H-10Z","#f3d49a")}${path("M-7 2 Q0 -6 7 2 V20 H-7Z","#426b70")}${stroke("M0 -2 v21 m-7 -11 h14","#edc988",2)}${path("M-13 22 h26 l-2 4 h-22Z","#865e46")}</g>`;
  }
  function cottage(x,y,s,hue,id) {
    const hero=id==="06";
    return `<g transform="translate(${x} ${y}) scale(${s})">${ellipse(8,2,74,13,"#4a6b5438")}
      ${path("M-56 -53 L20 -80 69 -58 68 -4 4 9 -57 -8Z","#ac8058")}
      ${path("M-56 -60 L5 -52 5 6 -57 -8Z","#e8c586")}
      ${path("M5 -52 L65 -66 65 -7 5 6Z","#f9dc9a")}
      ${path("M-55 -62 l7 -5 54 13 57 -15 5 4 -62 21Z","#9e6d41")}
      ${path("M-39 -87 v-28 l11 -3 8 5 v32Z","#b98562")}${path("M-41 -115 l15 -4 10 6 -14 5Z","#825b50")}
      ${path("M-68 -62 L-34 -105 31 -96 74 -65 6 -48Z",hue)}
      ${path("M-68 -62 L-34 -105 6 -48Z","#ac6549")}
      ${stroke("M-67 -62 l73 16 68 -19","#80533e",4)}
      ${stroke("M-34 -104 l64 9 m-56 1 61 10 m-48 -1 59 9 m-45 0 58 8", "#f0ad71",1.8)}
      ${path("M-7 -73 l11 -15 17 13 -6 9Z","#87563f")}${path("M-3 -73 l8 -11 8 8 v9 l-16 -4Z","#f6d7a0")}${path("M2 -74 h6 v6 H2Z","#50717a")}
      ${windowBox(-37,-47)}${windowBox(46,-48)}
      ${path("M-13 -5 v-20 q8 -15 17 -2 v27Z","#926951")}${path("M-10 -7 v-16 q5 -10 11 -2 v20Z","#3d7774")}${circle(-1,-13,1.3,"#f4ce82")}
      ${stroke("M5 -48 v48 m-61 -51 v39","#b88f61",2)}${path("M-12 -2 l18 3 -4 5 -21 -3Z","#e7caa1")}
      ${hero?`${path("M39 -17 h17 v10 H39Z","#66847a")}<text x="47.5" y="-9" text-anchor="middle" fill="white" font-family="sans-serif" font-size="8">06</text>`:""}
      </g>`;
  }
  function fountain() {
    return `<g transform="translate(778 545)">${ellipse(8,11,95,29,"#8f967657")}${ellipse(0,0,86,29,"#889fa0")}${ellipse(0,-5,86,29,"#dfd6b3")}${ellipse(0,-8,76,22,"#79c5ca")}${ellipse(0,-8,63,16,"#99dcd9")}
      ${path("M-20 -9 Q-12 -12 -8 -19 L-4 -47 H4 L9 -19 Q12 -13 20 -9 Q3 -2 -20 -9Z","#8daba4")}${stroke("M-6 -20 l3 -22","#e2e1bb",3)}
      ${ellipse(0,-48,33,9,"#a5b8a9")}${path("M-32 -49 Q0 -36 32 -49 Q23 -33 0 -32 Q-23 -33 -32 -49Z","#88a49c")}${ellipse(0,-50,32,7,"#cfddd0")}${ellipse(0,-51,25,4,"#86caca")}
      ${stroke("M0 -51 Q5 -88 1 -96 Q-2 -102 -4 -92 M2 -48 Q16 -91 29 -65 Q35 -53 37 -28 M-2 -48 Q-18 -85 -28 -58 Q-35 -43 -35 -23","#e5ffff",2.4)}
      ${stroke("M-27 -45 q-12 0 -16 31 m71 -31 q14 2 17 29 M-10 -9 q-27 -4 -35 -1 m71 -4 q19 0 24 4","#e5ffff",2)}
      ${circle(1,-101,2,"#f2ffff")}${circle(36,-32,2,"#e9ffff")}</g>`;
  }
  function buildLandscape() {
    let water="", grass="", pebbles="", plants="";
    for(let i=0;i<360;i++) {const x=rng()*2320-330, y=337+rng()*1000, w=5+rng()*34;water+=stroke(`M${x.toFixed(1)} ${y.toFixed(1)} q${w/2} 2 ${w} 0`,i%4?"#d1f0d47a":"#4fadae66",1+rng()*2);}
    for(let i=0;i<310;i++){const x=93+rng()*1460,y=335+rng()*403;grass+=i%4 ? stroke(`M${x} ${y} l3 -1`, "#c8d897",1.8):path(`M${x} ${y} l-2 -5 4 3 3 -5 -1 7Z`,"#82a76a");}
    for(let i=0;i<130;i++){const a=rng()*Math.PI*2, r=Math.sqrt(rng()); pebbles+=ellipse(777+Math.cos(a)*r*190,521+Math.sin(a)*r*68,2.4+rng()*3,1.3,"#b6a88a77");}
    const lines=[[[194,485],[243,476],[288,453],[302,421],[338,410]],[[414,401],[443,384],[466,382]],[[1099,396],[1140,382],[1182,396],[1221,408],[1253,411],[1344,460]],[[277,589],[301,611],[335,623]],[[1176,606],[1199,593],[1232,585],[1280,580]]];
    for(const line of lines)for(const [x,y] of line) plants+=tree(x,y,.67+rng()*.35,Math.floor(rng()*9));
    const land=`<defs><linearGradient id="sky" x2="0" y2="1" gradientUnits="objectBoundingBox" gradientTransform="rotate(0)"><stop stop-color="#83c8d8"/><stop offset=".65" stop-color="#c2e6dd"/><stop offset="1" stop-color="#f6edcc"/></linearGradient>
      <linearGradient id="sea" x2="0%" y2="100%"><stop stop-color="#9bd7d1"/><stop offset=".36" stop-color="#80c9c2"/><stop offset="1" stop-color="#469b9f"/></linearGradient>
      <linearGradient id="meadow" x2="25%" y2="100%"><stop stop-color="#91b682"/><stop offset=".5" stop-color="#bed68b"/><stop offset="1" stop-color="#a6c57b"/></linearGradient>
      <clipPath id="ostrovna-trava">${path(island,"white")}</clipPath></defs>
      <rect x="-2200" y="-2400" width="6800" height="2800" fill="#a0d3df"/>
      <rect x="-600" y="-180" width="3100" height="513" fill="url(#sky)"/>
      ${circle(1074,181,54,"#fff9cb60")}${circle(1074,181,36,"#fff6c4")}
      ${cloud(220,162,1.2)}${cloud(838,120,.8)}${cloud(1230,209,1.15)}${cloud(1554,142,.8)}
      ${path("M-480 357 Q-180 260 30 292 Q166 254 287 294 Q430 215 536 256 Q661 300 765 279 Q907 221 1001 270 Q1152 199 1285 253 Q1430 192 1590 270 Q1780 199 2110 269 V355Z","#95bfba")}
      ${path("M-480 346 Q-35 296 133 310 Q256 269 373 308 Q466 279 558 303 Q719 252 846 303 Q957 277 1032 302 Q1130 270 1222 304 Q1423 239 1530 292 Q1668 257 2050 293 V352Z","#a8c9b1")}
      <rect x="-2200" y="327" width="6800" height="2800" fill="url(#sea)"/>
      ${water}<g transform="translate(0 16)">${path(island,"#83c7b6",'stroke="#d5efcf" stroke-width="22"')}</g><g transform="translate(0 12)">${path(island,"#bf9e68",'stroke="#9aba92" stroke-width="5"')}</g><g transform="translate(0 6)">${path(island,"#e6d598")}</g>${path(island,"url(#meadow)")}
      <g clip-path="url(#ostrovna-trava)">${path("M38 488 Q374 361 600 395 T1098 388 Q1258 348 1635 450 V309 H10Z","#88b48585")}${grass}</g>
      ${plants}
      ${path("M761 476 Q731 437 752 402 Q775 368 772 334 Q792 377 774 411 Q753 444 793 477Z","#dfcd92")}
      ${path("M608 531 Q525 540 491 584 Q535 548 655 549Z","#dfcd92")}${path("M890 539 Q1010 555 1117 634 Q1022 549 946 528Z","#dfcd92")}
      ${ellipse(778,526,201,74,"#acb181")}${ellipse(778,522,201,73,"#ddd0a6")}${ellipse(778,518,181,60,"#eadaba")}
      ${pebbles}`;
    ostrov.innerHTML=`<svg viewBox="0 0 1672 941" preserveAspectRatio="xMidYMid slice" aria-label="Ostrov" role="group">${land}<g id="vzdialene-domy"></g><g id="lave-domy"></g>${cottage(924,481,1.04,"#ce774e","06")}${fountain()}<g id="blizke-domy"></g>
      <g transform="translate(910 493)" role="button" tabindex="0" data-akcia="schranka" aria-label="Schránka – Môj dom"><rect x="-25" y="-42" width="59" height="54" fill="transparent"/>${ellipse(9,3,20,4,"#73886655")}${path("M1 -22 h5 V6 H1Z","#7d654a")}${path("M-10 -21 v-8 q0 -10 10 -9 l16 3 q7 2 7 11 v6Z","#aa5140")}${path("M-10 -22 v-7 q0 -9 7 -8 q6 1 6 9 v8Z","#db8c65")}${stroke("M7 -29 v-19","#5e6250",2.5)}${path("M8 -48 l16 3 -4 4 3 3 -15 -3Z","#e25f4d")}</g>
      </svg>`;
  }
  // The prototype shows only houses earned in this save. Their final anchors and art belong to K07.
  const additional = [["01",635,483,1],["02",597,435,.69],["03",677,415,.7],["04",738,390,.64],["05",838,405,.67],["07",934,406,.62],["08",1012,430,.67],["09",1057,468,.7],["10",1100,424,.6]];
  for(let i=11;i<=30;i++){const n=(i-11)%10,west=i<=20; additional.push([String(i), (west?345:985)+(n%5)*52+(n>=5?20:0), (west?485:492)+Math.floor(n/5)*70+(n%3)*14,.52]);}
  function renderTown(ids) {
    const key=ids.join(); if(key===lastTownHouses)return;lastTownHouses=key;
    const wanted=new Set(ids);
    const buildings=additional.filter(([id])=>wanted.has(id)).sort((a,b)=>a[2]-b[2]);
    for(const [layer,filter] of [["vzdialene-domy",y=>y<478],["lave-domy",y=>y>=478&&y<535],["blizke-domy",y=>y>=535]]) {
      document.getElementById(layer).innerHTML=buildings.filter(v=>filter(v[2])).map(([id,x,y,s],j)=>cottage(x,y,s,["#a75c4c","#cd8654","#8b8d63"][j%3],id)).join("");
    }
  }
  function camera() {
    const w=ostrov.clientWidth,h=ostrov.clientHeight;if(!w||!h)return;
    const portrait=w<=h, setup=["vek","jazyk"].includes(current.obrazovka);
    const width=portrait?Math.min(940,Math.max(565,w/h*990)):Math.min(1720,Math.max(1020,w/h*780));
    const height=width*h/w;
    const cx=portrait?805:setup?786:current.matematikaOtvorena?886:818;
    const fy=portrait?(current.matematikaOtvorena?.32:setup?.63:.54):.57;
    ostrov.firstElementChild.setAttribute("viewBox",[cx-width/2,503-height*fy,width,height].join(" "));
    updateRoomCamera();
  }


  function roomPicture(id) {
    const i=roomIds.indexOf(id);
    const colors=["#f4ddab","#c8dece","#dfcdd6","#f0d4af","#c1dcca","#b6d8bc"];
    const wall=colors[i]||colors[0];
    let pattern="",boards="";
    for(let x=5;x<725;x+=28)for(let y=21;y<267;y+=36)pattern+=path(`M${x} ${y} l2 -3 2 3 -2 3Z`,"#fff8df5e");
    for(let n=-7;n<22;n++)boards+=stroke(`M${330+(n-5)*43} 270 l${(n-5)*10} 185`,"#aa815c",1.2);
    if(id==="zahrada"){
      let fence="";for(let x=-50;x<780;x+=28)fence+=path(`M${x} 280 v-109 l12 -10 14 10 v109Z`,x%3?"#b4936d":"#bd9f7a",'stroke="#9b8264"');
      return `<rect x="-120" y="-150" width="960" height="650" fill="#cce8dd"/>${cloud(256,102,.83)}${cloud(68,118,.75)}${circle(526,105,26,"#fff1bb")}${fence}${path("M-90 271 Q312 258 805 279 V530 H-90Z","#9ebd79")}${path("M204 457 Q270 354 401 274 Q323 370 327 459Z","#d3c69b")}`;
    }
    const pane=(x)=>`<g transform="translate(${x} 92)">${path("M0 0 H103 V120 H0Z","#b69372")}${path("M6 5 H97 V110 H6Z","#dbeddb")}${path("M9 80 l59 -72 h27 L13 107 H9Z","#f9f3d54f")}${stroke("M52 4 V111 M4 54 H98","#bca381",4)}${path("M-7 113 H108 V122 H-7Z","#a78065")}${path("M0 0 H25 Q27 36 8 58 Q18 73 12 106 H0Z","#f8edcf")}${path("M77 0 H103 V106 H90 Q85 72 96 58 Q79 44 77 0Z","#eee0c1")}</g>`;
    return `<defs><linearGradient id="podlaha" x2="0%" y2="100%"><stop stop-color="#c29b70"/><stop offset="1" stop-color="#e6c496"/></linearGradient></defs>
      <rect x="-250" y="-170" width="1300" height="610" fill="${wall}"/>${pattern}
      ${path("M0 0 L57 34 V268 L0 291Z","#b8a4814d")}${path("M720 0 L670 32 V269 L720 290Z","#b8a4814d")}
      ${stroke("M0 0 L57 33 H670 L720 0","#fff6d9",6)}${pane(130)}${pane(486)}
      ${path("M-200 270 H920 V670 H-200Z","url(#podlaha)")}${boards}${stroke("M-100 304 H820 M-100 361 H820 M-100 438 H820","#b58e66",1.5)}
      ${path("M-20 258 H740 V271 H-20Z","#b79575")}${stroke("M-20 258 H740","#f5e6c2",3)}
      ${path("M125 272 l97 0 82 77 -141 5Z","#ffe8a83d")}`;
  }
  function itemDrawing(name,index) {
    if(/telev|television/i.test(name))return `${path("M-24 -36 h48 v32 h-48Z","#6c6356")}${path("M-20 -31 q17 -2 33 0 v21 q-17 2 -33 0Z","#8ab1aa")}${circle(18,-20,2,"#ead4a7")}${stroke("M-10 -37 l-8 -9 m8 9 13 -11","#776e58",2)}`;
    if(/konzol|console/i.test(name))return `${path("M-21 -16 l28 -3 12 8 -2 8 -36 1 -5 -5Z","#606b70")}${stroke("M-15 -11 l17 -1","#c7c7b3",2)}${circle(11,-8,1.5,"#98b28c")}`;
    if(/šach|chess/i.test(name)){let pieces="";for(let n=0;n<8;n++){pieces+=path(`M${-22+n*5} -7 v-4 l2 -4 2 4 v5Z`,n%2?"#f2d99a":"#675748");}return `${path("M-25 -6 l40 -4 12 6 -42 6Z","#8a6954")}${pieces}`;}
    if(/kvet|plant|flower/i.test(name))return `${path("M-12 -18 h24 l-4 17 H-9Z","#bb7550")}${stroke("M0 -17 v-22","#688c5b",2)}${ellipse(-5,-27,7,3,"#86a368")}${ellipse(5,-33,7,3,"#569370")}${circle(0,-41,4,"#ce8c6d")}`;
    const color=["#b87762","#729e8c","#899ac0","#bd965a","#a38aa3"][index%5];
    return `${path("M-20 -22 l24 -5 16 5 -24 6Z","#e6ca9e")}${path("M-20 -22 l16 6 v16 l-16 -6Z","#c69f78")}${path("M-4 -16 l24 -6 v16 L-4 0Z","#e5c49a")}${path("M-14 -24 l4 -1 17 5 v16 l-4 1 v-17Z",color)}${path("M-13 -19 l25 -6 4 1 -25 7 v15 l-4 -1Z",color)}`;
  }
  function renderRoom(force=false) {
    const lang=current.jazyk==="en"?"en":"sk";
    const collection=current.zbierka||[];
    const latest=collection.at(-1);
    if(current.obrazovka!=="dom")return;
    if(!previousRoom || (latest && latest.id!==seenReward)){
      roomSelect.value=latest&&roomIds.includes(latest.izba)?latest.izba:"obyvacka";
      seenReward=latest?.id??null;
    }
    const selected=roomSelect.value||"obyvacka";
    const key=[lang, selected,...collection.map(v=>v.id)].join("|");
    if(!force&&key===lastRoomItems&&previousRoom===selected)return;
    if(previousRoom!==selected)roomCameraX=360;
    lastRoomItems=key;previousRoom=selected;
    const items=collection.filter(v=>v.izba===selected);
    const picture=items.map((v,i)=>{const x=176+(i%5)*82+(i>=5?35:0), y=302+Math.floor(i/5)*60+(i%2)*11;return `<g transform="translate(${x} ${y})">${ellipse(2,2,22,4,"#745d4130")}${itemDrawing(v.sk||v.en||"",i)}</g>`;}).join("");
    izba.innerHTML=`<svg viewBox="0 0 720 430" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${roomPicture(selected)}${picture}</svg>`;
    updateRoomCamera();
    const itemNames=items.map(v=>v[lang]).filter(Boolean);
    document.getElementById("izba-veci").textContent=itemNames.length?itemNames.join(" · "):(lang==="sk"?"Za správny bonus môžeš získať vec do tejto izby.":"A correct bonus answer can earn an item for this room.");
  }
  function updateRoomCamera() {
    const picture=izba.firstElementChild, w=izba.clientWidth,h=izba.clientHeight;
    if(!picture||!w||!h)return;
    const height=Math.max(370,Math.min(510,440*h/w+170));
    const width=height*w/h;
    roomCameraX=width>=720?360:Math.min(720-width/2,Math.max(width/2,roomCameraX));
    picture.setAttribute("viewBox",[roomCameraX-width/2,220-height/2,width,height].join(" "));
  }
  izba.addEventListener("pointerdown",e=>{
    if(!e.isPrimary||e.button!==0||izba.clientWidth>=izba.clientHeight)return;
    drag={x:e.clientX,start:roomCameraX};izba.setPointerCapture(e.pointerId);
  });
  izba.addEventListener("pointermove",e=>{
    if(!drag||Math.abs(e.clientX-drag.x)<=8)return;
    const units=izba.firstElementChild.viewBox.baseVal.width/izba.clientWidth;
    roomCameraX=drag.start-(e.clientX-drag.x)*units;updateRoomCamera();
  });
  const endDrag=()=>{drag=null;};
  izba.addEventListener("pointerup",endDrag);izba.addEventListener("pointercancel",endDrag);
  function translate(lang) {
    const key=lang==="en"?"en":"sk";
    document.querySelectorAll("[data-sk][data-en]").forEach(el=>{el.textContent=el.dataset[key];});
    document.querySelectorAll("[data-label-sk]").forEach(el=>{el.setAttribute("aria-label",key==="en"?el.dataset.labelEn:el.dataset.labelSk);});
    const selected=roomSelect.value;
    roomSelect.replaceChildren(...roomIds.map((id,i)=>new Option(labels[key][i],id)));
    if(roomIds.includes(selected))roomSelect.value=selected;
    ostrov.firstElementChild.setAttribute("aria-label",key==="sk"?"Ostrov s námestím":"Town square on the island");
    ostrov.querySelector("[data-akcia=schranka]").setAttribute("aria-label",key==="sk"?"Schránka – Môj dom":"Mailbox – My house");
  }
  const help = {
    jazyk:["Vyber si jazyk, v ktorom chceš hrať.","Choose the language you would like to play in."],
    vek:["Zadaj svoj vek v rokoch a vstúp do mesta. Matematika sa začína na úrovni 1.","Enter your age in years to visit your town. Mathematics starts at level 1."],
    hra:["Otvor Matematiku. Za prvých desať správnych bežných odpovedí postavíš nový dom. Každých desať správnych bežných odpovedí ti prinesie bonusovú otázku. Pri chybe ostane počet správnych odpovedí do bonusu rovnaký. Do svojho domu vstúpiš cez schránku s vlajočkou alebo cez Môj dom.","Open Mathematics. Your first ten correct answers to regular questions build a new house. Every ten correct answers to regular questions earn a bonus question. If you make a mistake, you keep your progress towards the bonus. Open your house using the mailbox with a flag or the My house button."],
    otazka:["Napíš odpoveď a potvrď ju. Po chybe si prečítaj vysvetlenie a zvoľ Ďalšia otázka. Správny bonus ti môže priniesť vec do domu.","Type your answer and submit it. After a mistake, read the explanation and choose Next question. A correct bonus can earn an item for your house."],
    dom:["Vyber si izbu. Uvidíš v nej veci, ktoré si získal za správne bonusové odpovede.","Choose a room to see the items you have earned by answering bonus questions correctly."]
  };
  function showHelp() {
    const screen=current.matematikaOtvorena&&current.obrazovka==="hra"?"otazka":current.obrazovka;
    document.getElementById("pomoc-text").textContent=(help[screen]||help.hra)[current.jazyk==="en"?1:0];
    document.getElementById("zmenit-vek").hidden=!["hra","dom"].includes(current.obrazovka);
    if(!info.open)info.showModal();
  }
  buildLandscape();
  translate("sk");renderTown(["06"]);camera();
  document.body.dataset.pohlad="jazyk";
  document.addEventListener("mestecko:stav",e=>{
    const previous=current;current=e.detail;
    if(previous.jazyk!==current.jazyk)translate(current.jazyk);
    document.body.dataset.pohlad=current.obrazovka;
    ostrov.hidden=current.obrazovka==="dom";
    ostrov.firstElementChild.querySelector("[data-akcia=schranka]").setAttribute("tabindex",current.obrazovka==="hra"?"0":"-1");
    ostrov.setAttribute("inert", "");if(current.obrazovka==="hra")ostrov.removeAttribute("inert");
    renderTown(current.postaveneDomy||["06"]);renderRoom();camera();
  });
  ostrov.setAttribute("inert","");
  ostrov.addEventListener("keydown",e=>{const target=e.target.closest("[data-akcia=schranka]");if(target&&["Enter"," "].includes(e.key)){e.preventDefault();target.dispatchEvent(new MouseEvent("click",{bubbles:true}));}});
  roomSelect.addEventListener("change",()=>renderRoom(true));
  document.getElementById("pomoc").addEventListener("click",showHelp);
  document.getElementById("zmenit-vek").addEventListener("click",()=>info.close());
  window.addEventListener("resize",camera);
})();

