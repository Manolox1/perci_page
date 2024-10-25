import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { storage } from "../../firebase/config";
import { ref, getDownloadURL } from "firebase/storage";

const Card_menu = ({data}) => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchImageUrl = async () => {
            const imageRef = ref(storage, `menu_select/${data}.jpeg`); // Ajusta la extensión de la imagen si es diferente
            try {
                const url = await getDownloadURL(imageRef);
                setImageUrl(url);
            } catch (error) {
                console.error("Error al obtener la URL de la imagen: ", error);
            }
        };

        fetchImageUrl();
    }, [data]);

    return (
        <div className="cards">
            <div className="titulo">
                    <h3>{data}</h3>
            </div>
            <img src={imageUrl} alt={data} className="imagen-select" />
        </div>
    )
}

Card_menu.propTypes = {
    data:PropTypes.string.isRequired,
};

export default Card_menu