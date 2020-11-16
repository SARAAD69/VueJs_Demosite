import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/HomePage'
import AboutMe from '../pages/AboutMePage'
import All from '../pages/AllPage'
import AndLastOne from '../pages/AndLastOnePage'
import AnotherItem from '../pages/AnotherItemPage'
import Contact from '../pages/ContactPage'
import Design from '../pages/DesignPage'
import Graphic from '../pages/GraphicPage'
import Logo from '../pages/LogoPage'
import Menu from '../pages/MenuPage'
import OneMore from '../pages/OneMorePage'
import Services from '../pages/ServicesPage'
import SomeText from '../pages/SomeTextPage'
import Website from '../pages/WebsitePage'
import Works from '../pages/WorksPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aboutme',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/all',
    name: 'All',
    component: All
  },
  {
    path: '/graphic',
    name: 'Graphic',
    component: Graphic
  },
  {
    path: '/design',
    name: 'Design',
    component: Design
  },
  {
    path: '/logo',
    name: 'Logo',
    component: Logo
  },
  {
    path: '/website',
    name: 'Website',
    component: Website
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/sometext',
    name: 'SomeText',
    component: SomeText
  },
  {
    path: '/anotheritem',
    name: 'AnotherItem',
    component: AnotherItem
  },
  {
    path: '/onemore',
    name: 'OneMore',
    component: OneMore
  },
  {
    path: '/andlastone',
    name: 'AndLastOne',
    component: AndLastOne
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
