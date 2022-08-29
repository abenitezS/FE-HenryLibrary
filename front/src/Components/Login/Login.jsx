import React,{useState} from "react";

//CSS
import styles from "./Login.module.css";
import { Avatar} from "@chakra-ui/react";
import {FiMail, FiEyeOff, FiEye} from "react-icons/fi"
import {MdNoEncryptionGmailerrorred} from "react-icons/md"
import {FcGoogle} from "react-icons/fc"



function Login() {

  const [login, setLogin] = useState({
    username:"",
    password: ""
  })

  const [show, setShow] = useState(false)



  function handleChange(event) {

      setLogin({
      ...login,
      [event.target.name]: event.target.value
      })
  }





  return (
    <div className={styles.container}>
      <div className={styles.containerItems}>

        <div className={styles.img}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </div>

        <div>
            <FiMail className={styles.iconoEmail}/>
            <input className={styles.input} type="text" placeholder="Nombre de usuario" name="username" value={login.username} onChange={handleChange}/>
        </div>

        <div>
            <MdNoEncryptionGmailerrorred className={styles.iconoContraseña}/> 

            {login.hasOwnProperty("password")  &&
            <button className={styles.iconoVerContraseña} onClick={() => {setShow(!show)}} right > 
              { show ? <FiEyeOff /> : <FiEye />}
            </button>  
            }
            <input className={styles.input} type="password" placeholder="Nombre de usuario" name="password" value={login.password} onChange={handleChange}/>
            
           
        </div>

        <button><FcGoogle /></button>


        <button className={styles.boton}>Ingresar</button>

        <div className={styles.cuenta}>
          <button>Crear nueva cuenta</button>
          <button>Olvido la contraseña</button>
        </div>

      </div>
    </div>
  );
}

export default Login;
