import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getBooksCount } from '../../actions';

export default function Paginated() {
    const dispatch = useDispatch();
    const cantBooks = useSelector((state) => state.cantBooks);
    useEffect(() => {
        dispatch(getBooksCount());
      }, [dispatch, cantBooks]);
  return (
    <div>Paginado {cantBooks}</div>
  )
}
