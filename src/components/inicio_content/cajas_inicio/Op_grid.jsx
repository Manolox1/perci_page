import { useEffect, useState } from "react";
import { storage } from "../../../firebase/config";
import { ref, getDownloadURL } from "firebase/storage";
import "./Op_grid.css"

const Op_grid = () => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchImageUrl = async () => {
            const imageRef = ref(storage, `cajas_img/caja.jpeg`); // Ajusta la extensión de la imagen si es diferente
            try {
                const url = await getDownloadURL(imageRef);
                setImageUrl(url);
            } catch (error) {
                console.error("Error al obtener la URL de la imagen: ", error);
            }
        };

        fetchImageUrl();
    }, []);
    return (
        <div className="opciones">
            <div className="grid_op">
                <div className="caja">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="caja">
                    <div className="texto">
                        <h1>Plato <br />sugerido</h1>
                        <p>Una opción más que se suma a todos los platos que ofrece nuestro menú. Enterate de los platos sugeridos de cada día en las stories de nuestras redes sociales!</p>
                        <p>Más info en nuestro <a href="https://www.instagram.com/percipilar/"> Instagram</a></p>
                    </div>
                </div>
                <div className="caja">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="caja">
                    <div className="texto">
                        <h1>VIANDAS</h1>
                        <p>Para empresas, oficinas y particulares, Perci ofrece el servicio de Viandas para poder organizar las comidas del mes con anticipación y tener la seguridad de disfrutar cada día un plato elaborado. Presupuestos armados a medida, de acuerdo a la cantidad de personas.</p>
                        <p>Por consultas y presupuestos <a href="">hola@gmail.com</a></p>
                    </div>
                </div>
                <div className="caja">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="caja">
                    <div className="texto">
                        <h1>EVENTOS <br />AWAY</h1>
                        <ol>
                            <li>DEFINÍS cantidad de comensales.</li>
                            <li>ELEGÍS si querés ternera braseada sóla o lo combinás con picada, empanadas, pastelería y/o bebida.</li>
                            <li>PEDÍS con un mínimo de 48 horas de anticipación.</li>
                            <li>RETIRÁS todo tu pedido por Perci!</li>
                        </ol>
                    </div>
                </div>
                <div className="caja">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="caja">
                    <div className="texto">
                        <h1>DESAYUNOS,  ALMUERZOS, MERIENDAS Y CENAS!</h1>
                    </div>
                </div>
                <div className="caja">
                    <img src={imageUrl} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Op_grid