<template>
    <div>
        <app-header></app-header>
        <b-container>
            <b-row>
                <h2 class="text-uppercase font-weight-bold p-3 pt-4"><span>We</span>bsite</h2>
                <button-back class="ml-auto h-50 my-auto mr-4"></button-back>
            </b-row>
            <b-row v-for="i in 5" :key="i">
                <p class="p-3 text-justify" :v-text="getParagraph(i)">
                    {{getParagraph(i)}}
                </p>
            </b-row>
            <div id="empty"></div>
        </b-container>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'
import { mapGetters } from 'vuex'
export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    buttonBack: BackButton
  },
  computed: {
    ...mapGetters([
      'getParagraph'
    ])
  }
}
</script>

<style lang="sass" scoped>
    span
        border-bottom: 0.5rem solid
        padding-bottom: 1rem
    #empty
        height: 1000px
</style>
