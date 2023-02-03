import React, {useContext} from 'react';
import { CartContext } from '../Context/CartContext';
import imagens from '../imagens/imagens';
import '../Styles/stylesPedido.css';

function CarrinhoList({id,name,price,img}){
  const [cart, setCart] = useContext(CartContext);

  function removeCafe(id){
    setCart(cart.filter(
      item=>item.id !== id
      ))
    }

  return (
      <aside id='cont-cafes-selecionados'>
        <div id='cont-carrinho'>
          <div id="cont-textos-carrinho">  
          <div id='img-docarrinho'>
            {img}
          </div>
            <p id='p-nome-cafe'>{name}</p>
            <span id='span-preco'>R$ {price.toFixed(2)}</span>
          </div>
          <div id="cont-qnt-btn-2" >      
              <button onClick={()=>{removeCafe(id)}} id="btn-remover">
                <div id="ajuste-remover">
                  <img src={imagens.lixo} alt="lixeira" />
                  <span id='remover'>REMOVER</span>
                </div>
              </button>
          </div>
          <hr />
        </div>
      </aside>
  );
};

export default CarrinhoList;