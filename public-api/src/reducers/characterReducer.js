import {FETCH_CHARACTER_START, 
    FETCH_CHARACTER_SUCCESS, 
    FETCH_CHARACTER_FAILURE } from '../actions/characterActions';



const initialState = {
    greeting: "hello breaking bad",
    isFetching: false,
    error: '',
    characters: null
}

const CharacterReducer = (state = initialState, action) => {
    switch(action.type){
        
        case FETCH_CHARACTER_START:
            console.log('in CHARACTER START')
            return{
                ...state,
                isFetching: true
            }

        case FETCH_CHARACTER_SUCCESS:
            console.log('in CHARACTER SUCCESS')
            return{
                ...state,
                characters: action.payload,
                isFetching: false
            }
            
        default:
            return state;
    }
}

export default CharacterReducer;

