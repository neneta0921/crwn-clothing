import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import { CartIconContainer, ItemCountContainer, ShoppingIcon } from './CartIconStyled';

export const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer className="cart-icon-container" onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer className="item-count-container">{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
