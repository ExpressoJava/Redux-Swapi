import {FETCHING_CHARS, ERROR_FETCHING_CHARS, CHARS_FETCHED} from "../actions";

const initialState = {
  chars: [],
  // Array characters, Boolean fetching, null error.
  
  error: null,
  fetching: false,
  fetched: false
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    // action is different then action.type. actions = are represented by their types. action.type = type we're switch over
    case FETCHING_CHARS:
      return Object.assign({}, state, { fetching: true });
    case ERROR_FETCHING_CHARS:
      return Object.assign({}, state, { fetching: true });
    case CHARS_FETCHED:
      return Object.assign({}, state, { fetching: true });
    default:
      return state;
  }
};
