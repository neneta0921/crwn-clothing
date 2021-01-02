import { Route } from 'react-router-dom';

import CollectionPage from '../CollectionPage/CollectionPage'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

export const ShopPage = ({ match }) => {
  // console.log('match:', match)
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}
