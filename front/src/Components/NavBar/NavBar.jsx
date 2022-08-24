import React from "react";
import { NavLink } from "react-router-dom";

//COMPONENTES
import Search from "../Search/Search.jsx"

//REACT ICONS
import {VscAccount } from "react-icons/vsc"
import {MdOutlineFavoriteBorder} from "react-icons/md"
import {BsCart2} from "react-icons/bs"

import "./NavBar.css"




export default function NavBar() {


  return (
  <nav className="container">
        <h1 className="h1"><NavLink to="/">Libreria</NavLink></h1>
        <h1 className="h1_1"><NavLink to="/">HENRY</NavLink></h1>

        <div className="search"><Search /></div>  
        
        <div className="iconos"><NavLink to="/favoritos"><MdOutlineFavoriteBorder /></NavLink></div>
        
        <div className="iconos"><NavLink to="/login">< VscAccount/></NavLink></div>

        <div className="iconos"><NavLink to="/carrito">< BsCart2/></NavLink></div>
        
        <button>BanderaParaIdioma</button>  
        {/* Texto rovisorio hasta que hagamos la funcion de idiomas */}
  </nav>
  
  );
}
