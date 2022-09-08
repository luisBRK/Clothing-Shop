import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`product ${name}`} />
      <div className="item-details">
        <p className="name">{name}</p>
        <p className="price">
          {quantity} x ${price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
