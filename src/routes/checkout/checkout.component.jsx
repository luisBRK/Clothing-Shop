import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h1>My produts</h1>

      <div className="product-table">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        ) : (
          <p className="no-products">No products</p>
        )}
      </div>

      <p className="total">
        Total cost: {""}
        <span>${cartTotal}</span>
      </p>
    </div>
  );
};

export default Checkout;
