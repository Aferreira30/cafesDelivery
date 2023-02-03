import React,{useContext} from 'react';
import { PayContext } from '../Context/PayContext';
import imagens from '../imagens/imagens';
import Header from '../Navbar-Section/header/Header';
import '../Styles/contsGLOBAIS.css';
import '../Styles/stylesPedidoFeito.css';


function PedidoAceito() {
  const [pay,setPay]=useContext(PayContext);

  const imgs = [
   { imgMoto: imagens.entregador,}
  ]

  return (

    <main id='cont-pedidoconfirmado-main'>
      <Header />
      <article id='cont-pedidoconfirmado-article'>
        <div id='cont-h1h2-textos'><h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2></div>

        <div id='cont-ul-li-dados'><ul>
          <li>
            <img src={imagens.locRoxa} alt="loc" />
            <span>Endereço Inserido</span>
          </li>
          <li>
            <img src={imagens.relogioAmarelo} alt="" />
              <div id='cont-dados-espera'>
              <span>Previsão de entrega</span>
              <p id='p-tempo'>20 min - 30 min</p>
              </div>
          </li>
          <li>
            <img src={imagens.cifraoamarelo} alt="" />
            <div id='cont-dados-espera'>
            <span>Pagamento na entrega</span>
             <p id='p-tempo'>
              {pay}
             </p>
            </div>
          </li>
          </ul></div>

          <img src={imgs.map((i)=> i.imgMoto)} alt="entregador" id="img-entregador" />


      </article>
    </main>
  )
}

export default PedidoAceito;