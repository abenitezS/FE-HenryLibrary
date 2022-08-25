import { GET_ALL_BOOKS } from "../actions/index";

const initialState = {
    allBooks: [],
};

function rootReducer(state = initialState, action) {


    


    switch (action.type) {

        case GET_ALL_BOOKS:
            console.log("payload",action.payload)
            return {
                ...state,
                allBooks: action.payload

            }


        default:
            return state;
    }
}

export default rootReducer;