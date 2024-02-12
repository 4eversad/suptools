export type ConfigStateT = {
  isCollapse: boolean | string;
};
export type ConfigActionT = {
  toggleSidebar: () => void;
  initState: () => void;
};
