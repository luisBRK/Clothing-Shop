import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import {
  CheckoutItemContainer,
  ImageItem,
  Details,
  SpanDetail,
  ButtonActionItem,
  RemoveItemContainer,
  RemoveButton,
} from "./checkout-item.styles";

import { ReactComponent as AddItemIcon } from "../../assets/plus-icon.svg";
import { ReactComponent as RemoveItemIcon } from "../../assets/minus-icon.svg";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { removeItemFromCart, addItemToCart, clearItemFromContext } = useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromContext(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageItem src={imageUrl} alt={name} />

      <Details>
        <SpanDetail>
          Peoduct Name: <p>{name}</p>
        </SpanDetail>

        <SpanDetail className="quantity">
          Quantity:
          <ButtonActionItem onClick={removeItemHandler}>
            <RemoveItemIcon />
          </ButtonActionItem>
          <p>{quantity}</p>
          <ButtonActionItem onClick={addItemHandler}>
            <AddItemIcon />
          </ButtonActionItem>
        </SpanDetail>

        <SpanDetail>
          Total price:<p>${price}</p>
        </SpanDetail>
      </Details>

      <RemoveItemContainer>
        <RemoveButton type="button" onClick={clearItemHandler}>
          &#10005;
        </RemoveButton>
      </RemoveItemContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
