import {
    PERSONAL_CHAT_REQUEST,
    PERSONAL_CHAT_MESSAGE_REQUEST,
    GET_MESSAGE_HISTORY
     } from '../names'


export function personalChatRequest(payload) {
    return {
        type: PERSONAL_CHAT_REQUEST,
        payload,
    }
}

export function sendMessageInPersonalChat(payload) {
    return {
        type: PERSONAL_CHAT_MESSAGE_REQUEST,
        payload,
    }
}

export function getMessageHistory(payload) {
    return {
        type: GET_MESSAGE_HISTORY,
        payload,
    }
}

