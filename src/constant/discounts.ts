export const discounts = [
    {
        id: 1,
        priceDiscount: [],
        forDiscount: [
            {
                adId: 1,
                buyNumber: 3,
                discountNumber: 2
            }
        ]
    },
    {
        id: 2,
        priceDiscount: [
            {
                adId: 2,
                discountPrice: 299.99
            }
        ],
        forDiscount: []
    },
    {
        id: 3,
        priceDiscount: [
            {
                adId: 3,
                discountPrice: 389.99
            }
        ],
        forDiscount: [
            {
                adId: 2,
                buyNumber: 5,
                discountNumber: 4
            }
        ]
    }
]