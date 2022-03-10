import {checkPromo} from "@/utils/checkPromo";
import {CartEnum, CartProduct} from "@/store/modules/cart/mutations";
import {ActionContext, ActionTree} from "vuex";
import {ActionType, StateRoot} from "@/store/types";
import {StateCart} from "@/store/modules/cart/state";

const addProduct = ({commit}: ActionContext<StateCart, StateRoot>, payload: CartProduct) => {
    commit(CartEnum.ADD_PRODUCT, payload)
}
export type ActionCartAddProduct = ActionType<typeof addProduct>

const deleteProduct = ({commit}: ActionContext<StateCart, StateRoot>, product: CartProduct) => {
    commit(CartEnum.DELETE_PRODUCT, product)
}
export type ActionCartDeleteProduct = ActionType<typeof deleteProduct>

const setProductCount = ({commit}: ActionContext<StateCart, StateRoot>, product: CartProduct) => {
    commit(CartEnum.SET_PRODUCT_COUNT, product)
}
export type ActionCartSetProductCount = ActionType<typeof setProductCount>

const clearItems = ({commit}: ActionContext<StateCart, StateRoot>, payload: CartProduct) => {
    commit(CartEnum.CLEAR_ITEMS, payload)
}
export type ActionCartClearItems = ActionType<typeof clearItems>

const checkPromoReturn = async ({commit}: ActionContext<StateCart, StateRoot>, promoCode: string) => {
    const result = await checkPromo(promoCode) ?? false
    commit(CartEnum.CHECK_PROMO, result || 0)
    return result
}
export type ActionCartCheckPromo = ActionType<typeof checkPromoReturn>


export const actions: ActionTree<StateCart, StateRoot> = {

    addProduct,
    deleteProduct,
    setProductCount,
    clearItems,
    checkPromoReturn,

}

