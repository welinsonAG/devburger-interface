import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(
   'pk_test_51RUUG3LWEeAwvbWdMJRDecC8LiWyoLCVPR5GuL1MLh6HIxC34zRJTxXbujDO4wTVMnNHAwOJo1FMR3Lemcx11Del00UCFA3Gkt' 
);

export default stripePromise;