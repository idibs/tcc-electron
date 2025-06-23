import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import HomeEst from "./pages/Home-Est"
import HomePess from "./pages/Home-Pess"
import Pagamento from "./pages/Pagamento"
import Pedido from "./pages/Pedido"
import Entrega from "./pages/Entrega"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "estoque",
        element: <HomeEst />
      },
      {
        path: "pessoas",
        element: <HomePess />
      },
      {
        path: "pagamento",
        element: <Pagamento />
      },
      {
        path: "pedido",
        element: <Pedido />
      },
      {
        path: "entrega",
        element: <Entrega />
      }
    ]
  }]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

// Use contextBridge
window.ipcRenderer?.on('main-process-message', (_event, message) => {
  console.log(message)
})
