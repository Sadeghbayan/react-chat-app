import { combineReducers } from 'redux';
import login from './login/login'
import usersList from './usersList/usersList'


const rootReducer = combineReducers({
    UserInfo: login,
    users: usersList
})


export default rootReducer;
