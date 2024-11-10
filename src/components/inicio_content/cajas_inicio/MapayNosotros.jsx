import Img_event from "../../Eventos_content/Img_event"


const MapayNosotros = () => {

    
    return (
        <div className="mapa-nosotros">
                <div className="caja-mapa">
                    <h1>Donde Estamos?</h1>
                    <p>Tratado del Pilar y colectora Oeste de Panamericana Ramal Pilar.</p>
                    <div className="mapa"></div>
                </div>
                <div className="caja-mapa">
                    <h1>NUESTROS CONTACTOS</h1>
                    <div className="contactos">
                        <div className="gmail icono">
                            <a href="mailto:hola.perci@gmail.com?subject=Consulta%20de%20precios" target="_blank" rel="noopener noreferrer">
                                <Img_event imgUrl="gmail"/>
                                <p>perci@gmail.com</p>
                            </a>
                        </div>
                        <div className="wsp icono">
                            <a href="https://wa.me/541140835332...?text=Consultas" target="_blank"><Img_event imgUrl="social"/>
                            <p>11 4083 5332</p>
                            </a>
                        </div>
                        <div className="instagram icono">
                            <a href="https://www.instagram.com/percipilar/" target="_blank"><Img_event imgUrl="instagram"/>
                            <p>@perciPilar</p></a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MapayNosotros