import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";
import "../styles/Card.css";
import Modal_menu from "../menu_content/Modal_menu";

const Cards = ({ data }) => {
    const [imageUrl, setImageUrl] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        const fetchImageUrl = async () => {
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

    const formatearPrecio = (precio) => {
        const numero = Number(precio);
        if (isNaN(numero)) return '0'; // Manejar casos donde el precio no es un número
    
        // Convertir a string y usar regex para formatear
        return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const handleCardClick = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };
    
    return (
        <>
            <div className="card" onClick={handleCardClick}>
                <div className="titulo">
                    <h3>{data.titulo}</h3>
                </div>
                <img src={imageUrl} alt={data.titulo} className="imagen" />
                <div className="detalles">
                    <div className="precio">
                        <p>$ {formatearPrecio(data.precio)}</p>
                    </div>
                </div>
                
            </div>

            <div className="modal_center">
                {isModalVisible && (
                        <Modal_menu datos={data} image={imageUrl} onClose={handleCloseModal} />
                )}
            </div>
            
        </>
    );
};

Cards.propTypes = {
        data:PropTypes.object.isRequired,
    };

export default Cards;