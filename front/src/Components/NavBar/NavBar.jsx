import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search.jsx"

//REACT ICONS
import {VscAccount } from "react-icons/vsc"
import {MdOutlineFavoriteBorder} from "react-icons/md"
import {BsCart2} from "react-icons/bs"






export default function NavBar() {


  return (
  <nav>
        <h1><NavLink to="/">LibreriaHENRY</NavLink></h1>

        <div><Search /></div>
        
        <div ><NavLink to="/favoritos"><h3 className="nav-h3"><MdOutlineFavoriteBorder /></h3></NavLink></div>
        
        <div ><NavLink to="/cuenta"><h3 className="nav-h3">< VscAccount/></h3></NavLink></div>

        <div ><NavLink to="/carrito">< BsCart2/></NavLink></div>
        
        <button>BanderaParaIdioma</button>

  </nav>
  );
}
