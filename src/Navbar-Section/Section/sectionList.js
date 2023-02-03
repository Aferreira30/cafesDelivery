import React from 'react';
import imagens from '../../imagens/imagens';
import '../../Styles/stylesSection.css';

function SectionList() {
  const sectionData = [
      {
        title: <h1 id='h1-titulo'>Encontre o café perfeito para qualquer hora do dia</h1>,
        subtitle:<p id='p-subtitulo'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>,

        imgCafe:<img src={imagens.fotoGrande} alt="xicGrande" id="img-xicgrande"/>,

        desc1:<div id='cont-descri-subtitulo'><img src={imagens.cestaAmarela} alt="carrinho" /> <span>Compra simples e segura</span></div>,
        desc2:<div id='cont-descri-subtitulo' className='relogio'><img src={imagens.relogio} alt="relogio" /> <span>Entrega rápida e rastreada</span></div>,
        desc3:<div id='cont-descri-subtitulo'><img src={imagens.cuboPreto} alt="cubo" /> <span>Embalagem mantém o café intacto</span></div>,
        desc4:<div id='cont-descri-subtitulo'><img src={imagens.xicaraRoxa} alt="xicRoxa" /> <span>O café chega fresquinho até você</span></div>,

      }
  ];
return(
  <section id='cont-section'>
      {
        sectionData.map((item)=>(
          <div id="cont-principal-apresentacao">
            <div id='cont-titulo-sub'>
              {item.title}
              {item.subtitle}
            </div>
              {item.imgCafe}
            <div id='cont-descricoes'>
              <ul id='cont-ul-descri'>
                <li>{item.desc1}</li>
                <li>{item.desc2}</li>
                <li>{item.desc3}</li>
                <li>{item.desc4}</li>
              </ul>
            </div>
          </div>
        ))
      };
    </section>
);

};


export default SectionList;
