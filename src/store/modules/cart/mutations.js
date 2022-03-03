import {
    ADD_PRODUCT,
    CHECK_PROMO,
    CLEAR_ITEMS,
    DELETE_PRODUCT,
    SET_PRODUCT_COUNT,
} from "@/store/modules/cart/mutatoin-types";


function isUniqueProduct(product, payload) {
    return (
        payload.id === product.id &&
        payload.color === product.color &&
        product.size === payload.size
    )
}

function getProduct(items, payload) {
    return items.find(item => isUniqueProduct(item, payload))
}

export const mutations = {
    [ADD_PRODUCT](state, payload) {
        const finder = getProduct(state.items, payload)

        if (finder) {
            finder.count += payload.count
        } else {
            state.items.push(payload)
        }
    },
    [DELETE_PRODUCT](state, product) {
        const index = state.items.findIndex(item => isUniqueProduct(item, product))
        state.items.splice(index, 1)
    },

    [SET_PRODUCT_COUNT](state, product) {
        const finder = getProduct(state.items, product)
        if (finder) {
            finder.count = +product.count
        }
    },
    [CLEAR_ITEMS](state, payload) {
        state.items = []
    },
    [CHECK_PROMO](state, payload) {
        state.discount = payload
    },


}