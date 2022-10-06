import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

// === === === METHODS === === ===

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

// === === === ACTIONS === === ===

// toggle cart view
export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};

// add item to cart
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// remove "-1" item from cart
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// delete totally a product from cart
export const clearItemFromState = (cartItems, cartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
