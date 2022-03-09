import Home from '@/components/pages/Home.vue'
import Shop from '@/components/pages/Shop.vue'
import About from '@/components/pages/About.vue'
import Contacts from '@/components/pages/Contacts.vue'
import Product from "@/components/pages/Product.vue";
import Cart from "@/components/pages/Cart.vue";
import Checkout from "@/components/pages/Checkout.vue";
import {RouteConfig} from "vue-router";



export default [
    {
        path: '/',
        name: 'home',
        component: Home
        ,
        meta: {
            title: 'Главная'
        }
    },
    {
        path: '/products',
        name: 'products',
        component: Shop
        ,
        meta: {
            title: 'Магазин'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About
        ,
        meta: {
            title: 'О бренде'
        }
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
        ,
        meta: {
            title: 'Контакты'
        }
    },
    {
        path: '/products/:id',
        name: 'product',
        component: Product
        ,
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
        ,
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
    },
] as RouteConfig[]
