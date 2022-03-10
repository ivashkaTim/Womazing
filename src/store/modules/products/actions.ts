import {ActionContext, ActionTree} from "vuex";
import {StateProducts} from "@/store/modules/products/state";
import {ActionType, StateRoot} from "@/store/types";

const activeProduct = ({state}: ActionContext<StateProducts, StateRoot>, id: number | string) => {
    return state.products.find(product => product.id === +(id))
}
export type ActionProductActiveProduct = ActionType<typeof activeProduct>

export const actions: ActionTree<StateProducts, StateRoot> = {
    activeProduct,
}