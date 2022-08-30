import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { uploadBook, getAllAuthors, getCategories, getAllPublishers } from "../../actions";
import validate from "./validate.js"

//COMPONENTES
import Footer from "../Footer/Footer.jsx"
import NavBar from "../NavBar/NavBar.jsx"
import NavBar2 from "../NavBar2/NavBar2.jsx"

//CSS
import styles from "./NewBook.module.css";




export default function NewRecipe() {

    const dispatch = useDispatch();
    const history = useHistory();
    const allAuthors = useSelector((state) => state.authors);
    const allCategories = useSelector((state) => state.categories);
    const allPublishers = useSelector((state) => state.publishers);




    useEffect(() => {
        dispatch(getAllAuthors());
        dispatch(getCategories());
        dispatch(getAllPublishers());
    }, [dispatch]);


    //ESTADO DEL FORMULARIO

    const [book, setBook] = useState({
        publisherId: 0,
        title: "",
        description: "",
        price: 1.0,
        image: "",
        publishedDate: "",
        pageCount: 1,
        currentStock: 0,
        language: "",
        authors: [],
        categories: [],
    });


    //ESTADO DE ERRORES
    const [errores, setErrores] = useState({})




   //FUNCION QUE MANIPULA LOS INPUTS
    
   function handleInputsChange(event) {

    if(event.target.name === "authors"){  

      if(!book.authors.includes(event.target.value)){

        setBook({...book, 
            authors: [...book.authors, event.target.value]
        })

      } 
      
      
    }else if ( event.target.name === "categories"  ){

        if(!book.categories.includes(event.target.value)){
        setBook({...book, 
            categories: [...book.categories, event.target.value]
        })
       }
    
    }  else{
        
      setBook({
      ...book,
      [event.target.name]: event.target.value,
      })
    
      setErrores(validate ({
        ...book,
        [event.target.name]:event.target.value
       }));

   
  }}




    const handleOnSubmit = (e) => {
        e.preventDefault();


        dispatch(uploadBook(book));

        setBook({
            publisherId: 0,
            title: "",
            description: "",
            price: 1.0,
            image: "",
            publishedDate: "",
            pageCount: 1,
            currentStock: 0,
            language: "",
            isBanned: false,
            authors: [],
            categories: [],
            lenguages: ""
        });
        alert("Libro creado Exitosamente!");
    };

    const handleBackSubmit = (e) => {
        e.preventDefault();
        history.push("/"); // ---> esta ruta debe volver al catalogo
    };





    const eliminarOpcion = (e) => {
        let filtrados = book.categories?.filter(
            (t) => t !== Number(e.target.value)
        );
        setBook({
            ...book,
            categories: filtrados,
        });
    };

    const eliminarAuthor = (e) => {
        let filtrados = book.authors?.filter(
            (t) => t !== Number(e.target.value)
        );
        setBook({
            ...book,
            authors: filtrados,
        });
    };

    return (

        <div>

            <NavBar />
            <NavBar2 />



        <div className={styles.containerFormu}>


            <h1 className={styles.titleFormu}>Nuevo Libro</h1>
            <form action="POST">

                <div className={styles.containerInputs}>


                    <div className={styles.containerInput}>
                        <label>Titulo: </label>
                        <input
                            placeholder="ingrese el titulo del Libro..."
                            type="text"
                            name="title"
                            value={book.title}
                            className={styles.inputs}
                            onChange={handleInputsChange}
                        />
                        *Campo Requerido
                        <div className={styles.danger}>
                            {errores.title && <p>{errores.title }</p>}
                        </div>
                    </div>

                    <div className={styles.containerInput}>
                        <label>Descripcion: </label>
                        <textarea
                            placeholder="ingrese descripcion del Libro..."
                            type="text"
                            name="description"
                            value={book.description}
                            className={styles.inputs}
                            onChange={handleInputsChange}
                        />
                        *Campo Requerido
                        <div className={styles.danger}>
                            {errores.description && <p>{errores.description}</p>}
                        </div>
                    </div>

                    <div className={styles.containerInput}>
                        <label>Precio: </label>
                        <input
                            placeholder="ingrese Precio del Libro..."
                            type="number"
                            name="price"
                            value={book.price}
                            className={styles.inputs}
                            onChange={handleInputsChange}
                        />
                        *Campo Requerido
                        <div className={styles.danger}>
                            {errores.price && <p>{errores.price}</p>}
                        </div>
                    </div>

                    <div className={styles.containerInput}>
                        <label>Stock Actual: </label>
                        <input
                            placeholder="ingrese Stock actual..."
                            type="number"
                            name="currentStock"
                            value={book.currentStock}
                            className={styles.inputs}
                            onChange={handleInputsChange}
                        />
                        *Campo Requerido
                        <div className={styles.danger}>
                            {errores.currentStock && <p>{errores.currentStock}</p>}
                        </div>
                    </div>

                    <div className={styles.containerInput}>
                        <label>Imagen: </label>
                        <input
                            placeholder="URL ej: http://..."
                            type="text"
                            name="image"
                            value={book.image}
                            className={styles.inputs}
                            onChange={handleInputsChange}
                        />
                        <div className={styles.danger}>
                            {errores.image && <p>{errores.image}</p>}
                        </div>
                    </div>

                    <div className={styles.containerInput}>
                        <label>Fecha de publicacion: </label>
                        <input
                            placeholder="Ingrese Fecha..."
                            type="date"
                            name="publishedDate"
                            value={book.publishedDate}
                            className={styles.inputs}
                            onChange={handleInputsChange}
                        />
                        <div className={styles.danger}>
                            {errores.publishedDate && <p>{errores.publishedDate}</p>}
                        </div>
                    </div>

                    <div className={styles.containerInput}>
                        <label>Cant. de Paginas:</label>
                        <input
                            placeholder="Ingrese Cant. Paginas del Libro..."
                            type="number"
                            name="pageCount"
                            value={book.pageCount}
                            className={styles.inputs}
                            onChange={handleInputsChange}
                        />
                        <div className={styles.danger}>
                            {errores.pageCount && <p>{errores.pageCount}</p>}
                        </div>
                    </div>

                    <div className={styles.containerInput}>
                        <label>Lenguaje: </label>
                        <select
                            name="languages"
                            value={book.language}
                            className={styles.inputs}
                            onChange={handleInputsChange}
                            // defaultValue="default"
                        >
                            {/* <option >Elegir lenguaje</option> */}
                            <option value="es">Español</option>
                            <option value="en">Ingles</option>
                            <option value="pt">Portugues</option>
                        </select>
                    </div>

                    <div className={styles.containerInput}>
                        <label>Autores: </label>
                        <select
                            className={styles.inputs}
                            name="authors"
                            onChange={handleInputsChange}
                            defaultValue="default"
                        >
                        <option value="default">Elegir autor</option>
                            {
                                allAuthors.map(authors => {
                                   return( <option key={authors.id} id="authors" name="authors" value={authors.id}>
                                        {authors.name}
                                    </option>)
                                })} 
                        </select>
                    </div>

                    <div className={styles.contenedorTypeSelected}>

                        {book.authors?.map((author) => {

                            let autor = allAuthors?.map( a => {
                                return a.id === author ? a.name: null
                            })
                            

                            return (
                                <div
                                    key={author.id}
                                    className={styles.contenedortype}
                                >
                                    <p>{author.name}</p>
                                    <button
                                        className={styles.btnTypeSelected}
                                        type="button"
                                        value={author.id}
                                        onClick={(e) => eliminarAuthor(e)}
                                    >
                                        X
                                    </button>
                                </div>
                            );
                        })}
                    </div>


                    <div className={styles.containerInput}>
                        <label>Categorias: </label>
                        <select
                            className={styles.inputs}
                            name="categories"
                            onChange={handleInputsChange}
                            defaultValue="default"
                        >
                            <option value="default">Elegir categorias</option>
                            {allCategories.map((categories) => { 
                              return(
                                <option key={categories.id}  id="categories" name="categories" value={categories.id}>
                                    {categories.name}
                                </option>
                              )}
                                )}
                        </select>
                    </div>



                    <div className={styles.contenedorTypeSelected}>
                        {book.categories?.map((categoria) => {

                            
                            let categorias = allCategories?.map( c => {
                                return c.id === categoria ? c.name: null
                            })
                            
                            return (
                                <div
                                    key={categoria.id}
                                    className={styles.contenedortype}
                                >
                                    <p>{categoria.name}</p>
                                    <button
                                        className={styles.btnTypeSelected}
                                        type="button"
                                        value={categoria.id}
                                        onClick={(e) => eliminarOpcion(e)}
                                    >
                                        X
                                    </button>
                                </div>
                            );
                        })}
                    </div> 

                    <div className={styles.containerInput}>
                        <label>Editorial: </label>


                        <select
                            className={styles.inputs}
                            value={book.publisherId}
                            name="publisherId"
                            onChange={handleInputsChange}
                            defaultValue="default"
                        >
                            <option value="default">Elegir editorial</option>
                            {allPublishers &&
                                allPublishers.map((a) => (
                                    <option key={a.name} value={a.id}>
                                        {a.name}
                                    </option>
                                ))}
                        </select>
                        *Campo Requerido

                        <div className={styles.danger}>
                            {errores.publisherId && <p>{errores.publisherId}</p>}
                        </div>

                    </div>

                    <div className={styles.containerButtons}>
                        <button
                            type="submit"
                            onClick={handleOnSubmit}
                            className={styles.button}
                        >
                            Enviar
                        </button>
                        <button
                            onClick={handleBackSubmit}
                            className={styles.button}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </form>
            </div>

            <Footer />
        </div>
    );
}
