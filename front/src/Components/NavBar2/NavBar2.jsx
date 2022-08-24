import React from "react";
import { NavLink } from "react-router-dom";



import "./NavBar2.css"




export default function NavBar2() {


  return (
    <nav className="container_navBar2">
        <h3 className="h3"><NavLink to="/">Categorias</NavLink></h3>
        <h3 className="h3"><NavLink to="/books">Books</NavLink></h3>
        <h3 className="h3"><NavLink to="/">Sobre Nosotros</NavLink></h3>
        <h3 className="h3"><NavLink to="/">Ofertas</NavLink></h3>
    </nav>
  
  );
}
