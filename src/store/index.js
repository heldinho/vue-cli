import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

export default createStore({
  state,
  mutations,
  actions,
  getters,
  plugins: [vuexLocalStorage.plugin],
  modules
})
