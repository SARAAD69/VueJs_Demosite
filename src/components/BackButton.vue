<template>
    <b-button squared @click="goBack()" class="text-uppercase font-weight-bold pr-4 pl-4" variant="outline-primary">← Back</b-button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapActions([
      'getRoute',
      'deleteRoute'
    ]),
    ...mapGetters([
      'getRouteHistory'
    ])
  },
  beforeMount () {
    const path = this.$route.fullPath
    this.$store.dispatch('getRoute', path)
  },
  methods: {
    goBack () {
      const index = this.getRouteHistory.length - 2
      if (index >= 0) {
        this.$router.push({ path: this.getRouteHistory[index] })
        this.$store.dispatch('deleteRoute')
      } else {
        this.$router.push({ name: 'Home' })
        this.$store.dispatch('deleteRoute')
      }
    }
  }
}
</script>

<style lang="sass" scoped>
$head_color: #448ccb
button
      color: $head_color
      border: 3px solid $head_color
      &:hover, &:focus, &:active
        color: white
        background-color: $head_color
        border-color: $head_color
</style>
