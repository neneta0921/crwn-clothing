import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { CartItem } from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHidden } from '../../redux/cart/cartActions';

import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemContainer,
  EmptyMessageContainer
} from './CartDropdownStyles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemContainer>
      {cartItems.length
        ? (cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          )))
        : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      }
    </CartItemContainer>
    <CartDropdownButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden())
    }}>GO TO CHECKOUT</CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));