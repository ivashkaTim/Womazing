export const actions = {
    addProduct(context, payload){
        context.commit('addProduct', payload)
    },
    deleteProduct(context, product){
        context.commit('deleteProduct', product)
    },
    changeCount(context, ){}
}