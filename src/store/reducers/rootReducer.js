import { combineReducers } from 'redux';
import entityReducer from './entityReducer';
import postReducer from './postReducer';

export default combineReducers({
  entityReducer,
  postReducer,
});
