import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { CheckoutContainer, CheckoutProducts, TotalCost } from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <h1>My produts</h1>

      <CheckoutProducts>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        ) : (
          <p className="no-products">No products</p>
        )}
      </CheckoutProducts>

      <TotalCost>
        Total cost: {""}
        <span>${cartTotal}</span>
      </TotalCost>
    </CheckoutContainer>
  );
};

export default Checkout;
