import { call, put, throttle, takeLatest } from 'redux-saga/effects';



function* loginRequest(action) {
    console.log(action)
}
export default function* loginSaga() {
    yield takeLatest("LOGIN_REQUEST", loginRequest);
}
