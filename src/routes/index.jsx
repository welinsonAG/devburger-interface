import { Route, Routes } from 'react-router-dom';
import UserLayout from'../layouts/UserLayout/index'
import {
  Cart,
  Home,
  Login,
  Register,
  Menu,
  CompletePayment,
  Checkout
} from '../containers';

export  function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<CompletePayment />} />
        <Route path="/confirmation" element={<CompletePayment />} />


      </Route>

      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<Register />} />
     
      
    </Routes>
  );
}


