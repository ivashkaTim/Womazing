import {MutationTree} from "vuex";
import {StateCart} from "@/store/modules/cart/state";
import {Product} from "@/store/modules/products/state";

export enum CartEnum {
    SET_PRODUCT_COUNT = "SET_PRODUCT_COUNT",
    DELETE_PRODUCT = "DELETE_PRODUCT",
    ADD_PRODUCT = "ADD_PRODUCT",
    CLEAR_ITEMS = "CLEAR_ITEMS",
    CHECK_PROMO = "CHECK_PROMO",
}

export type CartProduct = Product & {
    color: string,
    size: string,
    count: number
}

function isUniqueProduct(product: CartProduct, payload: CartProduct) {
    return (
        payload.id === product.id &&
        payload.color === product.color &&
        product.size === payload.size
    )
}

function getProduct(items: CartProduct[], payload:CartProduct) {
    return items.find(item => isUniqueProduct(item, payload))
}

export const mutations: MutationTree<StateCart> = {
    [CartEnum.ADD_PRODUCT](state, payload: CartProduct) {
        const finder = getProduct(state.items, payload)

        if (finder) {
            finder.count += payload.count
        } else {
            state.items.push(payload)
        }
    },
    [CartEnum.DELETE_PRODUCT](state, product: CartProduct) {
        const index = state.items.findIndex(item => isUniqueProduct(item, product))
        state.items.splice(index, 1)
    },

    [CartEnum.SET_PRODUCT_COUNT](state, product: CartProduct) {
        const finder = getProduct(state.items, product)
        if (finder) {
            finder.count = +product.count
        }
    },
    [CartEnum.CLEAR_ITEMS](state, payload: CartProduct) {
        state.items = []
    },
    [CartEnum.CHECK_PROMO](state, payload: CartProduct['count']) {
        state.discount = payload
    },


}