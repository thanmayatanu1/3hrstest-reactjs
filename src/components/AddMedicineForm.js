import React, { useContext, useState } from 'react';
import { MedicineContext } from '../context/MedicineContext';

const AddMedicineForm = () => {
  const { setMedicines } = useContext(MedicineContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddMedicine = (e) => {
    e.preventDefault();
    setMedicines((prevMedicines) => [
      ...prevMedicines,
      { id: Date.now(), name, description, price },
    ]);
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleAddMedicine}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Medicine Name"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <button type="submit">Add Medicine</button>
    </form>
  );
};

export default AddMedicineForm;