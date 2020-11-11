import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    assets: [
      {
        id: 'logo',
        image: require('../assets/DEMOSITE.svg')
      },
      {
        id: 'UI/UX Design',
        image: require('../assets/alexandra-gorn-VBo24-Ys6gQ-unsplash 1 1.jpg')
      }
    ]
  },
  getters: {
    getAsset: state => id => {
      const asset = state.assets.find(assets => assets.id === id)
      return asset.image
    }
  },
  mutations: {
  },
  actions: {
  }
})
