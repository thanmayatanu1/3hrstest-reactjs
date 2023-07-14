import React, { useContext } from 'react';
import { MedicineContext } from '../context/MedicineContext';

const MedicineList = () => {
  const { medicines, addToCart } = useContext(MedicineContext);

  return (
    <div>
      {medicines.map((medicine) => (
        <div key={medicine.id}>
          <span>{medicine.name}</span>
          <button onClick={() => addToCart(medicine)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default MedicineList;