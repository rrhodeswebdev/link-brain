import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactReducer from './contactReducer';

export default combineReducers({
  entries: contactReducer,
  form: formReducer
});