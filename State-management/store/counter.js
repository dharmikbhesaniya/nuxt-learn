import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(10);
  const inc = () => {
    count.value++;
  };
  return { count, inc };
});
