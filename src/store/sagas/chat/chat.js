import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'
import API from '../../../Helpers/Api'


function personalChatRequest(action) {
    let data = {}
    data.users = action.users.join(",")
    return axios
        .post( API + '/conversation/personal',
            data,
        )
        .then(response => response)
        .catch(error => ({ error }));
}


function* personalChat(action) {
    try {
        const requestResponse = yield call(personalChatRequest, action.payload);
        yield put({type: "PERSONAL_CHAT_SUCCESS", data : requestResponse.data});
    } catch (e) {
        yield put({type: "PERSONAL_CHAT_FAILED", message: e.message});
    }
}

export default function* personalChatSaga() {
    yield takeLatest("PERSONAL_CHAT_REQUEST", personalChat);
}
