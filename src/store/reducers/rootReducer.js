import { combineReducers } from 'redux';
import login from './login/login'


const rootReducer = combineReducers({
    UserInfo: login,
})


export default rootReducer;
