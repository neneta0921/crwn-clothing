import React from 'react';

import { CollectionPreview } from '../../components/CollectionPreview/CollectionPreview';
import { collections } from '../../data/ShopData'

export const ShopPage = () => (
  <div className='shop-page'>
    {
      collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>
)