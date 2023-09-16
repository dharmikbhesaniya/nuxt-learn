export default defineNuxtPlugin((nuxtApp) => {
  let evenArr = [];
  nuxtApp.findevenum = (maxnum) => {
    evenArr = [];
    for (let i = 1; i <= maxnum; i++) {
      if (i % 2 === 0) {
        evenArr.push(i);
      }
    }
    return evenArr;
  };
});
