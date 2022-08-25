import React from "react";

//COMPONENTES
import NavBar from "../NavBar/NavBar.jsx"
import NavBar2 from "../NavBar2/NavBar2.jsx"
import Footer from "../Footer/Footer.jsx";

//CSS
import styles from "./Home.module.css"
import banner from "./banner.jpg"




export default function Home() {

    return (
  
     <div className={styles.home}>
        <NavBar />
        <NavBar2 />

        <div className={styles.banner}>
            <img src={banner} alt="banner"/>
        </div>
  
        <div className={styles.ordenamientos}>
                {/* ACA VA LA LOGICA DEL ORDENAMIENTO */}
                ACA VAN LOS ORDENAMIENTOS
        </div>
  
        <div className={styles.paginado}>
                {/* ACA VA LA LOGICA DEL PAGINADO */}
                PAGINADO
        </div>

        
        <div className={styles.cuerpo}>
            <div className={styles.filtro}> ACA VAN LOS FILTRO </div>
            <div className={styles.cards}> ACA VAN LAS CARDS </div>
        </div>
   
  
        <Footer />
  
    </div>
    )
  }
  