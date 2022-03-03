import {
    ADD_PRODUCT,
    CHECK_PROMO,
    CLEAR_ITEMS,
    DELETE_PRODUCT,
    SET_PRODUCT_COUNT,
} from "@/store/modules/cart/mutatoin-types";
import {checkPromo} from "@/utils/checkPromo";

export const actions = {
    addProduct(context, payload){
        context.commit(ADD_PRODUCT, payload)
    },
    deleteProduct(context, product){
        context.commit(DELETE_PRODUCT, product)
    },
    setProductCount(context, product){
        context.commit(SET_PRODUCT_COUNT, product)
    },
    clearItems(context, payload){
        context.commit(CLEAR_ITEMS, payload)
    },
    async checkPromo(context, promoCode) {
        const result = await checkPromo(promoCode) ?? false
        context.commit(CHECK_PROMO , result)
        return result
    },

}