import { useEffect, useState } from 'react';
import { storage } from '../../firebase/config';
import { ref, getDownloadURL } from 'firebase/storage';
import PropTypes from "prop-types";


const Img_event = ({imgUrl}) => {
    const [imageUrl, setImageUrl] = useState(null);

    console.log(imgUrl)

    useEffect(() => {
        const fetchImageUrl = async () => {
        // Reemplaza 'ruta/a/tu/carpeta/imagen.jpg' con la ruta exacta de tu archivo en Firebase Storage
        const imageRef = ref(storage, `eventos_img/${imgUrl}.png`);
        
        try {
            const url = await getDownloadURL(imageRef);
            setImageUrl(url);
        } catch (error) {
            console.error("Error al obtener la URL de la imagen:", error);
        }
        };

        fetchImageUrl();
    }, [imgUrl]);

    
    return (
        <img src={imageUrl} alt="" />
    )
    
}
Img_event.propTypes = {
    imgUrl:PropTypes.string.isRequired,
};
export default Img_event