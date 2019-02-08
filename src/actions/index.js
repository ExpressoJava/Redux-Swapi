import axios from 'axios';

export const FETCHING_CHARS = 'FETCHING_ChARS'
export const ERROR_FETCHING_CHARS = 'ERROR_FETCHING_CHARS'
export const CHARS_FETCHED = 'CHARS_FETCHED'

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchChars = () => {
    const starWarsChars = axios.get(`https://swapi.co/api/people`);
    return dispatch => {
        dispatch({ type: FETCHING_CHARS })
        starWarsChars // is a promise and we can call .then on it
        .then(res =>{
            console.log(res)
            dispatch({type: CHARS_FETCHED, payload: [] }) // dispatch another action
            
        }).catch(err => {
            dispatch({type: ERROR_FETCHING_CHARS, payload: 'Error Fetching Chars'}) // explicitly send a string
        })
    }
}

