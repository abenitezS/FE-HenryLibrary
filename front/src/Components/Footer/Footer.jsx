import React from "react";
import { NavLink } from "react-router-dom";

//CSS
import styles from "./Footer.module.css"
import medioPago from "./medioDePago.jpg"

//REACT ICONS
import {FaFacebookSquare} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"




export default function Footer() {
    
  return (
  <div className={styles.container}>

    <NavLink to="/"><h1 className={styles.h1}>Libreria</h1></NavLink>
    <NavLink to="/"><h2 className={styles.h1_1}>HENRY</h2></NavLink>

    <div className={styles.contacto}>
      <h3 className={styles.h3}><NavLink to="/politicaDevolucion">Politicas de Devolucion</NavLink></h3>
      <h3 className={styles.h3}><NavLink to="/politicaPrivacidad">Politicas de Privacidad</NavLink></h3>
      <h3 className={styles.telefono}><NavLink to="">+549-3512436008</NavLink></h3>
    </div>

    <div className={styles.mediosDePago}>
      <img className={styles.img} src={medioPago} alt="medios de pago" />
    </div>

    <div className={styles.redes}>
      <FaFacebookSquare size="2rem" />
      <BsInstagram size="2rem"/>
    </div>

  </div>
 );
}
