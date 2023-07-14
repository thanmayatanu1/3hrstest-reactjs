import React , {useState} from 'react';
import { MedicineProvider } from './context/MedicineContext';
import AdminPanel from './components/AdminPanel';
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';

const App = () => {


  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} onShowCart={showCartHandler}/>}
    
     
     
    <MedicineProvider>
      <AdminPanel />
      <Cart />
    </MedicineProvider>
  </CartProvider>
    




  );
};

export default App;