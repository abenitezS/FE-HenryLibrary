import React from "react";

import styles from "./Loading.module.css"





export default function Loading() {

    const loading = "https://i.gifer.com/origin/8a/8aa7313013e56502cae9a7c3705d9c2c_w200.webp"

  return (
    <div className={styles.loading} >

        <img src={loading} alt="loading" />

    </div>
  
  );
}





