import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cartActions';

import {
  AddButton,
  BackgroundImage,
  CollectionItemContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from './CollectionItemStyles';

export const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage key={item.id} className="background-image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer key={item.id} className="name-container">
          {name}
        </NameContainer>
        <PriceContainer key={item.id} className="price-container">
          {price}
        </PriceContainer>
      </CollectionFooterContainer>
      <AddButton key={item.id} className="add-button" onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
