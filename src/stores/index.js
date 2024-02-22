
state: {
    token: null,
    user: null,
  },
  
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  
  // actions
  actions: {
    async login({ commit }, credentials) {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      commit('setToken', data.token);
      commit('setUser', data.user);
    },
  },
  
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
  },
  