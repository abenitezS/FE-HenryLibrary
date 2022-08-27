import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const baseURL = process.env.REACT_APP_API || "http://localhost:3001";


export const GET_ALL_BOOKS = "GET_ALL_BOOKS";
export const GET_NAME_BOOKS = "GET_NAME_BOOKS";
export const GET_BOOKS_ID = "GET_BOOKS_ID";
export const DELETE_BOOKS_DETAIL = "DELETE_BOOKS_DETAIL";
export const POST_BOOK = "POST_BOOK";


export function getAllBooks() {
  return function (dispatch) {

    axios.get(`/catalog`)
      .then(response => {
        dispatch({
          type: "GET_ALL_BOOKS",
          payload: response.data
        });
      })
      .catch(error => {
        console.log("getAllBooks", error)
      })
  };
}


export function getNameBooks(title) {
  return function (dispatch) {

    axios.get(`/catalog?title=${title}`)
      .then(response => {
        dispatch({
          type: "GET_NAME_BOOKS",
          payload: response.data
        });
      })
      .catch(error => {
        console.log("getNameBooks", error)
      })
  };
}


export function getBooksId(id) {
  return function (dispatch) {

    axios.get(`/catalog/${id}`)
      .then(response => {
        dispatch({
          type: "GET_BOOKS_ID",
          payload: response.data
        });
      })
      .catch(error => {
        console.log("getBooksId", error)
      })
  };
}


export function deleteBookDetail(id) {  //--> Lo utilizo para desmontar el componente de detalle
  return {
    type: "DELETE_BOOKS_DETAIL",
    payload: id
  };
}

export function uploadBook(book) {
  return function (dispatch) {
    return axios.post(`http://localhost:3001/book`, book)
      .then(({ data }) => {
        dispatch({ type: POST_BOOK, payload: data });
      })
  }

}