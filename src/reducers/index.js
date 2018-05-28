import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactReducer from './contactReducer';
import campaignReducer from './campaignReducer';
import userReducer from './userReducer';

export default combineReducers({
  entries: contactReducer,
  campaigns: campaignReducer,
  form: formReducer,
  user: userReducer
});