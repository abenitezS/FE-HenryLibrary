import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksByAuthor } from "../../actions";
import { useParams, NavLink } from "react-router-dom";

//COMPONENTES
import NavBar from "../NavBar/NavBar";
import NavBar2 from "../NavBar2/NavBar2";
import Footer from "../Footer/Footer";

//CSS
import styles from "./CardsAuthor.module.css"

export default function CardsAuthor() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const allBooks = useSelector((state) => state.allBooks);

  console.log(allBooks);

  useEffect(() => {
    dispatch(getBooksByAuthor(id));
  }, [dispatch, id]);



  return (
    <div className={styles.container}>
        <NavBar />
        <NavBar2 />



      {allBooks?.map((a) => (

        <div className={styles.CardsAuthor} key={a.id}>
          <div className={styles.image}>
          <NavLink to={`/catalog/detail/${a.id}`}>
            <img className={styles.img} src={a.image} alt="imagenDelLibro" />
          </NavLink>
          </div>

          <div className={styles.info}>
          <h2 className={styles.titulo}>{a.title}</h2>
          <h4 className={styles.infoItem}>{a.authors && a.authors.map(a => `Authores: ${a.name}`)}</h4>


          <div className={styles.pago}> 

          <h4 className={styles.precio}>$ {a.price}</h4>
      
         {/* Renderizado condicional verificando si hay stock disponible */}
          {a.stock > 0 ? ( 
            <button>Agregar al carrito</button>
          ) : (
            <div>
              <button disabled={true}>Sin stock</button>
            </div>
          )}
        </div>
        </div>
        </div>
      ))}



      <Footer />
    </div>
  );
}
