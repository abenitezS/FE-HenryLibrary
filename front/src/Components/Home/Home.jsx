import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks, getBooksCount } from "../../actions/index.js";

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
    const [page, setPage] = useState(0);
    const itemsPorPagina = 12;
    const offset = page * itemsPorPagina;
    const limit = offset + itemsPorPagina;

    useEffect(() => {
        // dispatch(getBooksCount());
        !search && dispatch(getAllBooks());
    }, [dispatch, search]);

    console.log("allBooks", allBooks);
    const currentBooks = allBooks.slice(offset, limit);

    // const handleGetAllBooks = (page) => {
    //     dispatch(getAllBooks(page))
    // }

    return (
        <div className={styles.home}>
            <NavBar />
            <NavBar2 />

            {currentBooks.length > 0 ? (
                <>
                    <div className={styles.banner}>
                        <img src={banner} alt="banner" />
                    </div>

                    <div className={styles.ordenamientos}>
                        {/* ACA VA LA LOGICA DEL ORDENAMIENTO */}
                        ACA VAN LOS ORDENAMIENTOS
                    </div>

                    <div className={styles.paginado}>
                    <Paginated
                        page={page}
                        totalItems={allBooks.length}
                        itemsPorPagina={itemsPorPagina}
                        setPage={setPage}
                    />
                    </div>

                    <div className={styles.cuerpo}>
                        <div className={styles.filtro}>
                            <CategoryFilter />
                            <AuthorFilter />
                        </div>

                        <div className={styles.cards}>
                            {currentBooks &&
                                currentBooks.map((b) => (
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
