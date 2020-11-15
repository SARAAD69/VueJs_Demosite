<template>
<div>
    <b-container class="d-none d-sm-block pt-3 pb-5 pl-0 pr-0">
        <b-row class="pt-3">
            <b-col class="d-none d-md-block col-lg-5 col-md-4 ml-n4 pl-0 pr-0">
                    <p class="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
            </b-col>
            <b-col class="col-lg-7 col-md-8 col-12 pl-0 pr-0 mr-0">
                <b-navbar class="pt-0" type="dark">
                    <b-navbar-nav class="mxAuto ml-auto pr-3">
                        <b-nav-item>Home</b-nav-item>
                        <b-nav-item>Services</b-nav-item>
                        <b-nav-item>Works</b-nav-item>
                        <b-nav-item>About Me</b-nav-item>
                        <b-nav-item>Contact</b-nav-item>
                    </b-navbar-nav>
                </b-navbar>
                <div class="footer_logo d-md-block d-none float-right pt-3 pt5">
                    <strong class="text-white align-middle pr-1">©</strong>
                    <img :src="getAsset('logo')" height="9rem" alt="DEMOSITE">
                    <span class="text-white align-middle pl-1">All rights reserved</span>
                </div>
            </b-col>
        </b-row>
    </b-container>
    <b-container>
    <b-row class="d-md-none justify-content-center mt-n5 pb-5">
            <div class="pt-3 pt5">
                <strong class="text-white align-middle pr-1">©</strong>
                <img :src="getAsset('logo')" height="9rem" alt="DEMOSITE">
                <span class="text-white align-middle pl-1">All rights reserved</span>
            </div>
    </b-row>
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
    div
        background-color: black
    p
        font-size: 0.8rem
        color: #a5a5a5
    strong, span
        font-size: 0.8rem
    .nav-link
        padding-top: 0!important
        color: white!important
        text-transform: uppercase
        text-align: center
        font-weight: bold
        &:hover
            text-decoration: underline
    .footer_logo
        display: inline
        margin-right: 2.5rem!important
    @media screen and (max-width: 992px) and (min-width: 768px)
        .ml-n4
            margin-left: 0!important
        .pt5
            padding-top: 3rem!important
    @media screen and (max-width: 768px) and (min-width: 576px)
        .mxAuto
            margin-right: auto!important
            margin-left: auto!important

    @media screen and (max-width: 576px)
        .navbar
            display: none
        .mt-n5
            margin-top: 0rem!important
        strong, span
            font-size: 1rem
        img
            height: 0.8rem
</style>
