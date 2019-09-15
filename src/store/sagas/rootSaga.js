import { all } from 'redux-saga/effects';
import loginSaga from './login/login'
import fetchUsersSaga from './usersList/fetchUsers'
import personalChatSaga from './chat/chat'
import sendMessagePersonalSaga from './chat/sendMessagePersonal'

export default function* rootSaga() {
    yield all([
        loginSaga(),
        fetchUsersSaga(),
        personalChatSaga(),
        sendMessagePersonalSaga()
    ]);
}
