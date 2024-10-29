import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import Cards from "./inicio_content/Cards";
import Card_menu from "./inicio_content/Card_menu";
import "./styles/Menu.css";

const Menu = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  

  useEffect(() => {
      const unsub = onSnapshot(collection(db, "platos"), (snapshot) => {
      const productosData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProductos(productosData);
      setIsLoading(false);
    });
    

    return () => unsub();
  }, []);

  // Lista de categorías disponibles
  const categorias = ["Hamburguesas","Ensaladas","Entrantes", "Sandwiches","Promos","Revueltos","Bebidas", "Tortas", "Milanesas"];

  // Filtrar productos según la categoría seleccionada
  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(producto => producto.categoria === categoriaSeleccionada)
    : [];

    const handleImageLoad = () => {
      setLoadedImages((prev) => prev + 1);
    };

  const allImagesLoaded = loadedImages >= productosFiltrados.length;

  return (
    <>

      {(isLoading || !allImagesLoaded) && (
        <div className="loading-screen"></div>
      )}
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
          <div className="categoria-selector"
          style={{
            display: isLoading || !allImagesLoaded ? "none" : "",
          }}>
            {categorias.map((categoria) => (
              <div
                key={categoria}
                className={`categoria-item ${categoriaSeleccionada === categoria ? 'active' : ''}`}
                onClick={() => setCategoriaSeleccionada(categoria)}
              >
                <Card_menu data={categoria} onLoad={handleImageLoad}></Card_menu>
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
            <Cards key={p.id} data={p}/>
          ))}
        </div>

        
      </div>
    </>
  );
}

export default Menu;
