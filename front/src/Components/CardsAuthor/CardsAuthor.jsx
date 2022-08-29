import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksByAuthor } from "../../actions";

export default function CardsAuthor() {
  const dispatch = useDispatch(),

    authors = useSelector((state) => state.authors);

    useEffect(() => {

        dispatch(getBooksByAuthor())

    }, [dispatch])
    

  return (
    <div>

    </div>
  );
}
