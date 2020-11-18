const state = {
  routeHistory: []
}

const mutations = {
  addRoute: (state, payload) => {
    if (state.routeHistory[state.routeHistory.length - 1] !== payload) {
      state.routeHistory.push(payload)
    }
    console.log('from mutation ' + state.routeHistory)
  },
  removeRoute: state => {
    state.routeHistory.pop()
    console.log('from mutation delete ' + state.routeHistory)
  }
}

const actions = {
  getRoute: (context, path) => {
    context.commit('addRoute', path)
  },
  deleteRoute: context => {
    context.commit('removeRoute')
  }
}

const getters = {
  getRouteHistory: state => {
    return state.routeHistory
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
