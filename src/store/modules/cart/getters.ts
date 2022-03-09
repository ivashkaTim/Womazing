import {GetterTree} from "vuex";
import {StateCart} from "@/store/modules/cart/state";
import {StateRoot} from "@/store/types";

export const getters:GetterTree<StateCart, StateRoot> = {

    itemsCount(state) {
        return state.items.reduce((total, item) => total + item.count, 0)
    },
    items(state) {
        return state.items
    },
    discountCost(state,getters) {
        return getters.cost - (getters.cost * state.discount / 100)
    },

    cost(state) {
        return state.items.reduce(
            (total, item) => total + (item.count * item.price),
            0)
    },

}
