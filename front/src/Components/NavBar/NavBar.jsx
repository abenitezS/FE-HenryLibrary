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
import banderaArgentina from "./arg.png"
import banderaEeuu from "./eeuu.png"




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
        <NavLink to="/favoritos"><MdOutlineFavoriteBorder size="1.4rem"/></NavLink>
        
        <button onClick={() => HandleOpenLogin()} > <VscAccount size="1.4rem"/></button>         
        
        <NavLink to="/carrito"><BsCart2 size="1.5rem"/></NavLink>
      </div>



     <div className={styles.banderas}>
      <button className={styles.bandera}><img src={banderaArgentina} alt=""/></button> 
      
      <button className={styles.bandera}><img src={banderaEeuu} alt=""/></button>
    </div>
      
      {loginModal && (
        <Login
        />
      )}

    </nav>


  );
}
