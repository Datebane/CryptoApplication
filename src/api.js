//Емулюю асинхронні запити, так як ліміт запитів обмежений, при потребі переробити на звичайний fetch
import { cryptoAssets, cryptoData } from "./data";

export function fakeFetchCrypto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 1);
  });
}

export function fetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 1);
  });
}
