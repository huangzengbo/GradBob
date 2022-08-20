import * as React from 'react';
import ProductView from '../../views/ProductView';
import { ads } from '../../constant/ads';
import { iAd } from '../../types/ad';
import { useAppContext } from '../../context/app';
import { convertProductState } from './Products.adaptor';

export default function Products() {
  const { state, setProducts } = useAppContext();

  const productChange = (productId: number, productNumber: number) => {
    setProducts(convertProductState(state.products, productId, productNumber));
  }

  return (
    <>
        {ads.map((adItem: iAd, index: number)=>{
            return <ProductView key={index} title={adItem.name} actionChangeNumber={(productNumber: number)=>productChange(adItem.id, productNumber)} />
        })}
    </>
  );
}
