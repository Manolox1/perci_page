import { collection, onSnapshot } from "firebase/firestore"
import { useEffect } from "react"
import { db } from "../firebase/config"
import { useState } from "react"
import Card from "./inicio_content/card"
import "./styles/Menu.css"


const Menu = () => {
  const [productos, setProductos] = useState([])

  useEffect(()=>{
    const unsub= onSnapshot(collection(db,"platos"), (snapshot)=>{
      const productosData = snapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
      }));
      setProductos(productosData)
    });

    return ()=>unsub();
  },[]);

  console.log(productos)

  return (
    <div className="menu-conteiner">
      <div className="card-conteiner">
        {productos.map(p=>(
          <Card key={p.id} data={p}></Card>
        ))}
      </div>
    </div>
  )
}

export default Menu