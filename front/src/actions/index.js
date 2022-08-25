import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const baseURL = process.env.REACT_APP_API || "http://localhost:3001";

export const GET_ALL_BOOKS = "GET_ALL_BOOKS";


export function getAllBooks() {
    return function (dispatch) {
     
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=1&printType=books&maxResults=40`)
        .then(response => {
          dispatch({
            type: "GET_ALL_BOOKS",
            payload: response.data.items
          });
        })
      .catch(error => {
        console.log("getAllCountries",error)
      })
    };
  }