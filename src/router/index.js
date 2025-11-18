import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '@/views/HeroView.vue'
import OurCoffeeView from '@/views/OurCoffeeView.vue'
import ContactsView from '@/views/ContactsView.vue'
import GoodsPageView from '@/views/GoodsPageView.vue'
import ThanksView from '@/views/ThanksView.vue'
import GoodsItemView from '@/views/GoodsItemView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/contacts', component: ContactsView },
  { path: '/goods-page', component: GoodsPageView },
  { path: '/thank-you', component: ThanksView },
  { name: 'coffee', path: '/our-coffee/:id', component: GoodsItemView },
  { name: 'goods', path: '/goods-page/:id', component: GoodsItemView },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router