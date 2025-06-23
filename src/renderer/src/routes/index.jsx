import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import HomeEst from "../pages/Home-Est"
import HomePess from "../pages/Home-Pess"
import Pagamento from "../pages/Pagamento"
import Pedido from "../pages/Pedido"
import Entrega from "../pages/Entrega"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estoque" element={<HomeEst />} />
      <Route path="/pessoas" element={<HomePess />} />
      <Route path="/pagamento" element={<Pagamento />} />
      <Route path="/pedido" element={<Pedido />} />
      <Route path="/entrega" element={<Entrega />} />
      {/* Add more routes as needed */}
    </Routes>
  )
}