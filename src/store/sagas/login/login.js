import { call, put, takeLatest } from 'redux-saga/effects';

let status = false,
    userRequest = [];

function loginRequest(action) {
    userRequest.username = action.name
    userRequest.id = action.id
    userRequest.status = true
    localStorage.setItem("token", JSON.stringify(Date.now()));
    localStorage.setItem("user", JSON.stringify(action));
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
