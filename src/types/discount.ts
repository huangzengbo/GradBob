export interface iPriceDiscount {
    adId: number;
    discountPrice: number;
}

export interface iForDiscount {
    adId: number;
    buyNumber: number;
    discountNumber: number;
}

export interface iDiscount {
    id: number;
    priceDiscount: iPriceDiscount[];
    forDiscount: iForDiscount[];
}