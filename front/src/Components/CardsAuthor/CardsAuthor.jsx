import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksByAuthor } from "../../actions";
import { useParams, NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import NavBar2 from "../NavBar2/NavBar2";
import Footer from "../Footer/Footer";

export default function CardsAuthor() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const allBooks = useSelector((state) => state.allBooks);

  console.log(allBooks);

  useEffect(() => {
    dispatch(getBooksByAuthor(id));
  }, [dispatch, id]);



  return (
    <div>
        <NavBar />
        <NavBar2 />

      {allBooks?.map((a) => (
        <div key={a.id}>
          <NavLink to={`/catalog/detail/${a.id}`}>
            <img src={a.image} alt="imagenDelLibro" />
          </NavLink>

          <h2>{a.title}</h2>
          <h4>{a.authors && a.authors.map(a => `Authores: ${a.name}`)}</h4>

          <h4>$ {a.price}</h4>

          {/* Renderizado condicional verificando si hay stock disponible */}
          {a.stock > 0 ? (
            <button>Agregar al carrito</button>
          ) : (
            <div>
              <button disabled={true}>Sin stock</button>
            </div>
          )}
        </div>
      ))}

      <Footer />
    </div>
  );
}
