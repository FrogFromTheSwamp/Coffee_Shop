import Vue from 'vue'
import Vuex from 'vuex'

import links from './links';
import bestsellers from './bestsellers';
import coffee from './coffee';
import goods from './goods';

Vue.use(Vuex);

// Create a new store instance.
const store = new Vuex.Store({
    modules: {
        links,
        bestsellers,
        coffee,
        goods
    }
})

export default store