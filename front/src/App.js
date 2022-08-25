import { Route } from "react-router-dom";

import SearchBar from "./Components/SearchBar/SearchBar";

import "./App.css";

//COMPONENTES
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      {/*Se agregan las rutas para el primer spint solo queda importar los componentes y pasarlos a cada ruta, puede ser necesario realizar cambios, ir descomentando una a una para que se puedan renderizar bien los componentes */}

      {/*Ruta Landing Page */}
      <Route exact path={"/"} component={LandingPage} />

      {/*Ruta Catalogo de Libros */}
      <Route path={"/home"} component={Home} />

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
