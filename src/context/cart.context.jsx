import { createContext, useEffect, useState } from "react";

// function, new or increment product
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

// decrease quantity value
const removeCartItem = (cartItems, cartItemToRemove) => {
  // product exists ?
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  // delete prodcut when quantity = 1
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // decrease quantity if exists
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id && cartItemToRemove.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

// === === CONTEXT
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},

  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromContext: () => {},

  cartCount: 0,
  cartTotal: 0,
});

// === ===  PROVIDER
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // show modal cart dropdown
  const toggleIsCarOpen = () => setIsCartOpen((v) => !v);

  // add item to cart
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  // remove "-1" item from cart
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  // delete totally a product from cart
  const clearItemFromContext = (cartItem) => {
    setCartItems(clearCartItem(cartItems, cartItem));
  };

  // set total item on cart svg
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  // set total cost caret products
  useEffect(() => {
    const calcTotalCost = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
    setCartTotal(calcTotalCost);
  }, [cartItems]);

  const value = {
    isCartOpen,
    toggleIsCarOpen,
    cartItems,
    cartCount,

    addItemToCart,
    removeItemFromCart,
    clearItemFromContext,

    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
