import { createStore } from 'vuex'

const store = createStore({
  state: {
    username: '',
    password: '',
    isLoggedIn: false
  },
  mutations: {
    setUsername(state, payload: string) {
      state.username = payload
    },
    setPassword(state, payload: string) {
      state.password = payload
    },
    setLoggedIn(state, payload: boolean) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    login({ commit }, { username, password }: { username: string; password: string }) {
      console.log('Logging in...')
      commit('setUsername', username)
      commit('setPassword', password)
      commit('setLoggedIn', true)
    },
    logout({ commit }) {
      commit('setUsername', '')
      commit('setPassword', '')
      commit('setLoggedIn', false)
    }
  },
  getters: {
    getUsername: (state) => state.username,
    getPassword: (state) => state.password,
    isLoggedIn: (state) => state.isLoggedIn
  }
})

export default store
