import {ActionTree} from "vuex";
import {StateProducts} from "@/store/modules/products/state";
import {StateRoot} from "@/store/types";

export const actions: ActionTree<StateProducts, StateRoot> = {
    activeProduct({state}, id: number | string) {
        return state.products.find(product => product.id === +(id))
    }
}