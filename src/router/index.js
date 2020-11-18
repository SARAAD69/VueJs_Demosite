import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/HomePage'
import AboutMe from '../pages/static_pages/AboutMePage'
import All from '../pages/static_pages/AllPage'
import AndLastOne from '../pages/static_pages/AndLastOnePage'
import AnotherItem from '../pages/static_pages/AnotherItemPage'
import Contact from '../pages/static_pages/ContactPage'
import Design from '../pages/static_pages/DesignPage'
import Graphic from '../pages/static_pages/GraphicPage'
import Logo from '../pages/static_pages/LogoPage'
import Menu from '../pages/static_pages/MenuPage'
import OneMore from '../pages/static_pages/OneMorePage'
import Services from '../pages/static_pages/ServicesPage'
import SomeText from '../pages/static_pages/SomeTextPage'
import Website from '../pages/static_pages/WebsitePage'
import Works from '../pages/static_pages/WorksPage'

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
