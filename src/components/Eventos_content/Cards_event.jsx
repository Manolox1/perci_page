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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab omnis quaerat quidem? Velit magnam, adipisci harum eius deleniti, aliquid veritatis ducimus molestias quam corrupti, nostrum dolorem laudantium totam incidunt!</p>
                    </div>
                </div>
                <div className="card_event" id="cards" onClick={girar}>
                    <div className="front">
                        <Img_event imgUrl={"Bebidas-perci"}/>
                    </div>
                    <div className="back">
                        <h2>Bebidas</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab omnis quaerat quidem? Velit magnam, adipisci harum eius deleniti, aliquid veritatis ducimus molestias quam corrupti, nostrum dolorem laudantium totam incidunt!</p>
                    </div>
                </div>
                <div className="card_event" id="cards" onClick={girar}>
                    <div className="front">
                        <Img_event imgUrl={"Pasteleria-perci"}/>
                    </div>
                    <div className="back">
                        <h2>Pasteleria</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab omnis quaerat quidem? Velit magnam, adipisci harum eius deleniti, aliquid veritatis ducimus molestias quam corrupti, nostrum dolorem laudantium totam incidunt!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards_event