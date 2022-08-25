import { GET_ALL_BOOKS, GET_NAME_BOOKS, GET_BOOKS_ID, DELETE_BOOKS_DETAIL } from "../actions/index";

const initialState = {
    allBooks: [],
    bookDetail: {}
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


        default:
            return state;
    }
}

export default rootReducer;