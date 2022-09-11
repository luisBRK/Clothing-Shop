import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./checkout-item.styles.scss";
import { ReactComponent as AddItemIcon } from "../../assets/plus-icon.svg";
import { ReactComponent as RemoveItemIcon } from "../../assets/minus-icon.svg";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { removeItemFromCart, addItemToCart, clearItemFromContext } = useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromContext(cartItem);

  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={name} />

      <div className="item-details">
        <span>
          Peoduct Name: <p>{name}</p>
        </span>

        <span className="quantity">
          Quantity:
          <div className="button-item" onClick={removeItemHandler}>
            <RemoveItemIcon />
          </div>
          <p>{quantity}</p>
          <div className="button-item" onClick={addItemHandler}>
            <AddItemIcon />
          </div>
        </span>

        <span>
          Total price:<p>${price}</p>
        </span>
      </div>

      <div className="remove-item">
        <button type="button" className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
