import { createContext, useEffect, useState } from "react";

// function, newo or increment product
const addCartItem = (cartItems, productToAdd) => {
  // product exists ?
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  // increment quantity if exists
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  // new product
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},

  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // show modal cart dropdown
  const toggleIsCarOpen = () => setIsCartOpen((v) => !v);

  // add item to cart
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  // set total item on cart svg
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = { isCartOpen, toggleIsCarOpen, cartItems, addItemToCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
