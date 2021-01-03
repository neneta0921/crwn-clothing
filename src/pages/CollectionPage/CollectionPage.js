import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

import './CollectionPage.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  // console.log('CollectionPage', collection)
  // console.log(title,collection)
  return (
    <div className='collection-page'>
      <h3 className='title'>{title}</h3>
      <div className='items'>
        {items.map(item => (
            <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)