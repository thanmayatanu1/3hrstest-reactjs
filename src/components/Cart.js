import React, { useContext } from 'react';
import { MedicineContext } from '../context/MedicineContext';

const Cart = () => {
  const { medicines, addToCart } = useContext(MedicineContext);

  return (
    <div>
      <h2>Medicines</h2>
      {medicines.map((medicine) => (
        <div key={medicine.id}>
          <h3>{medicine.name}</h3>
          <p>{medicine.description}</p>
          <p>Price: {medicine.price}</p>
          <button onClick={() => addToCart(medicine)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;