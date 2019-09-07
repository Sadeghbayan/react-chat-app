import { all } from 'redux-saga/effects';
import loginSaga from './login/login'
import fetchUsersSaga from './Chat/fetchUsers'

export default function* rootSaga() {
    yield all([
        loginSaga(),
        fetchUsersSaga()
    ]);
}
