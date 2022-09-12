import { CartItemContainer, Details, DetailName, Image } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`product ${name}`} />
      <Details>
        <DetailName>{name}</DetailName>
        <p>
          {quantity} x ${price}
        </p>
      </Details>
    </CartItemContainer>
  );
};

export default CartItem;
