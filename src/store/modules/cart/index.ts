import {state} from "@/store/modules/cart/state";
import {mutations} from "@/store/modules/cart/mutations";
import {actions} from "@/store/modules/cart/actions";
import {getters} from "@/store/modules/cart/getters";

export const cart = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
