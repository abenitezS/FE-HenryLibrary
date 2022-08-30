import React from "react";
import styles from "./AboutUs.module.css";
import NavBar from "../../NavBar/NavBar.jsx";
import NavBar2 from "../../NavBar2/NavBar2.jsx";
import Footer from "../../Footer/Footer.jsx";

//FOTOS
import alicia from "./fotos/alicia.jpg"
import hernan from "./fotos/hernan.jpg"
import pablo from "./fotos/pablo.jpg"
import flor from "./fotos/flor.jpg"
import jova from "./fotos/jova.jpg"
import gabriel from "./fotos/gabriel.jpg"
import gustavo from "./fotos/gustavo.jpg"
import felipe from "./fotos/felipe.jpg"



export default function AboutUs() {
  return (
    <div className={styles.AboutUs}>
      <NavBar />
      <NavBar2 />

      <div className={styles.info}>
      <h2 className={styles.titulo}>SOBRE NUESTRA LIBRERIA</h2>
      <h3 className={styles.parrafo}>
        Henry es una librería de su tiempo desde 1906. Lleva consigo más de un
        siglo de historia e historias, incrustadas en el espacio arquitectónico
        y también en los saberes libreros que dan forma a la experiencia de
        quien la visita y la lee. ¡En nuestros Hitos viajamos por los momentos
        más memorables, convivimos con las personalidades más influyentes y
        somos testigos de las historias más curiosas del camino del éxito
        trazado por Libreria Henry!
      </h3>

      <h2 className={styles.titulo}>NUESTROS OBJETIVOS CON LA SOCIEDAD</h2>
      <h3  className={styles.parrafo}>
        Brinda la posibilidas de insertar su negocio a nivel nacional e incluso
        internacional ampliando la cantidad de futuros clientes. Para esto el
        sistema cuenta con un diseño ágil y moderno acorde a las últimas
        tendencias del mercado. Además el sistema cuenta con una interfaz muy
        intuitiva que simplifica la gestión del sistema.
      </h3>

      <h2 className={styles.titulo}>COMPROMISOS DEL SOÑADOR</h2>
      <h3 className={styles.parrafo}>
        Desde 1906, nuestro día a día se compone de sueños y su realización.
        Somos audaces y trabajamos en la misma medida. Estamos orgullosos de lo
        que hacemos y, como Personas, estábamos inquietos, por trazar nuevos
        caminos. Situamos el Libro en el centro de todas nuestras actividades, y
        perpetuamos una actitud de absoluta audacia, partiendo de él para una
        intervención mucho más amplia en todo el ámbito cultural. Conscientes de
        quienes somos, de nuestro ADN y de lo que soñamos ser, establecemos
        compromisos con nuestra Comunidad y con el Mundo.
      </h3>
      </div>


      <div><h2 className={styles.titulo}>DESARROLLADORES</h2></div>


      <div className={styles.creadores}>

      

      <div className={styles.contenedor}>
        <img className={styles.img} src={jova} alt="foto"/>
        <h2 className={styles.nombre}>JOVANA DAVALILLO</h2>
        <h3 className={styles.funcion}>Full Stack Developer</h3>
      </div>

      <div className={styles.contenedor}>
        <img className={styles.img} src={flor} alt="foto"/>
        <h2 className={styles.nombre}>FLORENCIA OLDANI</h2>
        <h3 className={styles.funcion}>Full Stack Developer</h3>
      </div>

      <div className={styles.contenedor}>
         <img className={styles.img} src={pablo} alt="foto"/>
        <h2 className={styles.nombre}>PABLO SZEJPIACKI</h2>
        <h3 className={styles.funcion}>Full Stack Developer</h3>
      </div>

      <div className={styles.contenedor}>
         <img className={styles.img} src={hernan} alt="foto"/>
        <h2 className={styles.nombre}>HERNAN CAMUSSO</h2>
        <h3 className={styles.funcion}>Full Stack Developer</h3>
      </div>
      
      <div className={styles.contenedor}>
         <img className={styles.img} src={alicia} alt="foto"/>
        <h2 className={styles.nombre}>ALICIA BENITEZ</h2>
        <h3 className={styles.funcion}>Full Stack Developer</h3>
      </div>

      <div className={styles.contenedor}>
        <img className={styles.img} src={felipe} alt="foto"/>
        <h2 className={styles.nombre}>A. FELIPE YEPES</h2>
        <h3 className={styles.funcion}>Full Stack Developer</h3>
      </div>

      <div className={styles.contenedor}>
        <img className={styles.img} src={gabriel} alt="foto"/>
        <h2 className={styles.nombre}>GABRIEL MARZIOLI</h2>
        <h3 className={styles.funcion}>Full Stack Developer</h3>
      </div>

      <div className={styles.contenedor}>
         <img className={styles.img} src={gustavo} alt="foto"/>
        <h2 className={styles.nombre}>GUSTAVO ENCINAS</h2>
        <h3 className={styles.funcion}>Full Stack Developer</h3>
      </div>

      </div>

      <Footer />
    </div>
  );
}
