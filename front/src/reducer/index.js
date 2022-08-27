import { GET_ALL_BOOKS, GET_NAME_BOOKS, GET_BOOKS_ID, DELETE_BOOKS_DETAIL, POST_BOOK } from "../actions/index";


const initialState = {
  allBooks: [],
  bookDetail: [],
  categories: [],
};

function rootReducer(state = initialState, action) {

    switch (action.type) {

        case GET_ALL_BOOKS:
         
            return {
                ...state,
                allBooks: action.payload
            }

        case GET_NAME_BOOKS:

            return {
                ...state,
                allBooks: action.payload
            }
        
        case GET_BOOKS_ID:
            
           return{
                ...state,
                bookDetail: action.payload
           }

        case DELETE_BOOKS_DETAIL:   //Limpia el componente --> useEffect
           return {
               ...state,
               bookDetail: []
           }

           case POST_BOOK:
            return {
                ...state,
            // filteredBook: [action.payload, ...state.filteredBook], // esta linea es para que se guarde en los filtrados.-
            allBooks: [action.payload, ...state.allBooks],
            }

        default:
            return state;
    }
}

export default rootReducer;
