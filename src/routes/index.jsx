import { createBrowserRouter } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Cart, Home, Login, Register, Menu, CompletePayment, Checkout, } from '../containers';
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },

  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/cadastro',
    element: <Register />,
  },

  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />
      </>
    ),
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/carrinho',
    element: <Cart />,
  },

    {
    path: '/checkout',
    element: <Checkout />,
  },

    {
    path: '/complete',
    element: <CompletePayment />,
  },

   {
    path: '/confirmation',  
    element: <CompletePayment />,
  },
]);
