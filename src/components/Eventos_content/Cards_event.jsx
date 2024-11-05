
import "./Cards_event.css"

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
                    <div className="front">A</div>
                    <div className="back">
                        <h1></h1>
                    </div>
                </div>
                <div className="card_event" id="cards" onClick={girar}>
                    <div className="front">A</div>
                    <div className="back">B</div>
                </div>
                <div className="card_event" id="cards" onClick={girar}>
                    <div className="front">A</div>
                    <div className="back">B</div>
                </div>
            </div>
        </div>
    )
}

export default Cards_event