import { Route, Switch } from "react-router-dom";
import "./App.css";

//COMPONENTES
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import BookDetail from "./Components/BookDetail/BookDetail";
import NewBook from "./Components/NewBook/NewBook";
import NewBookChakra from "./Components/NewBook/NewBookChakra";
import AboutUs from "./Components/Extras/AboutUs/AboutUs";
import PoliticaPrivacidad from "./Components/Extras/PoliticaPrivacidad/PoliticaPrivacidad";
import PoliticaDevolucion from "./Components/Extras/PoliticaDevolucion/PoliticaDevolucion";

import PageError from "./Components/PageError/PageError.jsx"
import CardsAuthor from "./Components/CardsAuthor/CardsAuthor";

function App() {
  return (
    <>
		{/*Se agregan las rutas para el primer spint solo queda importar los componentes y pasarlos a cada ruta, puede ser necesario realizar cambios, ir descomentando una a una para que se puedan renderizar bien los componentes */}

      <Switch>
        {/*Ruta Landing Page */}
        <Route exact path="/" component={LandingPage} />

        {/*Ruta Catalogo de Libros */}
        <Route path="/home" component={Home} />

        {/*Ruta Catalogo de Libros */}
        {/* <Route path={"/carrito"} component={} /> */}

        {/*Ruta Creacion de Nuevo Libro */}
        <Route path={"/nuevoLibro"} component={NewBook} />
        <Route path={"/nuevoLibroChakra"} component={NewBookChakra} />

        {/*Ruta Catalogo de Libros */}
        {/* <Route path={"/favoritos"} component={} /> */}

        {/*Ruta Detalles de Libro */}
        <Route path="/catalog/detail/:id" component={BookDetail} />

        {/*Ruta Inicio de Sesion */}
        {/* <Route path={"/login"} component={} /> */}
      <Route path="/catalog/author/:id" component={CardsAuthor} />
 
        {/*Ruta administrador*/}
        {/* <Route path={"/user/admin"} component={} /> */}

        {/*Rutas Extras*/}
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/politicaPrivacidad" component={PoliticaPrivacidad} />
        <Route path="/politicaDevolucion" component={PoliticaDevolucion} />

        {/*Rutas Error*/}
        <Route path="*" component={PageError} />
      </Switch>
    </>
  );
}

export default App;
