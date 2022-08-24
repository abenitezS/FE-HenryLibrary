import { Route } from "react-router-dom";
<<<<<<< HEAD
import SearchBar from "./Components/SearchBar/SearchBar";
=======

>>>>>>> 9f17f417c3b5b40f5edf5ce71bf934f95f8a0e31
import "./App.css";

//COMPONENTES
import LandingPage from "./Components/LandingPage/LandingPage";


function App() {
  return (
    <>
      {/*Se agregan las rutas para el primer spint solo queda importar los componentes y pasarlos a cada ruta, puede ser necesario realizar cambios, ir descomentando una a una para que se puedan renderizar bien los componentes */}

      {/*Ruta Landing Page */}
      <Route exact path={"/"} component={SearchBar} />

      {/*Ruta Catalogo de Libros */}
      {/* <Route path={"/books"} component={} /> */}

      {/*Ruta Catalogo de Libros */}
      {/* <Route path={"/carrito"} component={} /> */}

      
      {/*Ruta Catalogo de Libros */}
      {/* <Route path={"/favoritos"} component={} /> */}

      {/*Ruta Detalles de Libro */}
      {/* <Route path={"/books/detail/:id"} component={} /> */}

      {/*Ruta Inicio de Sesion */}
      {/* <Route path={"/login"} component={} /> */}

      {/*Ruta administrador*/}
      {/* <Route path={"/user/admin"} component={} /> */}
    </>
  );
}

export default App;
