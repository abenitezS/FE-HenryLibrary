import React from "react";
import NavBar from "../NavBar/NavBar";
import NavBar2 from "../NavBar2/NavBar2";
import Footer from "../Footer/Footer.jsx"


import styles from "./PageError.module.css"
import error404 from "./error404.jpg"




export default function PageError() {


  return (
    <div className={styles.error}>
        <NavBar />
        <NavBar2 />
        <div className={styles.imgItems}>
           <img className={styles.img} src={error404} alt="fondo" />
        </div>
        <Footer />
    </div>
  
  );
}
