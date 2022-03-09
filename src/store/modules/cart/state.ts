
import {CartProduct} from "@/store/modules/cart/mutations";

export  type StateCart = {
    items: CartProduct[]
    discount: number
}


export const state = (): StateCart => ({
    items: [],
    discount: 0,
})