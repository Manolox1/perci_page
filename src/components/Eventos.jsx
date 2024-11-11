import Cards_event from "./Eventos_content/Cards_event"
import Events_title from "./Eventos_content/Events_title"
import Footer from "./inicio_content/Footer"
import MasInfo from "./Eventos_content/MasInfo"

const Eventos = () => {
    return (
        <div>
            <Events_title/>
            <Cards_event/>
            <MasInfo/>
            <Footer/>
        </div>
    )
}

export default Eventos