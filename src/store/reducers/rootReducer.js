import { combineReducers } from 'redux';
import login from './login/login'


const rootReducer = combineReducers({
    login: login,
})


export default rootReducer;
