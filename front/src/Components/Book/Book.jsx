import React from "react";


//CSS
import styles from "./Book.module.css"






export default function Book({id,title,authors,image}) {


    


    return (
  
     <div className={styles.book}>
      <img className={styles.img} src={image} alt="imagenDelLibro" />
      <p className={styles.title}>{title}</p>
      {/* <h4 className={styles.authors}>{authors}</h4> */}

      <div className={styles.conteiner} >

        <div className={styles.info}>
        <h4 className={styles.precio} >$400</h4>
        </div>

        <div className={styles.pago}>
        <button className={styles.boton}>Agregar al carrito</button>
        {/* Agregarle un icono de carrrito al botton */}
        </div>

      </div>

    </div>
    )
  }
  