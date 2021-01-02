import { CustomButton } from '../CustomButton/CustomButton';

import './CartDropdown.scss';

export const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)