import {FETCH_CHARACTER_START, 
    FETCH_CHARACTER_SUCCESS, 
    FETCH_CHARACTER_FAILURE } from '../actions/characterActions';



const initialState = {
    greeting: "hello breaking bad",
    isFetching: false,
    error: '',
    characters: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHARACTER_START:
            return{
                ...state,
                isFetching: true
            }

        case FETCH_CHARACTER_SUCCESS:
            return{
                ...state,
                characters: action.payload,
                isFetching: false
            }

        default:
            return state;
    }
}

export default reducer;

