import React from "react";

//CSS
import styles from "./Login.module.css";
import { Avatar} from "@chakra-ui/react";
import {FiMail} from "react-icons/fi"
import {MdNoEncryptionGmailerrorred} from "react-icons/md"



function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.containerItems}>

        <div className={styles.img}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </div>

        <div>
            <FiMail className={styles.iconoEmail}/>
            <input className={styles.input} type="text" placeholder="Nombre de usuario" />
        </div>

        <div>
            <MdNoEncryptionGmailerrorred className={styles.iconoContraseña}/>
            <input className={styles.input} type="password" placeholder="Nombre de usuario" />
        </div>

        <button className={styles.boton}>Ingresar</button>

      </div>
    </div>
  );
}

export default Login;
