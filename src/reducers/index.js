import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactReducer from './contactReducer';
import campaignReducer from './campaignReducer';

export default combineReducers({
  entries: contactReducer,
  campaigns: campaignReducer,
  form: formReducer
});