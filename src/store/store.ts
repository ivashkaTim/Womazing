import Vue from 'vue'
import Vuex from 'vuex'
import {products} from "@/store/modules/products";
import {cart} from "@/store/modules/cart";
import {StateRoot} from "@/store/types";

Vue.use(Vuex)

export default new Vuex.Store<StateRoot> ({
    modules: {
        products,
        cart,
    },
})