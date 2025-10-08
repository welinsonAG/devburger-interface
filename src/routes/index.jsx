import { Route, Routes } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';
import {
  Cart,
  Home,
  Login,
  Register,
  CompletePayment,
  Checkout,
  Orders,
  Products,
  NewProduct,
  EditProduct,
  Menu,
} from '../containers';

export function Router() {
  return (
    <Routes>
      {/* Rotas do usuário */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="cardapio" element={<Menu />} />
        <Route path="carrinho" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="complete" element={<CompletePayment />} />
        <Route path="confirmation" element={<CompletePayment />} />
      </Route>

      {/* Rotas do admin (todas dentro do AdminLayout) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="pedidos" element={<Orders />} />
        <Route path="produtos" element={<Products />} />
        <Route path="novo-produto" element={<NewProduct />} />
        <Route path="editar-produtos" element={<EditProduct />} />
      </Route>

      {/* Rotas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}
