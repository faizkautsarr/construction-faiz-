type MutationTypes = 'setEmail' | 'setPassword' | 'setLoggedIn'

type MutationPayloads = {
  setEmail: string
  setPassword: string
  setLoggedIn: boolean
}

type CommitFunction = <T extends MutationTypes>(mutation: T, payload: MutationPayloads[T]) => void

export const actions = {
  login(
    { commit }: { commit: CommitFunction },
    { email, password }: { email: string; password: string }
  ) {
    commit('setEmail', email)
    commit('setPassword', password)
    commit('setLoggedIn', true)
  },
  logout({ commit }: { commit: CommitFunction }) {
    commit('setEmail', '')
    commit('setPassword', '')
    commit('setLoggedIn', false)
  }
}
