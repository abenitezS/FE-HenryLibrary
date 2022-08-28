import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks, getBooksCount, setPage } from "../../actions";

//CSS
import styles from "./Paginated.module.css";

export default function Paginated() {
    const dispatch = useDispatch();
    const { cantBooks, page: actualPage } = useSelector((state) => state);
    const itemsPorPagina = 10;
    const cantPaginas = Math.ceil(cantBooks / itemsPorPagina) - 1;

    useEffect(() => {
        dispatch(getBooksCount());
    }, [dispatch, cantBooks]);

    function handleChangePage(page) {
        dispatch(setPage(page));
        dispatch(getAllBooks(page));
    }

    return (
        <div>
            <button
                disabled={actualPage === 0}
                className={actualPage > 0 ? styles.Btn : styles.BtnDisabled}
                key={"prev"}
                onClick={() => handleChangePage(actualPage - 1)}
            >
                {"<"}
            </button>

            <button
                disabled={actualPage === cantPaginas}
                className={
                    actualPage < cantPaginas ? styles.Btn : styles.BtnDisabled
                }
                key={"next"}
                onClick={() => handleChangePage(actualPage + 1)}
            >
                {">"}
            </button>
        </div>
    );
}
