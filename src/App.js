import React from 'react';
import { CartProvider } from './Context/CartContext';
import { PayProvider } from './Context/PayContext';
import Routers from '../src/Routers/Routers';
import '../src/Styles/index.css';
import '../src/Styles/stylesCafes.css';

function App() {
  return (
  
      <CartProvider>
      <PayProvider>
        <div className="App">
          <Routers />
        </div>
      </PayProvider>
      
      </CartProvider>
   
    );
}

export default App;
