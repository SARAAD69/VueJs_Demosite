import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import staticPage from './modules/staticPageModule'
import route from './modules/routeModule'

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
        image: null
      },
      {
        id: 'offer1R',
        image: require('../assets/bruno-cervera-YH7mGnigHRs-unsplash_1_1.jpg')
      },
      {
        id: 'offer2R',
        image: require('../assets/vandan-patel-vfiuGpL9fiU-unsplash_1_1.jpg')
      }
    ],
    meteoAPIData: {
      forecastTimeUtc: null,
      conditionCode: null,
      isProcessedLoading: false,
      isError: false,
      errorMessage: ''
    }
  },
  mutations: {
    receiveMeteoData: state => {
      axios
        .get('https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/kaunas/forecasts/long-term')
        .then(response => {
          const currentDateWithFormat = new Date().toJSON().replace(/-/g, '-').replace('T', ' ').slice(0, 13)
          const apiDate = response.data.forecastTimestamps.map(data => data.forecastTimeUtc.slice(0, 13))
          const apiCondition = response.data.forecastTimestamps.map(data => data.conditionCode)
          const assetToChange = state.assets.find(assets => assets.id === 'offer1L')
          for (const key in apiDate) {
            if (apiDate[key] === currentDateWithFormat) {
              state.meteoAPIData.forecastTimeUtc = apiDate[key]
              state.meteoAPIData.conditionCode = apiCondition[key]
            }
          }
          if (['overcast', 'light-rain', 'moderate-rain', 'heavy-rain', 'fog'].indexOf(state.meteoAPIData.conditionCode) > -1) {
            assetToChange.image = require('../assets/umbrella.svg')
          } else if (['clear', 'isolated-clouds', 'scattered-clouds', 'na'].indexOf(state.meteoAPIData.conditionCode) > -1) {
            assetToChange.image = require('../assets/sunglasses.svg')
          } else assetToChange.image = require('../assets/snowflake.svg')
          state.meteoAPIData.isProcessedLoading = true
        })
        .catch(error => {
          console.error(error)
          state.meteoAPIData.isError = true
          state.meteoAPIData.isProcessedLoading = true
          state.meteoAPIData.errorMessage = error.message
        })
    }
  },
  actions: {
    getMeteoData: context => {
      context.commit('receiveMeteoData')
    }
  },
  getters: {
    getAsset: state => id => {
      const asset = state.assets.find(assets => assets.id === id)
      return asset.image
    },
    sendMeteoData: state => {
      return state.meteoAPIData
    }
  },
  modules: {
    staticPage,
    route
  }
})
