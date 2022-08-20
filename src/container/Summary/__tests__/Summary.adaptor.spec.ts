import { calculateSummaryPrice, calculateForDiscount } from '../Summary.adaptor';

const ads = [
    {
        id: 1,
        price: 10,
        name: 'Classic Ad',
        description: 'Offers the most basic level of advertisement',
    },
    {
        id: 2,
        price: 20,
        name: 'Stand out Ad',
        description: 'Allows advertisers to use a company logo and use a longer presentation text',
    },
    {
        id: 3,
        price: 30,
        name: 'Premium Ad',
        description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
    }
]

const discounts = [
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
                discountPrice: 18
            }
        ],
        forDiscount: []
    },
    {
        id: 3,
        priceDiscount: [
            {
                adId: 3,
                discountPrice: 24
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
describe('calculateSummaryPrice runs correctly', () => {
  it('calculateSummaryPrice no discount', () => {
    const cart = {
        userId: 1,
        products: [
            {
                productId: 1,
                productNumber: 3,
              },
              {
                productId: 3,
                productNumber: 4,
              },
        ]
    };

    const user = {
        id: 1,
        name: 'Default',
        discountTypes: []
    };

    expect(calculateSummaryPrice(cart, ads, discounts, user)).toEqual(150);
  });

  it('calculateSummaryPrice for discount only', () => {
    const cart = {
        userId: 2,
        products: [
            {
                productId: 1,
                productNumber: 3,
              },
              {
                productId: 3,
                productNumber: 4,
              },
        ]
    };

    const user = {
        id: 2,
        name: 'SecondBite',
        discountTypes: [1]
    };

    expect(calculateSummaryPrice(cart, ads, discounts, user)).toEqual(140);
  });

  it('calculateSummaryPrice price discount only', () => {
    const cart = {
        userId: 3,
        products: [
            {
                productId: 1,
                productNumber: 3,
              },
              {
                productId: 2,
                productNumber: 4,
              },
        ]
    };

    const user = {
        id: 3,
        name: 'Axil Coffee Roasters',
        discountTypes: [2]
    };

    expect(calculateSummaryPrice(cart, ads, discounts, user)).toEqual(102);
  });

  it('calculateSummaryPrice combine discounts only', () => {
    const cart = {
        userId: 4,
        products: [
            {
                productId: 1,
                productNumber: 3,
              },
              {
                productId: 2,
                productNumber: 10,
              },

              {
                productId: 3,
                productNumber: 4,
              },
        ]
    };

    const user = {
        id: 4,
        name: 'MYER',
        discountTypes: [3]
    };

    expect(calculateSummaryPrice(cart, ads, discounts, user)).toEqual(286);
  });

  it('calculateSummaryPrice combine discounts only 2', () => {
    const cart = {
        userId: 4,
        products: [
            {
                productId: 1,
                productNumber: 3,
              },
              {
                productId: 2,
                productNumber: 11,
              },

              {
                productId: 3,
                productNumber: 4,
              },
        ]
    };

    const user = {
        id: 4,
        name: 'MYER',
        discountTypes: [3]
    };

    expect(calculateSummaryPrice(cart, ads, discounts, user)).toEqual(306);
  });

  it('calculateSummaryPrice combine discounts only 3', () => {
    const cart = {
        userId: 4,
        products: [
            {
                productId: 1,
                productNumber: 3,
              },
              {
                productId: 2,
                productNumber: 11,
              },

              {
                productId: 3,
                productNumber: 5,
              },
        ]
    };

    const user = {
        id: 4,
        name: 'MYER',
        discountTypes: [3]
    };

    expect(calculateSummaryPrice(cart, ads, discounts, user)).toEqual(330);
  });

});


describe('calculateForDiscount runs correctly', () => {
    it('calculateForDiscount exact number', () => {
      expect(calculateForDiscount(3, 2, 3, 10)).toEqual(20);
    });

    it('calculateForDiscount non-exact number 1', () => {
      expect(calculateForDiscount(3, 2, 4, 10)).toEqual(30);
    });

    it('calculateForDiscount non-exact number 2', () => {
      expect(calculateForDiscount(3, 2, 8, 10)).toEqual(60);
    });

    it('calculateForDiscount non-exact number 3', () => {
      expect(calculateForDiscount(3, 2, 10, 10)).toEqual(70);
    });

    it('calculateForDiscount non-exact number 4', () => {
        expect(calculateForDiscount(5, 4, 10, 10)).toEqual(80);
      });

      it('calculateForDiscount non-exact number 5', () => {
        expect(calculateForDiscount(5, 4, 11, 10)).toEqual(90);
      });

      it('calculateForDiscount non-exact number 6', () => {
        expect(calculateForDiscount(5, 4, 12, 10)).toEqual(100);
      });
});
  