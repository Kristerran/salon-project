import React from 'react';
import ReactDOM from 'react-dom';
import { CartProvider } from 'use-shopping-cart';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <CartProvider
    mode="payment"
    cartMode="client-only"
    stripe={YOUR_STRIPE_API_KEY_GOES_HERE}
    successUrl="stripe.com"
    cancelUrl="twitter.com/dayhaysoos"
    currency="USD"
    allowedCountries={['US', 'GB', 'CA']}
    billingAddressCollection={true}
  >
    <App />
  </CartProvider>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//source: https://useshoppingcart.com/docs/getting-started-serverless