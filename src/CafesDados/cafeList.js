import Cafes from './cafes';
import React from 'react';
import imagens from '../imagens/imagens';
import '../Styles/contsGLOBAIS.css';
import '../Styles/stylesCafes.css';

function CafesList() {
  const cafesData = [
    {
      //cafe tradicional
      img: <img src={imagens.tradicional} alt="tradicional" id="imagem" />,
      id: 1,
      tipo: <span id="tipo">Tradicional</span>,
      name: 'Expresso Tradicional',
      desri: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      qnt: 10,
    },
    {
      //cafe expresso
      img: <img src={imagens.Expamericano} alt="Americano" id="imagem" />,
      id: 2,
      tipo: <span id="tipo">Tradicional</span>,
      name: 'Expresso Americano',
      desri: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      qnt: 10,
    },
    {
      //cafe cremoso
      img: <img src={imagens.cremoso} alt="cremoso" id="imagem" />,
      id: 3,
      tipo: <span id="tipo">Tradicional</span>,
      name: 'Expresso Cremoso',
      desri: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      qnt: 10,
    },
    {
      //cafe gelado
      img: <img src={imagens.gelado} alt="gelado" id="imagem" />,
      id: 4,
      tipo: <span id="tipo">Tradicional</span>,
      tipo2: (
        <span id="tipo" className="ajusteTipo">
          Gelado
        </span>
      ),
      name: 'Expresso Gelado',
      desri: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      qnt: 10,
    },
    {
      //cafe comleite
      img: <img src={imagens.comleite} alt="comleite" id="imagem" />,
      id: 5,
      tipo: <span id="tipo">Tradicional</span>,
      tipo2: (
        <span id="tipo" className="ajusteTipo">
          Com leite
        </span>
      ),
      name: 'Café com Leite',
      desri: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      qnt: 10,
    },
    {
      //cafe latte
      img: <img src={imagens.latte} alt="latte" id="imagem" />,
      id: 6,
      tipo: <span id="tipo">Tradicional</span>,
      tipo2: (
        <span id="tipo" className="ajusteTipo">
          Com leite
        </span>
      ),
      name: 'Latte',
      desri: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      qnt: 10,
    },
    {
      //cafe capuccino
      img: <img src={imagens.capuccino} alt="capuccino" id="imagem" />,
      id: 7,
      tipo: <span id="tipo">Tradicional</span>,
      tipo2: (
        <span id="tipo" className="ajusteTipo">
          Com leite
        </span>
      ),
      name: 'Capuccino',
      desri: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      qnt: 10,
    },
    {
      //cafe macchiato
      img: <img src={imagens.macchiato} alt="macchiato" id="imagem" />,
      id: 8,
      tipo: <span id="tipo">Tradicional</span>,
      tipo2: (
        <span id="tipo" className="ajusteTipo">
          Com leite
        </span>
      ),
      name: 'Macchiato',
      desri: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      qnt: 10,
    },
    {
      //cafe mocca
      img: <img src={imagens.mocca} alt="mocca" id="imagem" />,
      id: 9,
      tipo: <span id="tipo">Tradicional</span>,
      tipo2: (
        <span id="tipo" className="ajusteTipo">
          Com leite
        </span>
      ),
      name: 'Mocaccino',
      desri: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      qnt: 10,
    },
    {
      //cafe chocolatequente
      img: (
        <img src={imagens.chocolatequente} alt="chocolatequente" id="imagem" />
      ),
      id: 10,
      tipo: <span id="tipo">Tradicional</span>,
      tipo2: (
        <span id="tipo" className="ajusteTipo">
          Com leite
        </span>
      ),
      name: 'Chocolate quente',
      desri: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      qnt: 10,
    },
    {
      //cafe cubano
      img: <img src={imagens.cubano} alt="cubano" id="imagem" />,
      id: 11,
      tipo: <span id="tipo">Especial</span>,
      tipo2: (
        <span id="tipo" className="ajusteTipo">
          Alcolico
        </span>
      ),
      tipo3: (
        <span id="tipo" className="ajusteTipo">
          Gelado
        </span>
      ),
      name: 'Cubano',
      desri: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      qnt: 10,
    },
    {
      //cafe havaiano
      img: <img src={imagens.havaiano} alt="havaiano" id="imagem" />,
      id: 12,
      tipo: <span id="tipo">Especial</span>,
      name: 'Havaiano',
      desri: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      qnt: 10,
    },
    {
      //cafe arabe
      img: <img src={imagens.arabe} alt="arabe" id="imagem" />,
      id: 13,
      tipo: <span id="tipo">Especial</span>,
      name: 'Árabe',
      desri: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      qnt: 10,
    },
    {
      //cafe irlandes
      img: <img src={imagens.irlandes} alt="irlandes" id="imagem" />,
      id: 14,
      tipo: <span id="tipo">Especial</span>,
      tipo2: (
        <span id="tipo" className="ajusteTipo">
          Alcolico
        </span>
      ),
      name: 'Irlandês',
      desri: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      qnt: 10,
    },
  ];

  return (
    <article id="cont-article-cafe">
      <ul id="cont-ul">
        {cafesData.map((cafes) => (
          <li id="cont-li">
            <Cafes
              img={cafes.img}
              tipo={cafes.tipo}
              tipo2={cafes.tipo2}
              tipo3={cafes.tipo3}
              descricao={cafes.desri}
              name={cafes.name}
              price={cafes.price}
              qnt={cafes.qnt}
              key={cafes.id}
            />
          </li>
        ))}
      </ul>
  
    </article>
  );
}

export default CafesList;
