export const actions = {
  login(
    { commit }: { commit: (mutation: string, value: any) => void },
    { email, password }: { email: string; password: string }
  ) {
    console.log('Logging in...')
    commit('setEmail', email)
    commit('setPassword', password)
    commit('setLoggedIn', true)
  },
  logout({ commit }: { commit: (mutation: string, value: any) => void }) {
    commit('setEmail', '')
    commit('setPassword', '')
    commit('setLoggedIn', false)
  }
}
