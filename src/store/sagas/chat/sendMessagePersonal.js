import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'
import API from '../../../Helpers/Api'


function personalChatMessageRequest(action) {
    let data = {}
    data.message = action.message;
    data.senderId = action.senderId
    return axios
        .post( API + `/conversation/${action.conversationId}/message/send`,
            data,
        )
        .then(function (response) {
            response.data.targetId = action.targetPerson
            response.data.txt = data.message
            return response
        })
        .catch(error => ({ error }));
}


function* personalChatMessage(action) {
    try {
        const requestResponse = yield call(personalChatMessageRequest, action.payload);
        yield put({type: "PERSONAL_CHAT_MESSAGE_SUCCESS", data : requestResponse.data});
    } catch (e) {
        yield put({type: "PERSONAL_CHAT_MESSAGE_FAILED", message: e.message});
    }
}

export default function* sendMessagePersonalSaga() {
    yield takeLatest("PERSONAL_CHAT_MESSAGE_REQUEST", personalChatMessage);
}
