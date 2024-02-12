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
        localStorage.setItem("isCollapse", JSON.stringify(this.isCollapse));
      },
      initState() {
        const localStorageCollapse = JSON.parse(
          localStorage.getItem("isCollapse")
        );
        if (localStorageCollapse) {
          this.isCollapse = localStorageCollapse;
        } else {
          this.isCollapse = false;
          localStorage.setItem("isCollapse", JSON.stringify(this.isCollapse));
        }
      },
    },
  }
);

export default useConfigStore;
