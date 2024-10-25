import Opciones_box from "./inicio_content/Opciones_box"
import Footer from "./inicio_content/Footer"
import Slider from "./inicio_content/Slider"


const Inicio = () => {
  return (
    <div className="Inicio">
      <Slider></Slider>
      <Opciones_box></Opciones_box>
      <Footer></Footer>
    </div>
  )
}

export default Inicio