import { connect } from 'react-redux';

import { clearCart } from '../../redux/cart/cartActions';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishKey =
    'pk_test_51I5LwdH2FRjnfEHBV723StdyeDwxDVlkSDermf1b3elwlRu3R20dffG3BzNAPsZf3xAmSEGQDRwmmygZ7jeb5HUL009Q4n5XQo';

  const onToken = async (token) => {
    try {
      const response = await axios({
        url: 'payment',
        method: 'post',
        data: { amount: priceForStripe, token: token },
      });
      if (response) {
        alert('Payment Success.');
        clearCart();
      } else {
        alert('Wooops, Error');
      }
    } catch (error) {
      console.log('Payment error: ', error);
      alert(
        'There was an issue with your payment. Please make sure you use the provided credit card.'
      );
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
