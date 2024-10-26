import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import "../styles/Modal_menu.css";

const Modal_menu = ({ datos, image, onClose }) => {
    return ReactDOM.createPortal (
        <div className="modal_select" onClick={onClose}>
            <div className="cont_modal" onClick={(e)=> e.stopPropagation()}>
                <div className="title_modal">
                    <button className="close-button" onClick={onClose}>X</button>
                    <h2>{datos.titulo}</h2>
                </div>
                <div className="img_and_descript">
                    <img src={image} alt={datos.titulo} />
                    <ul>
                        {
                        datos.ingredientes.map((item, index)=>(
                            <li key={index}>{item}</li>
                        ))
                        }
                    </ul>

                </div>
                
            </div>
        </div>,
        document.body
    );
};

Modal_menu.propTypes = {
    datos: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired, // Indica que `onClose` es requerido y es una función
};

export default Modal_menu;