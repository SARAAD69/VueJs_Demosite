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
      },
      {
        id: 'offer1L',
        image: require('../assets/umbrella.svg')
      },
      {
        id: 'offer1R',
        image: require('../assets/bruno-cervera-YH7mGnigHRs-unsplash_1_1.jpg')
      },
      {
        id: 'offer2R',
        image: require('../assets/vandan-patel-vfiuGpL9fiU-unsplash_1_1.jpg')
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
