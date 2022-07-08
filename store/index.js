export const state = () => ({
  email: '',
  name: '',
  isLogon: false
})

export const mutations = {
  setLogin(state, email, name) {
    state.email = email
    state.name = name
    state.isLogon = true
  },
  setLogout(state) {
    state.email = ""
    state.name = ""
    state.isLogon = false
  }
}
