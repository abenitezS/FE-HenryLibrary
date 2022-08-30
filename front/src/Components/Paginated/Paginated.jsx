import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks, getBooksCount, setPage } from "../../actions";
import { Button, ButtonGroup } from "@chakra-ui/react";

//CSS
// import styles from "./Paginated.module.css";

export default function Paginated(props) {
    const { totalItems, itemsPorPagina, page: actualPage, setPage } = props;
    // const dispatch = useDispatch();
    // const { cantBooks, page: actualPage } = useSelector((state) => state);
    const cantPaginas = Math.ceil(totalItems / itemsPorPagina) - 1;
    console.log(totalItems, actualPage);
    const pageNumbers = [];

    // useEffect(() => {
    //     dispatch(getBooksCount());
    // }, [dispatch, cantBooks]);

    function handleChangePage(page) {
        // dispatch(setPage(page));
        // getBooks(page);
        setPage(page);
    }

    function paginate(pageActual, cantPaginas) {
        let start;
        let end;
        let numeros = [];

        if (pageActual - 2 >= 0) start = actualPage - 2;
        else if (pageActual - 1 >= 0) start = actualPage - 1;
        else start = actualPage;

        end = start + 4 <= cantPaginas ? start + 4 : cantPaginas;

        if (end - start !== 4) {
            let diferencia = end === actualPage ? 2 : end - actualPage;
            start = start - diferencia < 0 ? 0 : (start -= diferencia);
        }

        for (let i = start; i <= end; i++) {
            numeros.push(i);
        }

        return numeros;
    }

    for (let i = 0; i <= cantPaginas; i++) {
        pageNumbers.push(i);
    }

    let paginasVisibles = paginate(actualPage, cantPaginas);

    return (
        <div>
            <ButtonGroup variant="outline" spacing="2">
                <Button
                    colorScheme="teal"
                    size="xs"
                    onClick={() => handleChangePage(actualPage - 1)}
                    disabled={actualPage === 0}
                >
                    {"<"}
                </Button>

                {paginasVisibles.length > 0 &&
                    paginasVisibles.map((p, i) => {
                        return (
                            <Button
                                colorScheme="teal"
                                size="xs"
                                onClick={() => handleChangePage(p)}
                                disabled={p === actualPage}
                                key={p}
                            >
                                {p + 1}
                            </Button>
                        );
                    })}

                <Button
                    colorScheme="teal"
                    size="xs"
                    onClick={() => handleChangePage(actualPage + 1)}
                    disabled={actualPage === cantPaginas}
                >
                    {">"}
                </Button>
            </ButtonGroup>
        </div>
    );
}
