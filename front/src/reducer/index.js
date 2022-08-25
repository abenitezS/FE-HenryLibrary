import { GET_ALL_BOOKS, GET_NAME_BOOKS } from "../actions/index";

const initialState = {
    allBooks: [],
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


        default:
            return state;
    }
}

export default rootReducer;