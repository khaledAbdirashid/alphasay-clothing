import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { UserContextProvider } from "./context/usercontext.jsx";

import "./index.scss";
import { ProductContextProvider } from "./context/productcontext.jsx";
import { CartContextProvider } from "./context/cartcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
