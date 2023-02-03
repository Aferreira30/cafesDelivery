import React, {useContext, useState} from 'react';
import { CartContext } from '../Context/CartContext';
import '../Styles/contsGLOBAIS.css'
import imagens from '../imagens/imagens'
import { Link } from 'react-router-dom';

function Cafes({img,tipo,tipo2,tipo3,descricao,name, price,id}){
  const [cart, setCart] = useContext(CartContext);
  const [cont, setCont] = useState(0)

  function addToCart(event){
    event.preventDefault();
    const cafes = {
      img:img, name:name, price: (price * cont), id: name + Date.now()
    }
    console.log(cafes.id)
    setCart([...cart, cafes])
    };
    function addSemnada(event){
      const home = <Link to={'/'}><button id='btn-home'>Add Café</button></Link>;
      event.preventDefault();
      const cafes = {
        name:'OPS!! Não há Produto No Carrinho', price: 0 , id: name + Date.now(), img:home,
      }
      console.log(cafes.id)
      setCart([...cart, cafes])
      };
    function addQnt() {
      setCont(cont + 1)
    }
    function removeQnt(){
      if(cont !== 0) {
      setCont(cont - 1)
      }
    }

  
  return(
    <div id='cont-div-cafes'>
              {img}
          <div id="cont-semimg">
              <div id="cont-tipos">
                {tipo}
                {tipo2}
                {tipo3}
              </div>
                <div id="cont-textos">
                  <h2 id='h2-nome'>{name}</h2>
                  <p id='p-descri'>{descricao}</p>
                </div>
                  <div id="cont-btnPrice">
                    <p id='p-valor'><span id='span-cifrao'>R$</span> {price}</p>
                        <div id="cont-qnt-btn">
                          <button onClick={addQnt} id='btn-mais-menos'>+</button>
                          <span id='span-cont'>{cont}</span>
                          <button onClick={removeQnt} id='btn-mais-menos'>-</button>
                        </div>
                    <button onClick={cont > 0 ? addToCart : addSemnada} id='btn-add'><img src={imagens.carrinhoRoxo} alt='cstinhaRoxa' /></button>
                  </div>
          </div>
    </div>
  );
};

export default Cafes;