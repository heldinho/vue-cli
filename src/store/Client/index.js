import state from './state'
import mutations from './mutation'
import actions from './action'

const store = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default store
