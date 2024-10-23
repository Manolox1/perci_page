import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ModalHeader from "./ModalHeader";
import Inicio from "../components/Inicio";
import Menu from "../components/Menu";
import "./Header.css"

const Router = () => {
    const menu=["Hamburguesas","Postres","Vinos","Cervezas y Tragos","Milanesas","Pastas","Carnes","Cafeteria","Promos", "Revueltos", "Bebidas","Sandwiches"];

    const [mostrar, setMostrar] = useState(false);

    return (
        <div>
            <div className="Header">
                <div className="logo">
                    <div className="img">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="objects">
                    <div className="btn_he">
                        <Link to="/" className="btn" onMouseOver={()=>setMostrar(false)}>Inicio</Link>
                        <Link to="/menu" className="btn" onMouseOver={()=>setMostrar(!mostrar)}>Menu</Link>
                        <Link to="/eventos" className="btn" onMouseOver={()=>setMostrar(false)}>Eventos</Link>
                    </div>
                </div>
            </div>
            <div onMouseLeave={()=>setMostrar(!mostrar)} className={mostrar?"mostrar":"ocultar"}>
                <ModalHeader data={menu}/>
            </div>


            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/menu" element={<Menu/>}/>
            </Routes>
        </div>
    )
}

export default Router