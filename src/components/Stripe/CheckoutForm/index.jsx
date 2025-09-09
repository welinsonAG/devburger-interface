import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';

function YourComponent() {
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const response = await fetch('/api/create-checkout-session');
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
  const stripe = useStripe();
  const elements = useElements();
  const { state } = useLocation();
  const clientSecret = state?.clientSecret;

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
      redirect: 'if_required',
    });

    console.log(paymentIntent);
    console.log(error);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Pagamento realizado com sucesso!');
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
