<template>
  <div id="app">
    <app-home></app-home>
  </div>
</template>

<script>
import Home from './pages/HomePage'
export default {
  components: {
    appHome: Home
  }
}
</script>

<style lang="sass">
    body
      overflow-x: hidden
    .popover
        background-color: black!important
    .popover-body
        padding: 0!important
    .list-group
        border-radius: 0!important
    .list-group-item
        padding: 0.45rem 1.2rem
        padding-right: 4rem
        border-color: black
        background-color: black
        text-transform: uppercase
        font-weight: bold
        color: white!important
        &:hover
          color: black!important
    .arrow:after
        border-bottom-color: black!important
</style>
