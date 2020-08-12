const actions = {
  actionDrawerClient: ({ commit }, payload) => {
    commit('SET_DRAWER_CLIENT', payload)
  },
  actionDataClient: ({ commit }, payload) => {
    commit('SET_DATA_CLIENT', payload)
  }
}

export default actions
