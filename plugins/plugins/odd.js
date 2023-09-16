export default defineNuxtPlugin((nuxtApp) => {
  let oddArr = [];
  return {
    provide: {
      findoddnum: (num) => {
        oddArr = [];
        for (let i = 1; i <= num; i++) {
          if (i % 2 !== 0) {
            oddArr.push(i);
          }
        }
        return oddArr;
      },
    },
  };
});
