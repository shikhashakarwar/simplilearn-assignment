import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer';
import { loginReducer } from './loginReducer';
import { userInfoReducer } from './userInfoReducer';

const allReducers = combineReducers({
    signupData: signupReducer,
    loginData: loginReducer,
    userData: userInfoReducer
});

export default function getAppReducer() {
    return allReducers;
  }