<template>
    <div class="pt-3 pb-5 col-12">
            <b-col class="d-none d-sm-block col-lg-8 col-md-10 col-sm-10 col-12 offset-lg-2 offset-md-1 offset-sm-1 pt-3 pl-0 pr-0">
                    <b-nav id="upperNav">
                        <b-nav-item class="border-right border-white">Menu</b-nav-item>
                        <b-nav-item class="border-right border-white">Some text</b-nav-item>
                        <b-nav-item class="border-right border-white">Another Item</b-nav-item>
                        <b-nav-item class="border-right border-white">One More</b-nav-item>
                        <b-nav-item>And last one</b-nav-item>
                    </b-nav>
            </b-col>
            <b-col class="col-lg-8 col-md-10 col-sm-10 col-10 offset-1 offset-lg-2 offset-md-1 offset-sm-1 pt-3 pl-0 pr-0 mr-0">
                <b-navbar class="pl-0 pr-0" toggleable="md" type="dark">
                    <b-navbar-brand>
                        <img :src="getAsset('logo')" alt="DEMOSITE">
                    </b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>

                    <b-navbar-nav class="ml-auto">
                        <b-nav-item>Home</b-nav-item>
                        <b-nav-item>Services</b-nav-item>
                        <b-nav-item id="popover-target" disabled>Works</b-nav-item>
                            <b-popover target="popover-target" triggers="hover" placement="bottom" boundary-padding="1">
                                <b-list-group>
                                    <b-list-group-item to="#">All</b-list-group-item>
                                    <b-list-group-item to="#">Graphic</b-list-group-item>
                                    <b-list-group-item to="#">Design</b-list-group-item>
                                    <b-list-group-item to="#">Logo</b-list-group-item>
                                    <b-list-group-item to="#">Website</b-list-group-item>
                                </b-list-group>
                            </b-popover>
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
    #upperNav
        font-size: 0.75rem
        .nav-link
            font-weight: normal
    .nav-link
        padding: 1px 3px 1px 3px
        color: white!important
        text-transform: uppercase
        text-align: center
        font-weight: bold
        &:hover
            text-decoration: underline

</style>
