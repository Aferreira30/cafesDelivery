import {BrowserRouter, Routes, Route} from  'react-router-dom';
import Home from '../Home';
import Pedido from '../Completar-Pedido/Pedido'
import PedidoAceito from '../PedidoAceito/PedidoAceito';

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completarpedido" element={<Pedido />} />
        <Route path="/pedidoaceito" element={<PedidoAceito />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routers;