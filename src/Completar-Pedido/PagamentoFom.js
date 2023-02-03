import React,{useContext} from 'react';
import { PayContext } from '../Context/PayContext';
import imagens from '../imagens/imagens';


function Pagamento(){
  const [pay, setPay] = useContext(PayContext);

 function addCredit(e){
   e.preventDefault();
   let pagamento = 'Cartão de Crédito';
   const credito = setPay(pagamento)
   return credito;
  }
  function addDebit(e){
    e.preventDefault();
    let pagamento2 = 'Cartão de Débito';
    const debito = setPay(pagamento2)
    return debito;
   } 
   function addMoney(e){
    e.preventDefault();
    let pagamento3 = 'Dinheiro';
    const dinheiro = setPay(pagamento3)
    return dinheiro;
   }
  

console.log(pay)
  return (

    <section id='cont-pagamento'>
      <div id='img-texto'>
        <img src={imagens.cifraoRoxo} alt="cifrao" />
        <span id='span-end'>Pagamento</span>
      </div>
        <p id='p-subtitle-end'>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          <div id='btn-pagamento'>
            <button onClick={addCredit} >
                  <div>
                    <img src={imagens.credito} alt="" />
                    <span>Crédito</span>
                  </div>
            </button>
            <button onClick={addDebit}>
                  <div>
                      <img src={imagens.debito} alt="" />
                      <span>Débito</span>
                    </div>
            </button>
           
            <button onClick={addMoney}>
                  <div>
                      <img src={imagens.dinheiro} alt="" />
                      <span>dinheiro</span>
                    </div>
            </button>
          </div>
    </section>

  )
}

export default Pagamento;