import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { CartItem } from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemContainer,
  EmptyMessageContainer
} from './CartDropdown.styles';

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