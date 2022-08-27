import React from "react";
import styles from "./AboutUs.module.css";
import NavBar from "../../NavBar/NavBar.jsx";
import NavBar2 from "../../NavBar2/NavBar2.jsx";
import Footer from "../../Footer/Footer.jsx";



export default function AboutUs() {
  return (
    <div className={styles.AboutUs}>
      <NavBar />
      <NavBar2 />

      <h2 className={styles.titulo}>HITOS Libreria</h2>
      <h3 className={styles.parrafo}>
        Henry es una librería de su tiempo desde 1906. Lleva
        consigo más de un siglo de historia e historias, incrustadas en el
        espacio arquitectónico y también en los saberes libreros que dan forma a
        la experiencia de quien la visita y la lee. ¡En nuestros Hitos viajamos
        por los momentos más memorables, convivimos con las personalidades más
        influyentes y somos testigos de las historias más curiosas del camino
        del éxito trazado por Libreria Henry!
      </h3>

      <h2 className={styles.titulo}>COMPROMISOS DEL SOÑADOR</h2>
      <h3 className={styles.parrafo}>
        Desde 1906, nuestro día a día se compone de
        sueños y su realización. Somos audaces y trabajamos en la misma medida.
        Estamos orgullosos de lo que hacemos y, como Persona, estábamos
        inquietos, por trazar nuevos caminos. Situamos el Libro en el centro de
        todas nuestras actividades, y perpetuamos una actitud de absoluta
        audacia, partiendo de él para una intervención mucho más amplia en todo
        el ámbito cultural. Conscientes de quienes somos, de nuestro ADN y de lo
        que soñamos ser, establecemos compromisos con nuestra Comunidad y con el
        Mundo.
      </h3>

      <Footer />
    </div>
  );
}
