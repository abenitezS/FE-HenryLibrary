import React, {useState} from "react";
import { NavLink } from "react-router-dom";

//COMPONENTES
import SearchBar from "../SearchBar/SearchBar";
import Login from "../Login/Login";

//REACT ICONS
import { VscAccount } from "react-icons/vsc";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";

import styles from "./NavBar.module.css";





export default function NavBar() {


  const [loginModal, setLoginModal] = useState(false)



  function HandleOpenLogin(){

    loginModal === true ?  setLoginModal(false) : setLoginModal(true)
  }


  return (
    <nav className={styles.container}>
      
      <h1 className={styles.h1}><NavLink to="/">Libreria</NavLink></h1>

      <h2 className={styles.h1_1}><NavLink to="/">HENRY</NavLink></h2>

      <div className={styles.search}><SearchBar /></div>

      <div className={styles.iconos}>
        <NavLink to="/favoritos"><MdOutlineFavoriteBorder /></NavLink>
      </div>

      <div className={styles.iconos}>
        <button onClick={() => HandleOpenLogin()} > <VscAccount /></button>         
      </div>

      <div className={styles.iconos}>
        <NavLink to="/carrito"><BsCart2 /></NavLink>
      </div>

      <button>BanderaParaIdioma</button>
      {/* Texto rovisorio hasta que hagamos la funcion de idiomas */}

      
      {loginModal && (
        <Login
        />
      )}

    </nav>


  );
}
