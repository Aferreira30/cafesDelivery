import React, {useContext} from 'react';
import imagens from '../../imagens/imagens'
import '../../Styles/contsGLOBAIS.css';
import '../../Styles/stylesHeader.css';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <header>
        <div id="cont-header">
          <Link to="/">
          <img src={imagens.logotipo} alt="logo" />
          </Link>
            <ul id='cont-ul-header'>
              <li>
                <form id='form-localiza'>
                  <img src={imagens.loc} alt="loc" id='img-loc' />
                  <input type="search" id='input-localiza' placeholder='Insira Endereço' />
                </form>
              </li>
              <li>
              <Link to="/completarpedido">
                <button id='button-carrinho'>
                  <img src={imagens.carrinho} alt="carrinho" id='img-carrinho'/>
                  <span id='span-num-itens'>{cart.length}</span>
                </button>
              </Link>
              </li>
            </ul>
        </div>
    </header>
  )
}



export default Header