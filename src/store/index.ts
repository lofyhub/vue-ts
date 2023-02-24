import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { session } from "@/types";

export const useRootStore = defineStore(`rootStore`, () => {
  const session = ref<session>({
    userName: "vue-ts",
    id: "1234",
    email: "email@test.com",
    isSubscribed: false,
  });

  const isSubscribed = computed(() => session.value.isSubscribed);

  function getName(): string {
    return session.value.userName;
  }

  return { session, getName, isSubscribed };
});
