import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksId, deleteBookDetail, deleteLogicBook } from "../../actions";
import { NavLink, useParams } from "react-router-dom";

//COMPONENTES
import NavBar from "../NavBar/NavBar";
import NavBar2 from "../NavBar2/NavBar2";
import Footer from "../Footer/Footer";

//CSS
import styles from "./BookDetail.module.css";
import { RiShoppingCart2Fill } from "react-icons/ri";

export default function BookDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const bookDetail = useSelector((state) => state.bookDetail);

    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        dispatch(getBooksId(id));

        console.log("el componente se monto");

        return () => {
            dispatch(deleteBookDetail(id));
            console.log("el componente se desmonto");
            //TENGO QUE DESMONTAR EL COMPONENTE SINO ME QUEDA AHI COLGADO
        };
    }, [dispatch, id]);

    useEffect(() => {
        setIsActive(bookDetail.isActive);
    }, [bookDetail.isActive]);

    function handleClickDeleteLogic(id) {
        dispatch(deleteLogicBook(id));
        dispatch(getBooksId(id));
    }

    function handleClickCarrito() {
        console.log("agregado");
    }

    console.log(bookDetail);

    return (
        <div className={styles.detail}>
            <NavBar />
            <NavBar2 />

            <div className={styles.container}>
                <div className={styles.containerItems}>
                    <div>
                        <img
                            className={styles.img1}
                            src={bookDetail.image}
                            alt="imagen del libro"
                        />
                    </div>

                    <div className={styles.img}>
                        <img
                            className={styles.img2}
                            src={bookDetail.image}
                            alt="imagen del libro"
                        />
                        <img
                            className={styles.img2}
                            src={bookDetail.image}
                            alt="imagen del libro"
                        />
                        <img
                            className={styles.img2}
                            src={bookDetail.image}
                            alt="imagen del libro"
                        />
                    </div>
                </div>

                <div className={styles.conteiner2}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>{bookDetail.title}</h2>

                        {bookDetail.categories &&
                            bookDetail.categories.map((c) => (
                                <h2 className={styles.datos} key={id}>
                                    Genero: {c.name}
                                </h2>
                            ))}

                        {bookDetail.authors &&
                            bookDetail.authors.map((a) => (
                                <h4 className={styles.datos} key={a.id}>
                                    {" "}
                                    Autores:
                                    <NavLink
                                        to=""
                                        activeClassName={styles.active}
                                    >
                                        {" "}
                                        {a.name}
                                    </NavLink>
                                </h4>
                            ))}

                        <h4 className={styles.datos}>
                            Editorial:{" "}
                            {bookDetail.publisher && bookDetail.publisher.name}
                        </h4>
                        <h4 className={styles.datos}>
                            Fecha de Publicacion: {bookDetail.publishedDate}
                        </h4>
                        <h2 className={styles.datos}>
                            Numero de paginas: {bookDetail.pageCount}
                        </h2>
                        <h4 className={styles.datos}>
                            Rating: {bookDetail.rating} puntos
                        </h4>
                        <h4 className={styles.description}>
                            {bookDetail.description}
                        </h4>
                    </div>

                    <div className={styles.compra}>
                        <div className={styles.compra1}>
                            <h2 className={styles.precio}>
                                $ {bookDetail.price}
                            </h2>

                            <div className={styles.stockItems}>
                                <h6 className={styles.stock}>Stock:</h6>
                                <h6 className={styles.NumeroStock}>
                                    {bookDetail.currentStock}
                                </h6>
                            </div>
                        </div>

                        <div className={styles.botones}>
                            <div className={styles.carrito}>
                                <div className={styles.carritoCompra}>
                                    <RiShoppingCart2Fill size="1.5rem" />
                                </div>
                                <button
                                    className={
                                        bookDetail.currentStock > 0
                                            ? styles.boton
                                            : styles.boton +
                                              " " +
                                              styles.botonDisabled
                                    }
                                    disabled={bookDetail.currentStock === 0}
                                    onClick={handleClickCarrito}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                            <div className={styles.borrados}>
                                <button
                                    onClick={() => {
                                        handleClickDeleteLogic(bookDetail.id);
                                    }}
                                    className={
                                        isActive
                                            ? styles.botonBorradoLogico
                                            : styles.botonBorradoLogico +
                                              " " +
                                              styles.botonBorradoLogicoDes
                                    }
                                >
                                    {isActive ? "ACTIVO" : "BORRADO"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.recomendados}>
                ACA VAN NUESTROS RECOMENDADOS{" "}
            </div>
            <Footer />
        </div>
    );
}
