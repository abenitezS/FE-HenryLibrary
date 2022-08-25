import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameBooks } from "../../actions";
import { useHistory } from "react-router-dom";

//REACT ICONS
import { RiSearch2Line } from "react-icons/ri";

//CSS
import styles from "./SearchBar.module.css"






export default function SerachBar() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");





  const handleChange = (event) => {
    setSearch(event.target.value.trim());
  };


  const handledSubmit = (event) => {
    event.preventDefault();
    dispatch(getNameBooks(search))
    setSearch("")
    history.push("/home");
  };



  return (
    <>
      <form className={styles.conteiner} onSubmit={handledSubmit}>
        <input className={styles.input}
          type={"text"}
          placeholder="Busca un Libro..."
          onChange={handleChange}
        />

        <button className={styles.button} title="Search" type="submit">
          <RiSearch2Line className={styles.icono} size="1.5rem" />
        </button>
        
      </form>
    </>
  );
}
