import { UserProvider } from "./UserContext";

import { CartProvider } from "./CartContext";
const AppProvider = ({ children }) => {
  return (  <UserProvider> <CartProvider></CartProvider>{ children }</UserProvider>
    );
};

export default AppProvider;