<template>
    <div class="pt-4">
            <b-col class="d-none d-sm-block col-lg-8 col-md-10 col-12 offset-lg-2 offset-md-1">
                    <b-nav class="upperNav">
                        <b-nav-item class="border-right border-white">Menu</b-nav-item>
                        <b-nav-item class="border-right border-white">Some text</b-nav-item>
                        <b-nav-item class="border-right border-white">Another Item</b-nav-item>
                        <b-nav-item class="border-right border-white">One More</b-nav-item>
                        <b-nav-item>And last one</b-nav-item>
                    </b-nav>
            </b-col>
            <b-col class="col-lg-8 col-md-10 col-12 offset-lg-2 offset-md-1">
                <b-navbar class="pl-0" toggleable="sm" type="dark">
                    <b-navbar-brand>
                        <img :src="getAsset('logo')" alt="DEMOSITE">
                    </b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>

                    <b-navbar-nav class="ml-auto">
                        <b-nav-item>Services</b-nav-item>
                        <b-nav-item>Services</b-nav-item>
                        <b-nav-item>Works</b-nav-item>
                        <b-nav-item>About Me</b-nav-item>
                        <b-nav-item>Contact</b-nav-item>
                    </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </b-col>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getAsset'
    ])
  }
}
</script>

<style lang="sass" scoped>
    $head_color: #448ccb

    div
        background-color: $head_color
    .upperNav
        font-size: 0.75rem
    .nav-link
        padding: 1px 2px 1px 2px
        color: white!important
        text-transform: uppercase
</style>
