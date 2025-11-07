import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '@/views/HeroView.vue'
import OurCoffeeView from '@/views/OurCoffeeView.vue'
import ContactsView from '@/views/ContactsView.vue'
import GoodsPage from '@/views/GoodsPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/contacts', component: ContactsView },
  { path: '/goods-page', component: GoodsPage },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router