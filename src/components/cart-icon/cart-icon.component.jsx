import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { toggleIsCarOpen, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleIsCarOpen}>
      <ShoppingIcon />

      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
