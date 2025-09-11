import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';
import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

function YourComponent() {
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const response = await fetch('/api/create-checkout-session');
    if (!response.ok) {
    console.error('Erro ao criar a sessão de checkout:', response.statusText);
    return;
}
    const { clientSecret } = await response.json();

    if (clientSecret) {
      navigate('/checkout', { state: { clientSecret } });
    } else {
      console.error('Erro ao obter clientSecret');
    }
  };

  return <button onClick={handleCheckout}>Ir para Checkout</button>;
}

export default function CheckoutForm() {
   const { cartProducts, clearCart } = useCart();

  const stripe = useStripe();
  const elements = useElements();
  const { state } = useLocation();
  const clientSecret = state?.clientSecret;

  const navigate = useNavigate();
  
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe ou Elements com falha, tente novamente');
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/complete",
      },
      redirect: 'if_required',
       clientSecret: clientSecret,
    });

    console.log(paymentIntent);
    console.log(error);

    if (error) {
      setMessage(error.message);
      toast.error(error.message)
    } else if (paymentIntent && paymentIntent.status === 'succeeded'){
      setMessage('Pagamento realizado com sucesso!');

        try {

          const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      };
    });

      const { status } = await api.post(
        '/orders',
        { products },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        
        setTimeout(() => {
          navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,);
        }, 3000);
        clearCart()
        
        toast.success('Pedido  Criada com Sucesso Aproveite!');
      } else if (status === 409) {
        toast.error('Falha em Realizar Seu Pedido!');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('😭 Falha no Sistema! Tente novamente');
    } 
    } else {
   navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,);
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'accordion',
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="button"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              'Pagar Agora'
            )}
          </span>
        </button>
      </form>
      {message && <div id="payment-message">{message}</div>}

      <p>
        Os métodos de pagamentos são 
        disponibilizados de acordo com sua
        região.&nbsp;
        <a
          href="dpmCheckerLink"
          target="_blank"
          rel="noopener noreferrer"
          id="dpm-integration-checker"
        >
          Ver médotos de Pagamentos
        </a>
      </p>
    </div>
  );
}
