import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import { WithSpinner } from '../../components/WithSpinner/WithSpinner';

import CollectionPage from '../CollectionPage/CollectionPage';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeFromSnapshot = null
    const collectionRef = firestore.collection('collections');
    unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      console.log(collectionsMap);
      updateCollections(collectionsMap);
      setLoading(false);
    })
  })

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> }
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => <CollectionPageWithSpinner isLoading={loading} {...props} /> }
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);