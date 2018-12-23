const state = () => ({
  list: ['111', '222']
})

const mutations = {
  add(state, text) {
    state.list.push(text)
  }
}

const actions = {
  add: ({commit, text}) => {
    commit('add', text)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
