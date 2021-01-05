import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey = 'pk_test_51I5LwdH2FRjnfEHBV723StdyeDwxDVlkSDermf1b3elwlRu3R20dffG3BzNAPsZf3xAmSEGQDRwmmygZ7jeb5HUL009Q4n5XQo';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment error: ', error);
      alert('There was an issue with your payment. Please make sure you use the provided credit card.');
    })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishKey}
    />
  )
}