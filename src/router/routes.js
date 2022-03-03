import Home from '@/components/pages/Home'
import Shop from '@/components/pages/Shop'
import About from '@/components/pages/About'
import Contacts from '@/components/pages/Contacts'
import Product from "@/components/pages/Product";
import Cart from "@/components/pages/Cart";
import Checkout from "@/components/pages/Checkout";


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
]
