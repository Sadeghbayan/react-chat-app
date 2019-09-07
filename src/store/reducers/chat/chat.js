import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED
} from '../../actions/names';


const users = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                loading: true,
                error: false
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.data,
                loading: false,
                error: false
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default users;
