import { ref } from 'vue';

export const authStore = {
  token: ref(null),
  setToken(token) {
    authStore.token.value = token;
  },
  clearToken() {
    authStore.token.value = null;
  },
};
