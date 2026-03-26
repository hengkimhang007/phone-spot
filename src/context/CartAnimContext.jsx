import { createContext, useContext, useState, useCallback } from "react";

const CartAnimContext = createContext();

export function CartAnimProvider({ children }) {
  const [flyItems, setFlyItems] = useState([]);

  const fly = useCallback((fromRect) => {
    const id = Date.now();
    setFlyItems((prev) => [...prev, { id, fromRect }]);
    setTimeout(() => setFlyItems((prev) => prev.filter((f) => f.id !== id)), 900);
  }, []);

  return (
    <CartAnimContext.Provider value={{ fly, flyItems }}>
      {children}
    </CartAnimContext.Provider>
  );
}

export const useCartAnim = () => useContext(CartAnimContext);
