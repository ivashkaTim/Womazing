function isUniqueProduct (product, payload){
    return payload.id === product.id && payload.color === product.color && product.size === payload.size
}

export const mutations = {
    addProduct(state, payload) {
        const finder = state.items.find(item => isUniqueProduct(item, payload))
        if (finder) {
            finder.count += payload.count
        } else {
            state.items.push(payload)
        }
    },
    deleteProduct(state, product) {
        const index = state.items.findIndex(item => isUniqueProduct(item, product))
        state.items.splice(index,1)
    },

}