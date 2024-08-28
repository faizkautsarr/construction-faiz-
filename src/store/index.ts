import { createStore } from 'vuex'

const store = createStore({
  state: {
    email: '',
    password: '',
    isLoggedIn: false,
    validLogiEmail: 'a@a.com',
    validLoginPassword: '123'
  },
  mutations: {
    setEmail(state, payload: string) {
      state.email = payload
    },
    setPassword(state, payload: string) {
      state.password = payload
    },
    setLoggedIn(state, payload: boolean) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    login({ commit }, { email, password }: { email: string; password: string }) {
      console.log('Logging in...')
      commit('setEmail', email)
      commit('setPassword', password)
      commit('setLoggedIn', true)
    },
    logout({ commit }) {
      commit('setEmail', '')
      commit('setPassword', '')
      commit('setLoggedIn', false)
    }
  },
  getters: {
    getEmail: (state) => state.email,
    getPassword: (state) => state.password,
    isLoggedIn: (state) => state.isLoggedIn
  }
})

export default store
