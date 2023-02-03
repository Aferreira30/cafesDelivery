import React from 'react';
import imagens from '../../src/imagens/imagens';
import '../Styles/contsGLOBAIS.css'
import '../Styles/stylesPedido.css'

const Endereço = () => {
  return (
    <section id='cont-endereco'>
      <div id='cont-textos'>
        <div id='img-texto'>
            <img src={imagens.locAmarela} alt="loc" />
            <span id='span-end'>Endereço de Entrega</span>
        </div>
            <p id='p-subtitle-end'>Informe o endereço onde deseja receber seu pedido</p>
      </div>
          <form id='cont-dados-end'>
            <input type="text" placeholder='CEP' id='cep'/>
            <input type="text" placeholder='Rua' id='Rua'/>
              <div id='num-comple'>
                <input type="text" placeholder='Número' id='Numero'/>
                <input type="text" placeholder='Complemento' id='Complemento'/>
              </div>
              <div id='bai-cid-uf'>
                <input type="text" placeholder='Bairro' id='Bairro'/>
                <input type="text" placeholder='Cidade' id='Cidade'/>
                <input type="text" placeholder='UF' id='UF'/>
              </div>
          </form>
    </section>
  )
}

export default Endereço;