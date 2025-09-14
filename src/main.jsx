import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from 'react-toastify';

import stripePromise from './config/stripeConfig';
import AppProvider from './hooks';

import GlobalStyles from './styles/globalStyles';
import { CartProvider } from './hooks/CartContext';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
        <GlobalStyles />
      <AppProvider>
        <CartProvider>
          <Elements stripe={stripePromise}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Elements>
          
          <ToastContainer autoClose={2000} theme="colored" />
        </CartProvider>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
