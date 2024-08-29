import type { AuthState } from './state'

export const mutations = {
  setEmail(state: AuthState, payload: string) {
    state.email = payload
  },
  setPassword(state: AuthState, payload: string) {
    state.password = payload
  },
  setLoggedIn(state: AuthState, payload: boolean) {
    state.isLoggedIn = payload
  }
}
