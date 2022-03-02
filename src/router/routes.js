import HomePages from '@/components/pages/HomePages'
import ShopPages from '@/components/pages/ShopPages'
import AboutPages from '@/components/pages/AboutPages'
import ContactsPages from '@/components/pages/ContactsPages'
import ProductPages from "@/components/pages/ProductPages";
import CartPages from "@/components/pages/CartPages";


export default [
    {
        path: '/',
        name: 'home',
        component: HomePages,
        meta: {
            title: 'Главная'
        }
    },
    {
        path: '/products',
        name: 'products',
        component: ShopPages,
        meta: {
            title: 'Магазин'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPages,
        meta: {
            title: 'О бренде'
        }
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsPages,
        meta: {
            title: 'Контакты'
        }
    },
    {
        path: '/products/:id',
        name: 'product',
        component: ProductPages,
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartPages,
    },
]
