import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";
import PropTypes from "prop-types";


const ListImg = ({imgData}) => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchImageUrl = async () => {
            const imageRef = ref(storage, `imagenes_inicio/${imgData}`); // Ajusta la extensión de la imagen si es diferente
            try {
                const url = await getDownloadURL(imageRef);
                setImageUrl(url);
            } catch (error) {
                console.error("Error al obtener la URL de la imagen: ", error);
            }
        };

        fetchImageUrl();
    }, [imgData]);

    return (
        <li><img src={imageUrl} alt="" /></li>
    )

    
    
}
ListImg.propTypes = {
    imgData:PropTypes.string.isRequired,
};

export default ListImg