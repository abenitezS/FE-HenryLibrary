import React from "react";

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
        <input type={"submit"} value={"Search"} />
      </form>
    </>
  );
}
