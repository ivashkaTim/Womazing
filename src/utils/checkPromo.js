const discounts =[
    {
        id: 1,
        promo: "Скидка",
        price: 10
    },
    {
        id: 2,
        promo: "Скидка1",
        price: 20
    },
    {
        id: 3,
        promo: "Скидка2",
        price: 30
    },
]


export function checkPromo (promoCode) {
    const discount = discounts.find(item => item.promo === promoCode)

    return discount ? discount.price : null
}