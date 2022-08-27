import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks } from "../../actions/index.js";

//COMPONENTES
import NavBar from "../NavBar/NavBar.jsx";
import NavBar2 from "../NavBar2/NavBar2.jsx";
import Footer from "../Footer/Footer.jsx";
import Book from "../Book/Book.jsx";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import AuthorFilter from "../AuthorFilter/AuthorFilter";

//CSS
import styles from "./Home.module.css";
import banner from "./banner.jpg";

export default function Home() {
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.allBooks);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  console.log("allBooks", allBooks);

  return (
    <div className={styles.home}>
      <NavBar />
      <NavBar2 />

      <div className={styles.banner}>
        <img src={banner} alt="banner" />
      </div>

      <div className={styles.ordenamientos}>
        {/* ACA VA LA LOGICA DEL ORDENAMIENTO */}
        ACA VAN LOS ORDENAMIENTOS
      </div>

      <div className={styles.paginado}>
        {/* ACA VA LA LOGICA DEL PAGINADO */}
        PAGINADO
      </div>

      <div className={styles.cuerpo}>

        <div className={styles.filtro}>
          <CategoryFilter />
          <AuthorFilter />
        </div>

        <div className={styles.cards}>
          {allBooks &&
            allBooks.map((b) => (
              <Book
                key={b.id}
                id={b.id}
                title={b.title}
                authors={b.authors}
                image={b.image}
                price={b.price}
              />
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
