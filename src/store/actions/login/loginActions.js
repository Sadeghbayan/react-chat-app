import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILED } from '../names'


export function loginRequest(payload) {
    return {
        type: LOGIN_REQUEST,
        payload,
    }
}

