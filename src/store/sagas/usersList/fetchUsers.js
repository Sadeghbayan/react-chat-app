import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'
import API from '../../../Helpers/Api'


function fetchUsersRequest() {
    return axios
        .get( API + '/users')
        .then(response => response)
        .catch(error => ({ error }));
}

function* fetchUsers() {
    try {
        const requestResponse = yield call(fetchUsersRequest);
        yield put({type: "FETCH_USERS_SUCCESS", data : requestResponse.data});
    } catch (e) {
        yield put({type: "FETCH_USERS_FAILED", message: e.message});
    }
}

export default function* fetchUsersSaga() {
    yield takeLatest("FETCH_USERS", fetchUsers);
}
