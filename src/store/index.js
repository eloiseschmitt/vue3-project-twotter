import { createStore } from 'vuex'
import { UserModule} from './User'

export default createStore({
  state: {
  },

  // Functions that effect the state.
  mutations: {
  },

  // Functions that you call throughout your application that call mutations.
  actions: {
  },

  modules: {
    User: UserModule
  }
})
