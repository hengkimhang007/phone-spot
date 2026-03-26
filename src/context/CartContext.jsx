import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.findIndex((item) => item.id === product.id);
      if (existing !== -1) {
        return prev.map((item, i) =>
          i === existing ? { ...item, qty: (item.qty || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQty = (index, qty) => {
    if (qty < 1) return;
    setCart((prev) => prev.map((item, i) => i === index ? { ...item, qty } : item));
  };

  const clearCart = () => setCart([]);

  const totalCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, totalCount }}>
      {children}
    </CartContext.Provider>
  );
}
