import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import CollectionsOverview from './CollectionsOverview';
import { WithSpinner } from '../../components/WithSpinner/WithSpinner';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

// Wrapped with Higher Order Component
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export { CollectionsOverviewContainer }