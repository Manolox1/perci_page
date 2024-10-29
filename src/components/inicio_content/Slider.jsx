import "../styles/Slider.css"
import ListImg from "./ListImg";
const Slider = () => {
    const fondos =["fondo(1).jpeg", "fondo(2).jpeg", "fondo.jpeg"]
    return (
        <div className="conteiner-slider">
            <div className="slider-frame">
                <ul>
                    {
                        fondos.map((img, i)=>(
                            <ListImg key={i} imgData={img}/>
                        ))
                    }
                </ul>
                
            </div>
            
        </div>
    );
}

export default Slider