<template>
<div>
    <b-container class="pt-3 pb-5 pl-0 pr-0">
            <b-col class="d-none d-sm-block col-12 pt-3 pl-0 pr-0">
                    <b-nav class="pl-4" id="upperNav">
                        <b-nav-item to="/menu" class="border-right border-white">Menu</b-nav-item>
                        <b-nav-item to="/sometext" class="border-right border-white">Some text</b-nav-item>
                        <b-nav-item to="/anotheritem" class="border-right border-white">Another Item</b-nav-item>
                        <b-nav-item to="/onemore" class="border-right border-white">One More</b-nav-item>
                        <b-nav-item to="/andlastone">And last one</b-nav-item>
                    </b-nav>
            </b-col>
            <b-col class="col-12 pt-3 pl-0 pr-0 mr-0">
                <b-navbar class="pl-4 pr-0" toggleable="md" type="dark">
                    <b-navbar-brand>
                        <img :src="getAsset('logo')" alt="DEMOSITE">
                    </b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>

                    <b-navbar-nav class="ml-auto pr-3">
                        <b-nav-item to="/">Home</b-nav-item>
                        <b-nav-item to="/services">Services</b-nav-item>
                        <b-nav-item id="popover-target" disabled>Works</b-nav-item>
                            <b-popover target="popover-target" triggers="hover" placement="bottom" boundary-padding="1">
                                <b-list-group>
                                    <b-list-group-item to="/all">All</b-list-group-item>
                                    <b-list-group-item to="/graphic">Graphic</b-list-group-item>
                                    <b-list-group-item to="/design">Design</b-list-group-item>
                                    <b-list-group-item to="/logo">Logo</b-list-group-item>
                                    <b-list-group-item to="/website">Website</b-list-group-item>
                                </b-list-group>
                            </b-popover>
                        <b-nav-item to="/aboutme">About Me</b-nav-item>
                        <b-nav-item to="/contact">Contact</b-nav-item>
                    </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </b-col>
    </b-container>
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
    .navbar-toggler
        margin-right: 3rem!important
    @media screen and (max-width: 576px)
        .navbar-brand
            margin-left: 1.5rem!important
</style>
