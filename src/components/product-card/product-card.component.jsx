import { useContext } from "react";

import "./product-card.styles.scss";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import { ToastAlertSuccessLeft } from "../toast-alert/toast-alert.component";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
    ToastAlertSuccessLeft("Product added to cart");
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`img ${name}`} />

      <div className="footer">
        <p className="name">{name}</p>
        <p className="price">{price}$</p>
      </div>

      <Button onClick={addProductToCart} buttonType={"inverted"}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
