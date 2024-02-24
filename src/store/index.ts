import { createPinia } from "pinia";
const pinia = createPinia();
export default pinia;

import useUserStore from "./user";
import useConfigStore from "./config";
export { useUserStore, useConfigStore };
