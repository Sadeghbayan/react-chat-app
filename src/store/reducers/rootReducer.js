import { combineReducers } from 'redux';
import login from './login/login'
import usersList from './usersList/usersList'
import chat from './chat/chat'

const appReducer = combineReducers({
    UserInfo: login,
    users: usersList,
    chat: chat,
})
const initialState = appReducer({}, {})

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_REQUEST') {
        state = initialState
        return  state
    }

    return appReducer(state, action)
}
export default rootReducer;
