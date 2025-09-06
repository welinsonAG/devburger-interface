import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../Button';
import { Container } from './styles';

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(500);

  const navigate = useNavigate();

  const { cartProducts, clearCart } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      };
    });

    try {
      const { data } = await api.post('/create-payment-intent', { products });
      console.log('🛒 Resposta da API:', data);

      localStorage.setItem('stripeClientSecret', data.clientSecret);
      navigate('/checkout', {
       
      });
    } catch (err) {
      console.error('Erro ao criar o intent de pagamento:', err);
      
      toast.error('Erro! Tente Novamente!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    /*  try {
      const { status } = await api.post(
        '/orders',
        { products },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        
        setTimeout(() => {
          navigate('/');
        }, 2000);
        clearCart()
        
        toast.success('Pedido  Criada com Sucesso Aproveite!');
      } else if (status === 409) {
        toast.error('Falha em Realizar Seu Pedido!');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('😭 Falha no Sistema! Tente novamente');
    } */
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">R$ 20,00</p>
          <p className="delivery-tax">Taxas de Entregas</p>
          <p className="delivery-tax-price">R$ 5,00</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button onClick={submitOrder}>Finalizar Pedido</Button>
    </div>
  );
}
