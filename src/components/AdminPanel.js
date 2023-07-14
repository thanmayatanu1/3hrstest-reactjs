import React, { useContext, useState } from 'react';
import { MedicineContext } from '../context/MedicineContext';

const AdminPanel = () => {
  const { setMedicines } = useContext(MedicineContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const addMedicine = () => {
    const newMedicine = {
      id: Date.now(),
      name,
      description,
      price
    };

    setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <h2>Add Medicine</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <button onClick={addMedicine}>Add Medicine</button>
    </div>
  );
};

export default AdminPanel;