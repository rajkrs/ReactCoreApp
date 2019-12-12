import { combineReducers } from 'redux';
import LoginReducer from '../../public/login/login.reducer' 

export default combineReducers({
    login: LoginReducer,
});