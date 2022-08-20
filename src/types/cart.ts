export interface iProduct {
    productId: number;
    productNumber: number;
}

export interface iCart {
    userId: number;
    products: iProduct[];
}