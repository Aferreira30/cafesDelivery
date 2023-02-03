import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import CarrinhoList from './carrinhoList';
import Home from '../Home';
import '../Styles/contsGLOBAIS.css';
import '../Styles/stylesPedido.css';



function Carrinho() {
  const [cart, setCart] = useContext(CartContext);
  console.log(setCart)
  const totalPrice = cart.reduce(
    (accumulator, currentValue)=>accumulator + currentValue.price, 0
    );

    return(
      <div id='cont-valor-total'>
                { cart.length > 0 ?
                cart.map(
                  item=><CarrinhoList img={item.img} name={item.name} price={item.price} id={item.id} />   
                )
                : <Home />
              }
                
                
            <div id='cont-dados-valores'>
              <div id='div-total-itens'>
                <p>Total de itens</p>
                <span>R$ {totalPrice.toFixed(2)}</span>
              </div>
              <div id='div-entrega'>
                <p>Entrega</p>
                <span>R$ 3.50</span>
              </div>
              <div id='div-total'>
                <p>Total</p>
                <span>R$ {(cart.length > 0 ? totalPrice + 3.5 : totalPrice === 0).toFixed(2)}</span>
              </div>
              <Link to='/pedidoaceito'>
                 <button id='btn-confirmar'>CONFIRMAR PEDIDO</button>
              </Link>
            </div>

      </div>
    );
};

export default Carrinho;