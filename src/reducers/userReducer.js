import { SIGN_IN_USER, SIGN_UP_USER } from '../actions/types';

const initialState = {
  user: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SIGN_IN_USER:
      return {
        ...state,
        user: action.user
      }
    case SIGN_UP_USER:
      return {
        ...state,
        user: action.user
      }
    default: 
      return state;
  }
}