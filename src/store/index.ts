import { createStore } from 'vuex'
import { authModule } from './modules/auth'
import { projectModule } from './modules/project'

const store = createStore({
  modules: {
    auth: authModule,
    project: projectModule
  }
})

export default store
