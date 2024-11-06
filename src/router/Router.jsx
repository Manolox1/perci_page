
import { Link, Route, Routes } from "react-router-dom";

import Inicio from "../components/Inicio";
import Menu from "../components/Menu";
import "./Header.css"
import Eventos from "../components/Eventos";
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase/config";

const Router = () => {
    const [imageUrl, setImageUrl] = useState(null);

    console.log(imageUrl)
    useEffect(()=>{
        const fetchLogo = async ()=>{
            const imgRef = ref(storage, "logo.webp")

            try{
                const url = await getDownloadURL(imgRef);
                setImageUrl(url);
            }catch(error){
                console.log(error)
            }
        };

        fetchLogo()
    },[])


    return (
        <div>
            <div className="Header">
                <div className="logo">
                    <div className="img">
                        <img src={imageUrl} alt="" />
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
                <Route path="/eventos" element={<Eventos/>}/>
            </Routes>
        </div>
    )
}

export default Router