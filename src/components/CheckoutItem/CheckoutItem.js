import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer
} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item"/>
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#45;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#43;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);