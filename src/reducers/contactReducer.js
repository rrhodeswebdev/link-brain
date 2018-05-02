import { FETCH_ENTRIES, NEW_ENTRY } from '../actions/types';

const initialState = {
  entries: [],
  entry: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_ENTRIES: 
      return {
        ...state, 
        entries: action.payload
      };
    case NEW_ENTRY:
      return {
        ...state,
        entry: action.payload
      }
    default: 
      return state;
  }
}