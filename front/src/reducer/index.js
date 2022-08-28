import {
  GET_ALL_BOOKS,
  GET_NAME_BOOKS,
  GET_BOOKS_ID,
  DELETE_BOOKS_DETAIL,
  GET_ALL_CATEGORIES,
  GET_ALL_BOOKS_BY_CATEGORY,
  POST_BOOK,
  SET_PAGE,
  GET_BOOKS_COUNT,
  BANNED_BOOK,
  DELETE_LOGICO_BOOK,
  GET_ALL_BOOKS_BY_AUTHOR,
} from "../actions/index";

const initialState = {
  allBooks: [],
  bookDetail: [],
  categories: [],
  msg: [],
  page: 0,
  cantBooks: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        allBooks: action.payload,
      };

    case GET_NAME_BOOKS:
      return {
        ...state,
        allBooks: action.payload,
      };

    case GET_BOOKS_ID:
      return {
        ...state,
        bookDetail: action.payload,
      };

    case DELETE_BOOKS_DETAIL: //Limpia el componente --> useEffect
      return {
        ...state,
        bookDetail: [],
      };

    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case GET_ALL_BOOKS_BY_CATEGORY:
      return {
        ...state,
        allBooks: action.payload,
      };

    case POST_BOOK:
      return {
        ...state,
        msg: [...action.payload],
      };

    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case GET_BOOKS_COUNT:
      return {
        ...state,
        cantBooks: action.payload,
      };

    case BANNED_BOOK:
      return {
        ...state,
      };

    case DELETE_LOGICO_BOOK:
      return {
        ...state,
      };

    case GET_ALL_BOOKS_BY_AUTHOR:
      return {
        ...state,
        allBooks: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
