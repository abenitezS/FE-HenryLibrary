import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { uploadBook } from '../../actions';


//CSS
import styles from "./NewBook.module.css";

export default function NewRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [publishedDateError, setPublishedDateError] = useState(false);
  const [pageCountError, setPageCountError] = useState(false);
  const [languageError, setLanguageError] = useState(false);
  const [ratingError, setRatingError] = useState(false);

  let [book, setBook] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
    publishedDate: "",
    pageCount: 0,
    language: "",
    rating: 0,
  });

  const handleInputsChange = (e) => {
    setTitleError(false);
    setDescriptionError(false);
    setPriceError(false);
    setImageError(false);
    setPublishedDateError(false);
    setPageCountError(false);
    setLanguageError(false);
    setRatingError(false);

    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const patternText = new RegExp("^[A-Z]+$", "i");
  const patternURL = new RegExp(
    /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi
  );

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDescriptionError(false);
    setPriceError(false);
    setImageError(false);
    setPublishedDateError(false);
    setPageCountError(false);
    setLanguageError(false);
    setRatingError(false);

    if (!book.title || !patternText.test(book.title)) {
      return setTitleError("enter a title correct for your book");
    }
    if (!book.description) {
      return setDescriptionError("enter a description correct for your book");
    }
    if (!book.price || !book.price === Number) {
      return setPriceError("enter a price correct for your book");
    }
  
    if (!patternURL.test(book.image)) {
      return setImageError("enter format url image");
    }

    dispatch(uploadBook(book)); // Generar la funcion en Action

    setBook({
      title: "",
      description: "",
      price: 0,
      image: "",
      publishedDate: "",
      pageCount: 0,
      language: "",
      rating: 0,
    });
    alert("Book created successfully!");
  };

  const handleBackSubmit = (e) => {
    e.preventDefault();
    history.push("/"); // ---> esta ruta debe volver al catalogo
  };

  return (
    <div className={styles.containerFormu}>
      <h1 className={styles.titleFormu}>New Book</h1>
      <form action="POST">
        <div className={styles.containerInputs}>
          <div className={styles.containerInput}>
            <label>Title: </label>
            <input
              placeholder="insert book title"
              type="text"
              name="title"
              value={book.title}
              className={styles.inputs}
              onChange={handleInputsChange}
            />
            *Required field
            <div className={styles.danger}>
              {titleError && <p>{titleError}</p>}
            </div>
          </div>
          <div className={styles.containerInput}>


            <label>Description: </label>
            <textarea
              placeholder="insert book description"
              type="text"
              name="description"
              value={book.description}
              className={styles.inputs}
              onChange={handleInputsChange}
            />
            *Required field
            <div className={styles.danger}>
              {descriptionError && <p>{descriptionError}</p>}
            </div>
          </div>
          <div className={styles.containerInput}>


            <label>price: </label>
            <input
              placeholder="insert book price"
              type="number"
              name="price"
              value={book.price}
              className={styles.inputs}
              onChange={handleInputsChange}
            />
            *Required field
            <div className={styles.danger}>
              {priceError && <p>{priceError}</p>}
            </div>
          </div>
          <div className={styles.containerInput}>
            <label>image: </label>
            <input
              placeholder="URL ej: http://..."
              type="text"
              name="image"
              value={book.image}
              className={styles.inputs}
              onChange={handleInputsChange}
            />
            <div className={styles.danger}>
              {imageError && <p>{imageError}</p>}
            </div>
          </div>
          <div className={styles.containerInput}>
            <label>Published Date: </label>
            <input
              placeholder="insert book Published Date"
              type="date"
              name="publishedDate"
              value={book.publishedDate}
              className={styles.inputs}
              onChange={handleInputsChange}
            />
            <div className={styles.danger}>
              {publishedDateError && <p>{publishedDateError}</p>}
            </div>
          </div>
          <div className={styles.containerInput}>
            <label>Page Count: </label>
            <input
              placeholder="insert book Page Count"
              type="number"
              name="pageCount"
              value={book.pageCount}
              className={styles.inputs}
              onChange={handleInputsChange}
            />
            <div className={styles.danger}>
              {pageCountError && <p>{pageCountError}</p>}
            </div>
          </div>
          <div className={styles.containerInput}>
            <label>language: </label>
            <input
              placeholder="insert book language"
              type="text"
              name="language"
              value={book.language}
              className={styles.inputs}
              onChange={handleInputsChange}
            />
            <div className={styles.danger}>
              {languageError && <p>{languageError}</p>}
            </div>
          </div>
          <div className={styles.containerInput}>
            <label>rating: </label>
            <input
              placeholder="insert book rating"
              type="number"
              name="rating"
              value={book.rating}
              className={styles.inputs}
              onChange={handleInputsChange}
            />
            <div className={styles.danger}>
              {ratingError && <p>{ratingError}</p>}
            </div>
          </div>
          <div className={styles.containerButtons}>
            <button type="submit" onClick={handleOnSubmit} className={styles.button}>
              Send
            </button>
            <button onClick={handleBackSubmit} className={styles.button}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
