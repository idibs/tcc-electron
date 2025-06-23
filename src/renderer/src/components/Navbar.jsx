import { FaTruck, FaHome, FaBoxes } from 'react-icons/fa'
import { IoPerson } from "react-icons/io5"
import { FaCartShopping, FaMoneyCheckDollar } from "react-icons/fa6"
import Button from "./ButtonNav.jsx"

export default function Navbar(){
    let url = ""

    return(
            <div className="fixed w-24 text-center text-white bg-[#06630b] h-full flex flex-col justify-center">
                <Button icon={<FaHome />} text={"Home"} link={url + "/"}/>
                <Button icon={<FaBoxes />} text={"Estoque"} link={url + "/estoque"}/>
                <Button icon={<IoPerson />} text={"Funcionários"} link={url + "/funcionario"}/>
                <Button icon={<FaMoneyCheckDollar />} text={"Pagamentos"} link={url + "/pagamento"}/>
                <Button icon={<FaCartShopping />} text={"Pedidos"} link={url + "/pedido"}/>
                <Button icon={<FaTruck />} text={"Entregas"} link={url + "/entrega"}/>       
            </div>
    )
}