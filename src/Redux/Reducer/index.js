import {combineReducers} from 'redux';
import auth from './auth';
import main from './main';
import upload from './upload';

export default combineReducers({
  auth,
  main,
  upload,
});
