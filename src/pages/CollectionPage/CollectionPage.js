import { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shopSelectors';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

import {
  CollectionItemsContainer,
  CollectionPageContainer,
  CollectionTitle
} from './CollectionPageStyles'

import { firestore } from '../../firebase/firebaseUtils';

const CollectionPage = ({ collection }) => {
  useEffect(() => {
    console.log('I am subscribing');
    const unsubscribeFromCollections = firestore
      .collection('collection')
      .onSnapshot(snapshot => console.log(snapshot))
    return () => {
      console.log('I am unsubscribe')
      unsubscribeFromCollections();
    }
  }, [])
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
            <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)