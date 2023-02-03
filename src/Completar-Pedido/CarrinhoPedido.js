import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Carrinho from '../CarrinhosCompras/carrinho';

import '../Styles/stylesPedido.css';

const CarrinhoPedido = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <section id='cont-carrinho-cafe'>
      <Carrinho />
    </section>
  )
}

export default CarrinhoPedido;