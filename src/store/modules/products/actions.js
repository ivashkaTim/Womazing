export const actions = {
    activeProduct(context, id) {
        return context.state.products.find(product => product.id === +(id))
    }
}