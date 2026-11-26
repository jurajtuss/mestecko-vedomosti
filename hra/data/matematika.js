"use strict";

// Príklady vychádzajú z registrovaných mathQ a mathQ_en zo starej hry.
function vytvoritMatematickyPriklad(uroven, nahodne) {
  const cele = (od, po) => od + Math.floor(nahodne() * (po - od + 1));
  const vyber = (polozky) => polozky[cele(0, polozky.length - 1)];
  const lokalneCislo = (hodnota) => String(hodnota).replace("-", "−");
  const x = nahodne();

  function priklad(tema, narocnost, spravnaOdpoved, sk, en, skVysvetlenie, enVysvetlenie) {
    return {
      idOtazky: "mat-" + uroven + "-" + tema + "-" + sk,
      skolskyPredmet: "matematika",
      uroven,
      tema,
      narocnost,
      spravnaOdpoved: String(spravnaOdpoved),
      texty: { sk, en },
      vysvetlenie: { sk: skVysvetlenie, en: enVysvetlenie },
    };
  }

  switch (uroven) {
    case 1: {
      if (x < 0.4) {
        const a = cele(1, 10);
        const b = cele(1, 10);
        const text = a + " + " + b + " = ?";
        return priklad("scitanie", a + b <= 10 ? 1 : 2, a + b, text, text,
          "Začni od väčšieho čísla a pripočítavaj po jednej.",
          "Start from the bigger number and count on in ones.");
      }
      if (x < 0.75) {
        const a = cele(5, 20);
        const b = cele(1, a);
        const text = a + " − " + b + " = ?";
        return priklad("odcitanie", a <= 10 ? 1 : 2, a - b, text, text,
          "Od väčšieho čísla odober menšie. Môžeš si pomôcť prstami.",
          "Take the smaller number away from the bigger one. You can use your fingers.");
      }
      if (x < 0.9) {
        const a = cele(1, 9);
        const c = cele(a + 1, 20);
        const text = a + " + ? = " + c;
        return priklad("doplnenie", 3, c - a, text, text,
          `Koľko chýba od ${a} do ${c}?`, `How many more do you need to get from ${a} to ${c}?`);
      }
      const a = cele(0, 20);
      const druhe = cele(0, 19);
      const b = druhe >= a ? druhe + 1 : druhe;
      return priklad("porovnanie", 1, Math.max(a, b),
        `Ktoré číslo je väčšie, ${a} alebo ${b}?`, `Which number is bigger, ${a} or ${b}?`,
        "Väčšie číslo je na číselnej osi viac vpravo.", "The bigger number is further to the right on a number line.");
    }
    case 2: {
      if (x < 0.4) {
        const a = cele(10, 79);
        const b = cele(2, 99 - a);
        const text = a + " + " + b + " = ?";
        return priklad("scitanie", 2, a + b, text, text,
          "Sčítaj najprv desiatky, potom jednotky.", "Add the tens first, then the ones.");
      }
      if (x < 0.8) {
        const a = cele(20, 99);
        const b = cele(2, a - 1);
        const text = a + " − " + b + " = ?";
        return priklad("odcitanie", 2, a - b, text, text,
          "Odčítaj najprv desiatky, potom jednotky.", "Subtract the tens first, then the ones.");
      }
      if (x < 0.9) {
        const a = cele(1, 8) * 10;
        const b = cele(1, 10 - a / 10) * 10;
        const text = a + " + " + b + " = ?";
        return priklad("scitanie-desiatok", 1, a + b, text, text,
          "Sčítaj desiatky. Napríklad 3 desiatky + 4 desiatky = 7 desiatok.",
          "Add the tens. For example, 3 tens + 4 tens = 7 tens.");
      }
      const n = cele(11, 99);
      return priklad("desiatky", 1, Math.floor(n / 10),
        `Koľko desiatok má číslo ${n}?`, `How many tens are there in ${n}?`,
        "Počet desiatok udáva prvá číslica dvojciferného čísla.",
        "The first digit of a two-digit number tells you how many tens it has.");
    }
    case 3: {
      const a = cele(2, 10);
      const b = cele(2, 10);
      if (x < 0.55) {
        return priklad("nasobenie", 1, a * b, `${a} · ${b} = ?`, `${a} × ${b} = ?`,
          `Malá násobilka: ${a} · ${b} je ${b}-krát ${a}.`, `${a} × ${b} is ${b} lots of ${a}.`);
      }
      if (x < 0.85) {
        return priklad("delenie", 2, b, `${a * b} : ${a} = ?`, `${a * b} ÷ ${a} = ?`,
          `Ktoré číslo vynásobené číslom ${a} dá ${a * b}?`, `Which number multiplied by ${a} makes ${a * b}?`);
      }
      return priklad("doplnenie", 3, b, `${a} · ? = ${a * b}`, `${a} × ? = ${a * b}`,
        `Pomôž si delením: ${a * b} : ${a}.`, `Use division to help: ${a * b} ÷ ${a}.`);
    }
    case 4: {
      if (x < 0.3) {
        const a = cele(2, 9);
        const b = cele(11, 30);
        return priklad("delenie", 2, b, `${a * b} : ${a} = ?`, `${a * b} ÷ ${a} = ?`,
          "Rozdeľ číslo na časti, ktoré sa dobre delia.", "Split the number into parts that are easy to divide.");
      }
      if (x < 0.55) {
        const n = cele(12, 49);
        const a = n % 10 === 0 ? n + 1 : n;
        const b = cele(2, 9);
        return priklad("nasobenie", 2, a * b, `${a} · ${b} = ?`, `${a} × ${b} = ?`,
          `Rozlož: ${Math.floor(a / 10) * 10} · ${b} + ${a % 10} · ${b}.`,
          `Split it up: ${Math.floor(a / 10) * 10} × ${b} + ${a % 10} × ${b}.`);
      }
      if (x < 0.8) {
        const a = cele(120, 700);
        const b = cele(50, 299);
        const text = a + " + " + b + " = ?";
        return priklad("scitanie", 1, a + b, text, text,
          "Sčítaj stovky, desiatky a jednotky zvlášť.", "Add the hundreds, tens and ones separately.");
      }
      const a = cele(2, 9);
      const b = cele(2, 9);
      const c = cele(2, 9);
      return priklad("poradie-operacii", 3, a + b * c, `${a} + ${b} · ${c} = ?`, `${a} + ${b} × ${c} = ?`,
        "Najprv násobíme, potom sčítame.", "Multiply first, then add.");
    }
    case 5: {
      if (x < 0.3) {
        const a = cele(11, 89);
        const b = cele(11, 89);
        const plus = nahodne() < 0.5;
        const prve = plus ? a : Math.max(a, b);
        const druhe = plus ? b : Math.min(a, b);
        const text = `${prve / 10} ${plus ? "+" : "−"} ${druhe / 10} = ?`;
        return priklad("desatinne", 2, (plus ? prve + druhe : prve - druhe) / 10,
          text.replaceAll(".", ","), text,
          "Desatinné čiarky napíš pod seba a počítaj ako s celými číslami.",
          "Line up the decimal points and calculate as you would with whole numbers.");
      }
      if (x < 0.55) {
        const d = cele(4, 12);
        const a = cele(1, d - 2);
        const b = cele(1, d - 1 - a);
        const text = `${a}/${d} + ${b}/${d} = ?`;
        return priklad("zlomky", 3, `${a + b}/${d}`, text, text,
          "Pri rovnakých menovateľoch sčítame iba čitatele.",
          "When the denominators are the same, add the numerators.");
      }
      if (x < 0.75) {
        const n = cele(101, 989);
        return priklad("zaokruhlovanie", 1, Math.round(n / 10) * 10,
          `Zaokrúhli ${n} na desiatky.`, `Round ${n} to the nearest 10.`,
          "Jednotky 0–4 zaokrúhľujeme nadol a 5–9 nahor.", "Round down for a ones digit of 0–4 and up for 5–9.");
      }
      const a = cele(3, 15);
      const b = cele(2, 12);
      return priklad("obvod", 2, 2 * (a + b),
        `Obdĺžnik má strany ${a} cm a ${b} cm. Aký má obvod v cm?`,
        `A rectangle has sides of ${a} cm and ${b} cm. What is its perimeter in cm?`,
        "Obvod obdĺžnika je 2 · (a + b).", "The perimeter of a rectangle is 2 × (a + b).");
    }
    case 6: {
      if (x < 0.3) {
        const p = vyber([10, 20, 25, 50]);
        const n = cele(1, 20) * (100 / p);
        return priklad("percenta", 2, n * p / 100,
          `Koľko je ${p} % z ${n}?`, `What is ${p}% of ${n}?`,
          `Vydeľ ${n} číslom ${100 / p}.`, `Divide ${n} by ${100 / p}.`);
      }
      if (x < 0.55) {
        const d = vyber([2, 3, 4, 5]);
        const k = cele(1, d - 1);
        const n = d * cele(2, 10);
        return priklad("cast", 2, n / d * k,
          `Koľko je ${k}/${d} z ${n}?`, `What is ${k}/${d} of ${n}?`,
          `Najprv vydeľ ${n} číslom ${d}, potom vynásob číslom ${k}.`,
          `First divide ${n} by ${d}, then multiply by ${k}.`);
      }
      if (x < 0.75) {
        const a = cele(11, 999);
        const m = vyber([10, 100]);
        return priklad("nasobenie-desatinne", 2, a * m / 100,
          `${String(a / 100).replace(".", ",")} · ${m} = ?`, `${a / 100} × ${m} = ?`,
          "Pri násobení desiatimi posuň desatinnú čiarku o jedno miesto doprava, pri stovke o dve.",
          "Multiplying by 10 moves the decimal point one place to the right, and by 100 moves it two.");
      }
      const a = cele(3, 15);
      const b = cele(2, 12);
      return priklad("obsah", 1, a * b,
        `Obdĺžnik má strany ${a} m a ${b} m. Aký má obsah v m²?`,
        `A rectangle has sides of ${a} m and ${b} m. What is its area in m²?`,
        "Obsah obdĺžnika je a · b.", "The area of a rectangle is a × b.");
    }
    case 7: {
      if (x < 0.25) {
        const p = vyber([5, 10, 15, 20, 30, 40, 60, 75]);
        const n = cele(1, 15) * 20;
        return priklad("percenta", 2, n * p / 100,
          `Koľko je ${p} % z ${n}?`, `What is ${p}% of ${n}?`,
          "Vydeľ číslom 100 a vynásob počtom percent.", "Divide by 100 and multiply by the percentage.");
      }
      if (x < 0.5) {
        const y = cele(2, 30);
        const a = cele(2, 40);
        return priklad("rovnice-scitanie", 1, y,
          `x + ${a} = ${y + a}. Koľko je x?`, `x + ${a} = ${y + a}. What is x?`,
          `Od oboch strán odčítaj ${a}.`, `Subtract ${a} from both sides.`);
      }
      if (x < 0.7) {
        const y = cele(2, 12);
        const a = cele(2, 9);
        return priklad("rovnice-nasobenie", 2, y,
          `${a} · x = ${a * y}. Koľko je x?`, `${a}x = ${a * y}. What is x?`,
          `Obe strany vydeľ číslom ${a}.`, `Divide both sides by ${a}.`);
      }
      const a = cele(-15, 15);
      const b = cele(-15, -1);
      const text = `${lokalneCislo(a)} + (${lokalneCislo(b)}) = ?`;
      return priklad("zaporne", 2, a + b, text, text,
        "Pripočítanie záporného čísla je rovnaké ako odčítanie príslušného kladného čísla.",
        "Adding a negative number is the same as subtracting the corresponding positive number.");
    }
    case 8: {
      if (x < 0.4) {
        const y = cele(1, 12);
        const a = cele(2, 9);
        const b = cele(1, 20);
        return priklad("rovnice", 3, y,
          `${a}x + ${b} = ${a * y + b}. Koľko je x?`, `${a}x + ${b} = ${a * y + b}. What is x?`,
          `Najprv odčítaj ${b}, potom vydeľ číslom ${a}.`, `First subtract ${b}, then divide by ${a}.`);
      }
      if (x < 0.8) {
        const n = cele(2, 15);
        if (x < 0.6) {
          return priklad("mocnina", 1, n * n, `${n}² = ?`, `${n}² = ?`, `${n}² = ${n} · ${n}.`, `${n}² = ${n} × ${n}.`);
        }
        return priklad("odmocnina", 1, n, `√${n * n} = ?`, `√${n * n} = ?`,
          "Ktoré číslo vynásobené samo sebou dá výsledok pod odmocninou?",
          "Which number multiplied by itself gives the number under the square root?");
      }
      const k = cele(2, 10);
      const n = String(k).replace(/\d/g, (cislica) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(cislica)]);
      return priklad("exponent", 2, 2 ** k, `2${n} = ?`, `2${n} = ?`,
        "Exponent určuje, koľko dvojok sa vynásobí.", "The exponent tells you how many 2s to multiply together.");
    }
    case 9: {
      const clen = (n) => n < 0 ? "− " + -n : "+ " + n;
      if (x < 0.35) {
        const y = cele(-6, 10);
        const a = cele(3, 9);
        const b = cele(-12, 12);
        const c = cele(1, a - 1);
        const d = a * y + b - c * y;
        const text = `${a}x ${clen(b)} = ${c}x ${clen(d)}.`;
        return priklad("rovnice", 3, y, text + " Koľko je x?", text + " What is x?",
          "Členy s neznámou daj na jednu stranu rovnice a čísla na druhú.",
          "Put the terms with the unknown on one side of the equation and the numbers on the other.");
      }
      if (x < 0.55) {
        const [p, q, h] = vyber([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]]);
        return priklad("prepona", 1, h,
          `Pravouhlý trojuholník má odvesny ${p} cm a ${q} cm. Aká dlhá je prepona v cm?`,
          `A right triangle has legs of ${p} cm and ${q} cm. How long is the hypotenuse in cm?`,
          "Pytagorova veta: c² = a² + b².", "Use Pythagoras’ theorem: c² = a² + b².");
      }
      if (x < 0.75) {
        const k = vyber([-5, -4, -3, -2, 2, 3, 4, 5]);
        const q = cele(-9, 9) || 3;
        const y = cele(-5, 5);
        return priklad("funkcie", 3, k * y + q,
          `Funkcia y = ${lokalneCislo(k)}x ${clen(q)}. Koľko je y pre x = ${lokalneCislo(y)}?`,
          `For y = ${lokalneCislo(k)}x ${clen(q)}, what is y when x = ${lokalneCislo(y)}?`,
          "Dosaď x do predpisu a vypočítaj.", "Substitute x into the function and calculate.");
      }
      const p = cele(1, 30) * 10;
      const d = vyber([10, 20, 25, 50]);
      return priklad("zlava", 2, p * (100 - d) / 100,
        `Hra stojí ${p} €. Zľava je ${d} %. Koľko stojí po zľave v €?`,
        `A game costs €${p}. It has a ${d}% discount. How much does it cost in euros after the discount?`,
        `Po zľave zaplatíš ${100 - d} % pôvodnej ceny.`, `After the discount you pay ${100 - d}% of the original price.`);
    }
    default:
      throw new RangeError("Neplatná úroveň matematiky.");
  }
}

// Rovnaké semienko dáva tie isté operandy a obidva jazyky sú uložené so zadaním.
function nahodaSoSemienkom(semienko) {
  let stav = semienko >>> 0;
  return () => {
    stav = (stav + 0x6D2B79F5) >>> 0;
    let hodnota = Math.imul(stav ^ (stav >>> 15), stav | 1);
    hodnota ^= hodnota + Math.imul(hodnota ^ (hodnota >>> 7), hodnota | 61);
    return ((hodnota ^ (hodnota >>> 14)) >>> 0) / 4294967296;
  };
}

const sadyMatematickychOtazok = new Map();

function matematickeOtazky(uroven) {
  if (!sadyMatematickychOtazok.has(uroven)) {
    const jedinecne = new Map();
    for (let semienko = 1; semienko <= 256; semienko += 1) {
      const otazka = vytvoritMatematickyPriklad(uroven, nahodaSoSemienkom(semienko));
      jedinecne.set(otazka.idOtazky, otazka);
    }
    sadyMatematickychOtazok.set(uroven, [...jedinecne.values()]);
  }
  return sadyMatematickychOtazok.get(uroven);
}
