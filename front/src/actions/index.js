import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const baseURL = process.env.REACT_APP_API || "http://localhost:3001";

export const GET_ALL_BOOKS = "GET_ALL_BOOKS";