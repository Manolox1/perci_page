import "./Cards_event.css"
import Img_event from "./Img_event"


const Cards_event = () => {



    function girar(e) {
        e.preventDefault()
        const carta = e.currentTarget
        if (carta.children[0].className =="front" && carta.children[1].className =="back"){
            carta.children[0].className = "giro_front"
            carta.children[1].className = "giro_back"
        }else{
            carta.children[0].className = "front"
            carta.children[1].className = "back"
        }
    }

    return (
        <div className="card_event_container">
            
            <div className="grid_card_event">
                <div className="card_event" id="cards" onClick={girar}>
                    <div className="front">
                        <Img_event imgUrl={"Picada-perci"}/>
                    </div>
                    <div className="back">
                        <h2>Picada</h2>
                        <ul>
                            <li>Salame, jamón crudo, jamón cocido, lomito horneado,  queso Azul, queso Tybo, queso Fontina, Leberwurst y aceitunas.</li>
                            <li>Panes Saborizados y tostaditas.</li>
                            <h3>Empanadas</h3>
                            <li>Carne, Jamón y queso, y Queso y cebolla.</li>
                        </ul>
                    </div>
                </div>
                <div className="card_event" id="cards" onClick={girar}>
                    <div className="front">
                        <Img_event imgUrl={"Bebidas-perci"}/>
                    </div>
                    <div className="back">
                        <h2>Bebidas</h2>
                        <ul>
                            <li>Barril de Cerveza Quilmes de 50lts.</li>
                            <li>Barril de Cerveza Stella Arotis de 20lts.</li>
                            <li>Barril de Cerveza Patagonia de 20lts.</li>
                            <li>Entre otras Cervezas seleccionadas...</li>
                        </ul>
                    </div>
                </div>
                <div className="card_event" id="cards" onClick={girar}>
                    <div className="front">
                        <Img_event imgUrl={"Pasteleria-perci"}/>
                    </div>
                    <div className="back">
                        <h2>Pasteleria</h2>
                        <ul>
                            <li>Torta Oreo</li>
                            <li>3 Mousses</li>
                            <li>Cheese cake con salsa de frutos rojos </li>
                            <li>Chocotorta</li>
                            <li>Crumble de manzana</li>
                            <li>Key Lima pie</li>
                            <li>Marquise</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards_event