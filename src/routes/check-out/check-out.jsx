import { useContext } from "react";

import { CartContext } from "../../context/cartcontext";
import "./check-out.styles.js";

import CheckOutItem from "../../components/checkout-item/checkout-item";
import {
  CheckOutContainer,
  CheckOutHeader,
  CheckOutHeaderBlock,
  CheckOutTotal,
} from "./check-out.styles.js";

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
    <CheckOutContainer>
      <CheckOutHeader>
        {headersBlock.map((header) => (
          <CheckOutHeaderBlock key={header}>
            <span>{header}</span>
          </CheckOutHeaderBlock>
        ))}
      </CheckOutHeader>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckOutTotal>Total:${cartTotal}</CheckOutTotal>
    </CheckOutContainer>
  );
}

export default CheckOut;
