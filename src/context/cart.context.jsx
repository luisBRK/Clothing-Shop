import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // show modal cart dropdown
  const toggleIsCarOpen = () => setIsCartOpen((v) => !v);

  const value = { isCartOpen, toggleIsCarOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
