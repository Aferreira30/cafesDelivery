import React from 'react';
import Header from '../Navbar-Section/header/Header'
import CarrinhoPedido from './CarrinhoPedido';
import Endereço from './Endereço';
import Pagamento from './PagamentoFom'
import '../Styles/contsGLOBAIS.css'
import '../Styles/stylesPedido.css'

const Pedido = () => {
  return (
    <>
        <Header />
        <main id='cont-completar-ped'>
          <div id="cont-completar-pedidos">
            <div id='cont-h1'>
              <h1 id='h1-dados'>Complete seu pedido</h1>
              <h1 id="h1-carrinho-ped">Cafés selecionados</h1>
            </div>
            <div>
              <Endereço />
              <Pagamento />
            </div>
              <CarrinhoPedido />
          </div>
        </main>
    </>
  )
};

export default Pedido;