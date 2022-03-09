import {state} from "@/store/modules/products/state";
import {mutations} from "@/store/modules/products/mutations";
import {actions} from "@/store/modules/products/actions";
import {getters} from "@/store/modules/products/getters";

export const products = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
