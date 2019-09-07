import { combineReducers } from 'redux';
import login from './login/login'
import chat from './chat/chat'


const rootReducer = combineReducers({
    UserInfo: login,
    Chat: chat
})


export default rootReducer;
