import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

// === === REDUCER
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CART_ACTION_TYPES = {
  TOGGLE_OPEN_CART: "TOGGLE_OPEN_CART",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_OPEN_CART:
      return {
        ...state,
        isCartOpen: payload,
      };

    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhandle type "${type}" in cartReducer`);
  }
};

// === ===  PROVIDER
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  // show modal cart dropdown
  // (dispatch with helper)
  const toggleIsCarOpen = () => {
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_OPEN_CART, !isCartOpen));
  };

  // update cart to reducer
  const updateCartItems = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    const calcTotalCost = newCartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: { cartItems: newCartItems, cartCount: newCartCount, cartTotal: calcTotalCost },
    });
  };
  // add item to cart
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  };

  // remove "-1" item from cart
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItems(newCartItems);
  };

  // delete totally a product from cart
  const clearItemFromContext = (cartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItem);
    updateCartItems(newCartItems);
  };

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
