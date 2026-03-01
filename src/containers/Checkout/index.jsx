import { useLocation } from "react-router-dom";
import stripePromise from '../../config/stripeConfig';
import { CheckoutForm } from '../../components';
import { Elements } from '@stripe/react-stripe-js';
import { useEffect } from "react";


export function Checkout() {
    
    const location = useLocation();
   
    
    const clientSecret = location.state?.clientSecret || localStorage.getItem('stripeClientSecret');

    useEffect(() => {
        
        localStorage.removeItem('stripeClientSecret');
    }, [location.state]);

    if (!clientSecret) {
        console.error('xxxx clientSecret não está definido:', location.state);
        return (
        <div> Não foi possível processar seu pedido. Por favor, volte e tente novamente.</div>
        );
    }

 const options = {
    clientSecret,
    appearance: { theme: "stripe" },
  };
    

    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm /> 
        </Elements>
    );

}

