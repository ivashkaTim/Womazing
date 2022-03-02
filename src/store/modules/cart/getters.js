export const getters = {
    itemsCount(state) {
        return state.items.reduce((total, item) => total + item.count, 0)
    },
    items(state) {
        return state.items
    },
}
