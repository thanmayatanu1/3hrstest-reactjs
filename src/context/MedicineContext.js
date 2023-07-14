import React, { createContext, useState } from 'react';

export const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (medicine) => {
    const existingMedicine = cart.find((item) => item.id === medicine.id);
    if (existingMedicine) {
      setCart(
        cart.map((item) =>
          item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...medicine, quantity: 1 }]);
    }
  };

  const removeFromCart = (medicine) => {
    const updatedCart = cart.filter((item) => item.id !== medicine.id);
    setCart(updatedCart);
  };

  return (
    <MedicineContext.Provider value={{ medicines, setMedicines, cart, addToCart, removeFromCart }}>
      {children}
    </MedicineContext.Provider>
  );
};