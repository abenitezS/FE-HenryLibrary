import React from "react";

//COMPONENTES
import NavBar from "../NavBar/NavBar.jsx"
import NavBar2 from "../NavBar2/NavBar2.jsx"
import Footer from "../Footer/Footer.jsx";

//IMAGENES PARA CARRETE DE PUBLICIDAD
import ImagenesSlide from "./Carrusel/ImagenesSlide";
import { Imagenes } from "./Carrusel/Imagenes.js";

//CSS
import styles from"./landingPage.module.css"





export default function LandingPage() {

  return (

   <div className={styles.LandingPage}>
      <NavBar />
      <NavBar2 />

      <div className={styles.carrusel}>
         <ImagenesSlide slides={Imagenes} />
      </div>

      <div className={styles.recomendados}>
        <h3 className={styles.h3}> NUESTROS RECOMENDADOS DEL MES</h3>
        <div className={styles.recomendados_cards}>ACA VAN LAS CARDS DE LOS RECOMENDADOS</div>
      </div>
 

      <Footer />

  </div>
  )
}
