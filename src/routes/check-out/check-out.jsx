import { useContext } from "react";

import { CartContext } from "../../context/cartcontext";
import "./check-out.scss";

import CheckOutItem from "../../components/checkout-item/checkout-item";

function CheckOut() {
  const { cartItems, cartTotal } = useContext(CartContext);
  const headersBlock = [
    "Product",
    "Description",
    "Quantity",
    "Price",
    "Remove",
  ];
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {headersBlock.map((header) => (
          <div key={header} className="header-block">
            <span>{header}</span>
          </div>
        ))}
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total:${cartTotal}</span>
    </div>
  );
}

export default CheckOut;
