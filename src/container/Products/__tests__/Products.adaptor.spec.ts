import { convertProductState } from '../Products.adaptor';

describe('convertProductState runs correctly', () => {
  it('convertProductState existing update', () => {
    const input = [
      {
        productId: 1,
        productNumber: 2,
      },
      {
        productId: 3,
        productNumber: 2,
      },
    ];

    const output = [
        {
            productId: 1,
            productNumber: 2,
          },
          {
            productId: 3,
            productNumber: 4,
          },
    ];

    expect(convertProductState(input, 3, 4)).toEqual(output);
  });

  it('convertProductState add new', () => {
    const input = [
      {
        productId: 1,
        productNumber: 2,
      },
      {
        productId: 3,
        productNumber: 2,
      },
    ];

    

    const output = [
        {
            productId: 1,
            productNumber: 2,
          },
          {
            productId: 3,
            productNumber: 2,
          },
          {
            productId: 2,
            productNumber: 3,
          },
    ];

    expect(convertProductState(input, 2, 3)).toEqual(output);
  });

});
