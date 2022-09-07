import "./product-card.styles.scss";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { id, name, imageUrl, price } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`img ${name}`} />

      <div className="footer">
        <p className="name">{name}</p>
        <p className="price">{price}$</p>
      </div>

      <Button buttonType={"inverted"}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
