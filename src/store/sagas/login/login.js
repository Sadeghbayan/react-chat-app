import { call, put, takeLatest } from 'redux-saga/effects';

let status = false,
    userRequest = [];

function loginRequest(action) {
    userRequest.username = action.username
    userRequest.status = true
    localStorage.setItem("token", JSON.stringify(Date.now()));
    return userRequest;
}

function* handleRequest(action) {
    try {
        const requestResponse = yield call(loginRequest, action.payload);
        yield put({type: "LOGIN_REQUEST_SUCCESS", requestResponse});
    } catch (e) {

    }
}
export default function* loginSaga() {
    yield takeLatest("LOGIN_REQUEST", handleRequest);
}
