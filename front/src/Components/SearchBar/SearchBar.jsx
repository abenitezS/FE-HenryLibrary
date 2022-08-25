import React from "react";
import { RiSearch2Line } from "react-icons/ri";

export default function SerachBar() {
  const handledSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handledSubmit}>
        <input
          type={"text"}
          className="input"
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
        <button title="Search" type="submit">
          <RiSearch2Line size="1.5rem" />
        </button>
      </form>
    </>
  );
}
