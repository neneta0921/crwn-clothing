import memoize from 'lodash.memoize';

import { createSelector } from 'reselect';

const selectShop = state => state.shop;
console.log(selectShop)

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = memoize(collectionUrlParam => createSelector(
  [selectShopCollections],
  collections => (collections ? collections[collectionUrlParam] : null )
))

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)