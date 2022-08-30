import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks } from "../../actions/index.js";

//COMPONENTES
import NavBar from "../NavBar/NavBar.jsx";
import NavBar2 from "../NavBar2/NavBar2.jsx";
import Footer from "../Footer/Footer.jsx";
import Book from "../Book/Book.jsx";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import AuthorFilter from "../AuthorFilter/AuthorFilter";
import Paginated from "../Paginated/Paginated.jsx";

//CSS
import styles from "./Home.module.css";
import banner from "./banner.jpg";

export default function Home() {
    const dispatch = useDispatch();
    const allBooks = useSelector((state) => state.allBooks);

    const location = useLocation();
    const search = location.state ? location.state.search : null;

    useEffect(() => {
        !search && dispatch(getAllBooks());
    }, [dispatch, search]);

    console.log("allBooks", allBooks);

    return (
        <div className={styles.home}>
            <NavBar />
            <NavBar2 />

            {allBooks.length > 0 ? (
                <>
                    <div className={styles.banner}>
                        <img src={banner} alt="banner" />
                    </div>

                    <div className={styles.ordenamientos}>
                        {/* ACA VA LA LOGICA DEL ORDENAMIENTO */}
                        ACA VAN LOS ORDENAMIENTOS
                    </div>

                    <div className={styles.paginado}>
                        <Paginated />
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
                                        stock={b.currentStock}
                                    />
                                ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className={styles.ErrorSearch}>
                    <h3 className={styles.errorH3}>
                        NO SE ENCONTRO NADA CON ESE NOMBRE
                    </h3>
                    <h3>INTENTE NUEVAMENTE</h3>
                </div>
            )}

            <Footer />
        </div>
    );
}
