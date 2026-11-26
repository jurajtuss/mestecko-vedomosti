"use strict";

function vyhodnotitSkusobnuOdpoved(odpoved, spravnaOdpoved = "5") {
  const cislo = odpoved.trim();
  return /^\d+$/.test(cislo) && Number(cislo) === Number(spravnaOdpoved);
}
