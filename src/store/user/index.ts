import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => {
    return {
      name: "yft",
    };
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    increment() {},
  },
});
export default useUserStore;
