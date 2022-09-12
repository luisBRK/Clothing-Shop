import { useContext } from "react";

import { ProductCardContainer, Image, Footer, Name, Price } from "./product-card.styles";

import { CartContext } from "../../context/cart.context";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { ToastAlertSuccessLeft } from "../toast-alert/toast-alert.component";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
    ToastAlertSuccessLeft("Product added to cart");
  };

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`img ${name}`} />

      <Footer>
        <Name>{name}</Name>
        <Price>{price}$</Price>
      </Footer>

      <Button onClick={addProductToCart} buttonType={BUTTON_TYPES_CLASSES.inverted}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
