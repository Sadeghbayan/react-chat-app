import {
    LOGOUT_REQUEST,
} from '../names'


export function logOutRequest(payload) {
    return {
        type: LOGOUT_REQUEST,
        payload,
    }
}

