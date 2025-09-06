import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import stripePromise from './config/stripeConfig';
import AppProvider from './hooks';
import { router } from './routes';
import GlobalStyles from './styles/globalStyles';
import { CartProvider } from './hooks/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <CartProvider>
        <Elements stripe={stripePromise}>
          <RouterProvider router={router} />
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme="colored" />
      </CartProvider>
    </AppProvider>
  </React.StrictMode>,
);
