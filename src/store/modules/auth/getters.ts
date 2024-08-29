import type { AuthState } from './state'
export const getters = {
  getEmail: (state: AuthState) => state.email,
  getPassword: (state: AuthState) => state.password,
  getValidLoginEmail: (state: AuthState) => state.validLoginEmail,
  getValidLoginPassword: (state: AuthState) => state.validLoginPassword,
  getIsLoggedIn: (state: AuthState) => state.isLoggedIn
}
