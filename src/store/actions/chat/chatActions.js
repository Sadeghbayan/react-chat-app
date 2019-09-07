import {
    FETCH_USERS,
 } from '../names'

export function fetchUsers() {
    return {
        type: FETCH_USERS,
    }
}