import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks, getBooksCount, setPage } from "../../actions";
import { Button, ButtonGroup } from "@chakra-ui/react";

//CSS
import styles from "./Paginated.module.css";

export default function Paginated() {
    const dispatch = useDispatch();
    const { cantBooks, page: actualPage } = useSelector((state) => state);
    const itemsPorPagina = 10;
    const cantPaginas = Math.ceil(cantBooks / itemsPorPagina) - 1;

    const pageNumbers = [];

    useEffect(() => {
        dispatch(getBooksCount());
    }, [dispatch, cantBooks]);

    function handleChangePage(page) {
        dispatch(setPage(page));
        dispatch(getAllBooks(page));
    }

    function paginate(array, pageActual, cantPaginas) {
        let start;
        let end;
        // if (pageActual - 2 >= 0){
        //     start = pageActual - 2;
        //     // console.log("op1")
        // } 
        // else if (pageActual - 1 >= 0){
        //     start = pageActual - 1;
        //     // console.log("op2")
        // } 
        // else{
        //     start = pageActual;
        //     // console.log("op3")
        // } 

        // if (pageActual + 5 <= cantPaginas){
        //     end = pageActual + 5;
        //     // console.log("op4")
        // } 
        // else if (pageActual + 4 <= cantPaginas){
        //     end = pageActual + 4;
        //     // console.log("op5")
        // } 
        // else {
        //     end = cantPaginas;
        //     // console.log("op6")
        // } 
        // if (start + 5 < end) end = start + 5;

        // console.log(start, end, actualPage);
        start = actualPage;
        if (pageActual -1 >= 0) start = actualPage - 1;
        if (pageActual -2 >= 0) start = actualPage - 2;

        end = cantPaginas;
        if (pageActual -1 >= 0) start = actualPage - 1;
        if (pageActual -2 >= 0) start = actualPage - 2;

        
        return array.slice(pageActual-2<0, end);
    }

    for (let i = 0; i <= cantPaginas; i++) {
        pageNumbers.push(i);
    }

    let paginasVisibles = paginate(pageNumbers, actualPage, cantPaginas);
    

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
                                disabled={i === actualPage}
                                key={i}
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
