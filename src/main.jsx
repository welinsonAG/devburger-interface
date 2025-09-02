import React from "react";
import ReactDOM from "react-dom/client";
import {ToastContainer} from 'react-toastify'
import { RouterProvider } from "react-router-dom";


import { router } from "./routes";
import GlobalStyles from "./styles/globalStyles"
import AppProvider from "./hooks";
import { CartProvider } from "./hooks/CartContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 
    <AppProvider> 
      <CartProvider> 
    <RouterProvider router={router} />
   <GlobalStyles />
   <ToastContainer autoClose={2000} theme="colored" />
   </CartProvider>
   </AppProvider>
   </React.StrictMode>
);
