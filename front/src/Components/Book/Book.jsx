import React from "react";
import { NavLink } from "react-router-dom";

//CSS
import styles from "./Book.module.css";

export default function Book({ id, title, authors, image, price, stock }) {
  return (
    <div className={styles.book}>
      <NavLink to={`/catalog/detail/${id}`}>
        <img className={styles.img} src={image} alt="imagenDelLibro" />
      </NavLink>

      <p className={styles.title}>{title}</p>
      <h4 className={styles.authors}>{authors && authors.map(a => `Autor: ${a.name}`)}</h4>

      <div className={styles.conteiner}>
        <div className={styles.info}>
          <h4 className={styles.precio}>$ {price}</h4>
        </div>

        {/* Renderizado condicional verificando si hay stock disponible */}
        {stock > 0 ? (
          <div className={styles.pago}>
            <button className={styles.boton}>Agregar al carrito</button>
            {/* Agregarle un icono de carrrito al botton */}
          </div>
        ) : (
          <div>
            <button className={styles.boton} disabled={true}>
              Sin stock
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
