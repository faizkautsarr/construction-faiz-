export interface AuthState {
  email: string
  password: string
  isLoggedIn: boolean
  validLoginEmail: string
  validLoginPassword: string
}

export const state: AuthState = {
  email: '',
  password: '',
  isLoggedIn: false,
  validLoginEmail: 'a@a.com',
  validLoginPassword: '123'
}
