import {GetterTree} from "vuex";
import {StateProducts} from "@/store/modules/products/state";
import {StateRoot} from "@/store/types";

export const getters: GetterTree<StateProducts, StateRoot> = {
    products(state) {
        return state.products
    },
    categories(state) {
        const categories = [
            {
                id: 0,
                name: "Всё"
            }
        ]
        state.products.forEach(product => {
            const isInCategories = categories.some(category => {
                return category.id === product.category.id
            })
            if (!isInCategories) {
                categories.push(product.category)
            }
        })
        return categories
    }
}