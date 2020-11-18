<template>
  <div>
      <app-header></app-header>
      <b-container>
          <b-row id="row-content1">
            <b-col id="welcome" class="col-lg-3 col-md-4 col-sm-5 col-10 mx-auto offset-sm-0 mt-5 ml-5 mt">
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
            <b-col id="UI_UX" class="col-lg-8 col-md-7 col-sm-6 col-10 mx-auto offset-sm-1 offset-lg-1 offset-md-1 mt-5 mt p-0">
              <img :src="getAsset('UI/UX Design')" width="100%" alt="UI/UX Design">
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
          <b-row class="ml-sm">
            <h2 class="text-uppercase font-weight-bold pl-5 pt-5 pl-sm">Products</h2>
          </b-row>
          <b-row class="ml-sm">
            <h6 class="text-uppercase font-weight-bold pl-5 pl-sm">Offers today</h6>
          </b-row>
          <b-row id="row-content2" class="h-100">
            <b-col class="col-lg-6 col-md-6 col-sm-12 col-10 mx-auto my-auto pr-0 pl-0">
              <div class="text-center">
                <div v-if="!sendMeteoData.isProcessedLoading" class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <img v-if="!sendMeteoData.isError && sendMeteoData.isProcessedLoading" class="pl-5 pl-sm" :src="getAsset('offer1L')" width="95%" alt="Please wait...">
              <h5 v-if="sendMeteoData.isError && sendMeteoData.isProcessedLoading" class="text-center">
                Unfortunately, resource could not be loaded. <br>
                <i class="text-danger">{{sendMeteoData.errorMessage}}.</i> <br>
                Please, try again later.
              </h5>
            </b-col>
            <b-col class="col-lg-6 col-md-5 col-sm-12 col-10 mx-auto my-auto mt pr-0 pl-0 pl-sm">
                <img class="offers" :src="getAsset('offer1R')" width="84%" alt="offer1">
                <div class="half-transparent mt-n6 pl-4 pb-2 pt-3">
                  <h3 class="text-uppercase align-middle font-weight-bold">The best coffee</h3>
                </div>
                <img class="mt-4-5 offers" :src="getAsset('offer2R')" width="84%" alt="offer2">
                <div class="half-transparent mt-n6 pl-4 pb-2 pt-3">
                  <h3 class="text-uppercase align-middle font-weight-bold">Top 100 books</h3>
                </div>
            </b-col>
          </b-row>
           <b-row class="ml-sm">
            <h2 class="text-uppercase font-weight-bold pl-5 pt-5 pb-5 pl-sm"><span>Co</span>ntact</h2>
          </b-row>
          <b-row id="row-content3"  class="pb-5">
            <b-col class="col-lg-7 col-md-7 col-sm-12 col-10 offset-sm-0 offset-1 pr-0 pl-0">
                <p class="pl-5 pt-3 pl-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p class="pl-5 pl-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p class="pl-5 pl-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </b-col>
            <b-col class="col-lg-3 offset-lg-1 col-md-3 offset-md-1 col-sm-12 col-10 offset-sm-0 offset-1 pr-0 pl-0">
              <b-form class="ml-n5 ml" @submit="onSubmit" v-if="show">
                <b-form-group id="input-group-1" label="Name" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.name"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Email" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="test@test.com"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Message" label-for="input-3">
                  <b-form-textarea
                    id="input-3"
                    v-model="form.text"
                    rows="10"
                  ></b-form-textarea>
                </b-form-group>

                <b-button squared class="block pl-4 pr-4 text-uppercase font-weight-bold" type="submit" variant="outline-primary">Learn more</b-button>
              </b-form>
            </b-col>
          </b-row>
      </b-container>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        text: ''
      },
      show: true,

      info: null
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  computed: {
    ...mapGetters([
      'getAsset',
      'sendMeteoData'
    ]),
    ...mapActions([
      'getRoute',
      'getMeteoData'
    ])
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      this.form.email = ''
      this.form.name = ''
      this.form.text = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  beforeMount () {
    const path = this.$route.fullPath
    this.$store.dispatch('getRoute', path)
    this.$store.dispatch('getMeteoData')
  }
}
</script>

<style lang="sass" scoped>
  $head_color: #448ccb
  $grey_color: #d7d7d7

  #welcome
    background-color: $head_color
    button
      border-width: 0.2rem
  span
    border-bottom: 0.5rem solid
    padding-bottom: 1rem
  #UI_UX
    background-color: $grey_color
  p
    font-size: 0.9rem
  .mt-n6
    margin-top: -4rem!important
  .mt-4-5
    margin-top: 2rem!important
  #row-content2
    .half-transparent
      background: rgba(215, 215, 215, 0.5)
      position: absolute
      width: 84%
      z-index: 2
    img
      z-index: 1
  .form-control
    border-radius: 0
    border-width: 3px
  input, textarea
    &:focus
      border-color: black
      box-shadow: none
      outline: 0 none
  form
    button
      color: $head_color
      border: 3px solid $head_color
      &:hover, &:focus, &:active
        color: white
        background-color: $head_color
        border-color: $head_color
  .spinner-border
    width: 3rem
    height: 3rem

@media screen and (max-width: 992px) and (min-width: 768px)
  .offers
    width: 92%
  .half-transparent
    width: 92%!important
    margin-top: -3.25rem!important
    h3
      font-size: 1rem!important

@media screen and (max-width: 768px) and (min-width: 576px)
  .mt
    margin-top: 2rem!important
  .pl-sm
    padding-left: 1rem!important
  img
    width: 100%
  .half-transparent
    width: 97%!important
  .ml-n5
    margin-left: 0.75rem!important

@media screen and (max-width: 576px)
    .ml-sm
      padding-left: 3rem
    .mt
      margin-top: 2rem!important
    .mb
      margin-bottom: 1rem!important
    .pl-4-5
      padding-left: 0!important
      width: 100%
    .pl-5
      padding-left: 0!important
    .ml
      margin-left: 0!important
    img
      width: 100%
    .mt0
      margin-top: 0!important
    .half-transparent
      width: 100%!important
    .block
        display: block!important
        width: 100%!important
    h5
      font-size: 1rem
</style>
