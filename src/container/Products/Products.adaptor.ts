import { iProduct } from '../../types/cart';

export const convertProductState = (existingProducts: iProduct[], newProductId: number, newProductNumber: number): iProduct[] => {
    let foundExisting: boolean = false;
    existingProducts.forEach((eachExistingProduct: iProduct) => {
        if (eachExistingProduct.productId === newProductId) {
            eachExistingProduct.productNumber = newProductNumber;
            foundExisting = true;
        }
    })
    if (!foundExisting) {
        existingProducts.push({
            productId: newProductId,
            productNumber: newProductNumber,
        })
    }
    return existingProducts;
}