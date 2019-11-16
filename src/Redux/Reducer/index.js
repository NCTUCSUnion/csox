import {combineReducers} from 'redux';
import main from './main';
import auth from './auth';

export default combineReducers({
  main,
  auth
});
