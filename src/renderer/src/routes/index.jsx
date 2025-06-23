import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import HomeEst from "../pages/Home-Est"
import HomeFunc from "../pages/Home-Func"
import Pagamento from "../pages/Pagamento"
import Pedido from "../pages/Pedido"
import Entrega from "../pages/Entrega"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estoque" element={<HomeEst />} />
      <Route path="/funcionario" element={<HomeFunc />} />
      <Route path="/pagamento" element={<Pagamento />} />
      <Route path="/pedido" element={<Pedido />} />
      <Route path="/entrega" element={<Entrega />} />
      {/* Add more routes as needed */}
    </Routes>
  )
}