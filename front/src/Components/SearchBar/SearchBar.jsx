import React from "react";

//REACT ICONS
import { RiSearch2Line } from "react-icons/ri";

//CSS
import styles from "./SearchBar.module.css"


export default function SerachBar() {
  const handledSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form className={styles.conteiner} onSubmit={handledSubmit}>
        <input className={styles.input}
          type={"text"}
          placeholder="Busca un Libro..."
          onChange={handleChange}
        />
        {/* 
        // Se va a utilizar para la prediccion de busqueda de ser necesario
        <ul>
          {resultsSearch.length
            ? resultsSearch.map((r) => <li>{r.name}</li>)
            : null}
        </ul> */}
        <button className={styles.button} title="Search" type="submit">
          <RiSearch2Line className={styles.icono} size="1.5rem" />
        </button>
      </form>
    </>
  );
}
