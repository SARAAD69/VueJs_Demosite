<template>
  <div>
      <app-header></app-header>
      <b-container>
          <b-row class="row-content">
            <b-col id="welcome" class="col-lg-3 col-md-4 col-sm-5 col-10 mx-auto offset-sm-0 mt-5 ml-5 ml mt">
              <h2 class="text-uppercase font-weight-bold text-white p-3 pt-4"><span>We</span>lcome</h2>
              <p class="text-white p-3">
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
                nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
              <b-button squared class="float-right mr-2 mt-5 mt mb-2 mb pl-4 pr-4 text-uppercase font-weight-bold" variant="outline-light">Learn more</b-button>
            </b-col>
            <b-col id="UI_UX" class="col-lg-7 col-md-7 col-sm-6 col-10 mx-auto offset-sm-1 offset-lg-1 offset-md-1 mt-5 mt p-0">
              <img class="" :src="getAsset('UI/UX Design')" width="100%" alt="UI/UX Design">
                <h3 class="text-uppercase font-weight-bold ml-5 pt-4">UI/UX Design</h3>
                <p class="ml-5 mr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p class="ml-5 mr-5 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import Header from '../components/Header'
import { mapGetters } from 'vuex'
export default {
  components: {
    appHeader: Header
  },
  computed: {
    ...mapGetters([
      'getAsset'
    ])
  }
}
</script>

<style lang="sass" scoped>
  $head_color: #448ccb
  #welcome
    background-color: $head_color
    button
      border-width: 0.2rem
  span
    border-bottom: 0.5rem solid
    padding-bottom: 1rem
  #UI_UX
    background-color: #d7d7d7
  p
      font-size: 0.8rem

@media screen and (max-width: 992px) and (min-width: 576px)
    .ml
      margin-left: 0!important
@media screen and (max-width: 576px)
    .mt
      margin-top: 2rem!important
    .mb
      margin-bottom: 1rem!important
</style>
