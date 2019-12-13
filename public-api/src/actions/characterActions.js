import axios from 'axios';

//Action types 
export const FETCH_CHARACTER_START = 'FETCH_CHARACTER_START'
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS'
export const FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE'

//Breaking bad api --> display a list of characters with data
// https://www.breakingbadapi.com/api/characters

//async Action Creator
const getCharacterData = () => dispatch => {
    console.log('in character data')
    dispatch({type: FETCH_CHARACTER_START});
    axios.get('https://www.breakingbadapi.com/api/characters')
        .then(response => {
            // console.log(response.data)
            dispatch({type: FETCH_CHARACTER_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: FETCH_CHARACTER_FAILURE, payload: error.payload})
        })
}

export default getCharacterData;