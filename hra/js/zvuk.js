"use strict";

function pripravitSkusobnyZvuk(prvok) {
  prvok.src = udajeUkazky.zvuk;

  return {
    prehrat() {
      prvok.currentTime = 0;
      prvok.play().catch(() => {});
    },
    zastavit() {
      prvok.pause();
      prvok.currentTime = 0;
    },
  };
}
