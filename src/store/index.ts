import { defineStore } from "pinia";

export interface RootState {
  loggedIn: boolean;
}

export const useRootStore = defineStore(`rootStore`, {
  state: (): RootState => {
    return {
      loggedIn: false,
    };
  },
  persist: true,
  actions: {},
  getters: {},
});
