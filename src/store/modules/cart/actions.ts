import {checkPromo} from "@/utils/checkPromo";
import {CartEnum, CartProduct} from "@/store/modules/cart/mutations";
import {ActionTree} from "vuex";
import {StateRoot} from "@/store/types";
import {StateCart} from "@/store/modules/cart/state";

export const actions: ActionTree<StateCart, StateRoot> = {

    addProduct({commit}, payload: CartProduct){
        commit(CartEnum.ADD_PRODUCT, payload)
    },
    deleteProduct({commit}, product: CartProduct){
        commit(CartEnum.DELETE_PRODUCT, product)
    },
    setProductCount({commit}, product: CartProduct){
        commit(CartEnum.SET_PRODUCT_COUNT, product)
    },
    clearItems({commit}, payload: CartProduct){
        commit(CartEnum.CLEAR_ITEMS, payload)
    },
    async checkPromo({commit}, promoCode:string) {
        const result = await checkPromo(promoCode) ?? false
        commit(CartEnum.CHECK_PROMO , result || 0)
        return result
    },

}