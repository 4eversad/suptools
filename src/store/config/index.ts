import { defineStore } from "pinia";
import type { ConfigStateT, ConfigActionT } from "./types";

const useConfigStore = defineStore<string, ConfigStateT, any, ConfigActionT>(
  "config",
  {
    state: () => {
      return {
        isCollapse: false,
      };
    },
    actions: {
      toggleSidebar() {
        this.isCollapse = !this.isCollapse;
      },
    },
  }
);

export default useConfigStore;
