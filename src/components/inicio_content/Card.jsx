import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";
import "../styles/Card.css";

const Card = ({ data }) => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchImageUrl = async () => {
            console.log(data.titulo)
            const imageRef = ref(storage, `platos/${data.titulo}`); // Ajusta la extensión de la imagen si es diferente
            try {
                const url = await getDownloadURL(imageRef);
                setImageUrl(url);
            } catch (error) {
                console.error("Error al obtener la URL de la imagen: ", error);
            }
        };

        fetchImageUrl();
    }, [data.titulo]);

    console.log("soy el guardado"+imageUrl);

    return (
        <div className="card">
            <div className="titulo">
                <h3>{data.titulo}</h3>
            </div>
            <img src={imageUrl} alt={data.titulo} className="imagen" />
            <div className="detalles">
                <div className="precio">
                    <p>$ {data.precio}</p>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
        data:PropTypes.object.isRequired,
    };

export default Card;