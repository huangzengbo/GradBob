import { iCart, iProduct } from '../../types/cart';
import { iAd } from '../../types/ad';
import { iDiscount } from '../../types/discount';
import { iUser } from '../../types/user';

export const calculateSummaryPrice = (cart: iCart, ads: iAd[], discounts: iDiscount[], user: iUser): number => {
    let returnPrice: number = 0;
    
    const userDiscountTypes: number[] = user.discountTypes;

    cart.products.forEach((product: iProduct)=>{

        let foundDiscount = false;
        userDiscountTypes.forEach((discountType: number)=>{
            discounts.forEach((discount: iDiscount)=>{
                if (discount.id === discountType) {
                    if (discount.forDiscount) {
                        const forDiscount = discount.forDiscount;
                        forDiscount.forEach((forDiscountItem)=>{
                            if (forDiscountItem.adId === product.productId) {
                                returnPrice += calculateForDiscount(forDiscountItem.buyNumber, forDiscountItem.discountNumber, product.productNumber, findProductOriginalPrice(ads, product.productId));
                                foundDiscount = true;
                            }
                        })
                    }
                    if (discount.priceDiscount) {
                        const priceDiscount = discount.priceDiscount;
                        priceDiscount.forEach((priceDiscountItem)=>{
                            if (priceDiscountItem.adId === product.productId) {
                                returnPrice += calculatePriceDiscount(product.productNumber, priceDiscountItem.discountPrice);
                                foundDiscount = true;
                            }
                        })
                    }
                    
                }
            })
        })
        if (!foundDiscount) {
            returnPrice += (product.productNumber * findProductOriginalPrice(ads, product.productId));
        }
    })
    
    return returnPrice;
}

const findProductOriginalPrice = (ads: iAd[], productId: number): number => {
    const ad = ads.find((adItem) => adItem.id === productId);
    return ad ? ad.price : 0;
}

export const calculateForDiscount = (forNumber: number, discountNumber: number, actualNumber: number, price: number) => {
    const discountedNumber = Math.trunc(actualNumber / forNumber) * discountNumber;
    const remainingNumber = actualNumber - (Math.trunc(actualNumber / forNumber) * forNumber);
    return price * (discountedNumber + remainingNumber);
}

export const calculatePriceDiscount = (actualNumber: number, price: number) => {
    return price * actualNumber;
}