import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar2.module.css";

export default function NavBar2() {
  return (
    <nav className={styles.container}>
      <h3 className={styles.h3}>
        <NavLink to="/home">Categorias</NavLink>
      </h3>
      <h3 className={styles.h3}>
        <NavLink to="/nuevoLibro">Nuevo Libro</NavLink>
      </h3>
      <h3 className={styles.h3}>
        {/* <NavLink to="/nuevoLibroChakra">Nuevo Libro Chakra</NavLink> */}
      </h3>
      <h3 className={styles.h3}>
        <NavLink to="">Sobre Nosotros</NavLink>
      </h3>
      <h3 className={styles.h3}>
        <NavLink to="">Ofertas</NavLink>
      </h3>
    </nav>
  );
}
