export type Category = {
    id: number,
    name: string
}

export type Product = {
    id: number,
    title: string,
    price: number,
    image: string,
    category: Category
}

export type StateProducts = {
    products: Product[]

}

export const state = (): StateProducts => ({
    products: [{
        id: 1, title: 'Футболка USA1', price: 130, image: 't-shirt/t-shirt', category: {
            id: 1, name: "Футболки"
        }
    }, {
        id: 2, title: 'Футболка RUSSIA2', price: 160, image: 't-shirt/t-shirt', category: {
            id: 1, name: "Футболки"
        }
    }, {
        id: 3, title: 'Футболка USA3', price: 160, image: 't-shirt/t-shirt', category: {
            id: 1, name: "Футболки"
        }
    }, {
        id: 4, title: 'Рубашка RUSSIA4', price: 130, image: 'shirt/shirt', category: {
            id: 2, name: "Рубашки"
        }
    }, {
        id: 5, title: 'Рубашка USA5', price: 130, image: 'shirt/shirt', category: {
            id: 2, name: "Рубашки"
        }
    }, {
        id: 6, title: 'Рубашка RUSSIA6', price: 160, image: 'shirt/shirt', category: {
            id: 2, name: "Рубашки"
        }
    }, {
        id: 7, title: 'Пальто USA7', price: 160, image: 'coat/coat', category: {
            id: 3, name: "Пальто"
        }
    }, {
        id: 8, title: 'Пальто RUSSIA8', price: 160, image: 'coat/coat', category: {
            id: 3, name: "Пальто"
        }
    }, {
        id: 9, title: 'Пальто USA9', price: 160, image: 'coat/coat', category: {
            id: 3, name: "Пальто"
        }
    }, {
        id: 10, title: 'Толстовка RUSSIA10', price: 160, image: 'hoody/hoody', category: {
            id: 4, name: "Толстовки"
        }
    }, {
        id: 11, title: 'Толстовка USA11', price: 160, image: 'hoody/hoody', category: {
            id: 4, name: "Толстовки"
        }
    }, {
        id: 12, title: 'Толстовка RUSSIA12', price: 160, image: 'hoody/hoody', category: {
            id: 4, name: "Толстовки"
        }
    },],
})