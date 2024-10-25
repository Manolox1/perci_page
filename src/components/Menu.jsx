import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import Cards from "./inicio_content/Cards";
import Card_menu from "./inicio_content/Card_menu";
import "./styles/Menu.css";

const Menu = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "platos"), (snapshot) => {
      const productosData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProductos(productosData);
    });

    return () => unsub();
  }, []);

  // Lista de categorías disponibles
  const categorias = ["Hamburguesas","Ensaladas","Entrantes", "Sandwiches","Promos","Revueltos","Bebidas", "Tortas"];

  // Filtrar productos según la categoría seleccionada
  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(producto => producto.categoria === categoriaSeleccionada)
    : [];

  return (
    <>
      <div className="btn-reset">
        {categoriaSeleccionada && (
            <button className="reset-button" onClick={() => setCategoriaSeleccionada("")}>
              Volver
            </button>
        )}
      </div>
      
      <div className="menu-conteiner">
        {/* Botón para resetear la selección de categoría y volver a mostrar el selector */}
        
        {/* Mostrar el selector de categorías solo si no se ha seleccionado ninguna */}
        {!categoriaSeleccionada && (
          <div className="categoria-selector">
            {categorias.map((categoria) => (
              <div
                key={categoria}
                className={`categoria-item ${categoriaSeleccionada === categoria ? 'active' : ''}`}
                onClick={() => setCategoriaSeleccionada(categoria)}
              >
                <Card_menu data={categoria}></Card_menu>
              </div>
            ))}
            <div
              className={`categoria-item ${categoriaSeleccionada === "" ? 'active' : ''}`}
              onClick={() => setCategoriaSeleccionada("")}
            >
              
            </div>
          </div>
        )}

        {/* Contenedor de las tarjetas filtradas */}
        <div className="card-conteiner">
          {productosFiltrados.map((p) => (
            <Cards key={p.id} data={p} />
          ))}
        </div>

        
      </div>
    </>
  );
}

export default Menu;
