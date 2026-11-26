"use strict";

// Neurčené veci používajú pracovné názvy miest až do prijatia menného katalógu.
const izbyDomuL1 = [
  {
    id: "obyvacka", pocet: 9, sk: "Vec do obývačky", en: "Living room item",
    pomenovane: [
      { id: "televizor", sk: "Televízor", en: "TV" },
      { id: "hracia-konzola", sk: "Hracia konzola", en: "Games console" },
      { id: "sachy", sk: "Šachy", en: "Chess set" },
    ],
  },
  { id: "detska", pocet: 7, sk: "Vec do detskej izby", en: "Children’s room item" },
  { id: "spalna", pocet: 7, sk: "Vec do spálne", en: "Bedroom item" },
  { id: "predsien", pocet: 7, sk: "Vec do predsiene", en: "Hallway item" },
  { id: "kuchyna", pocet: 7, sk: "Vec do kuchyne", en: "Kitchen item" },
  { id: "zahrada", pocet: 7, sk: "Vec do záhrady", en: "Garden item" },
];

const katalogVeciL1 = izbyDomuL1.flatMap(({ id: izba, pocet, sk, en, pomenovane = [] }) =>
  Array.from({ length: pocet }, (_, index) => ({
    izba,
    ...(pomenovane[index] ?? { id: izba + "-" + String(index + 1).padStart(2, "0"), sk, en }),
  })));
