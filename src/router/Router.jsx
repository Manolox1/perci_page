
import { Link, Route, Routes } from "react-router-dom";

import Inicio from "../components/Inicio";
import Menu from "../components/Menu";
import "./Header.css"

const Router = () => {


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
                        <Link to="/" className="btn" >Inicio</Link>
                        <Link to="/menu" className="btn" >Menu</Link>
                        <Link to="/eventos" className="btn" >Eventos</Link>
                    </div>
                </div>
            </div>
            


            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/menu" element={<Menu/>}/>
            </Routes>
        </div>
    )
}

export default Router