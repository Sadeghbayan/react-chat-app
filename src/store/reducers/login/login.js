import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILED
} from '../../actions/names';


const login = (state = [], action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
            }

        default:
            return state
    }
}

export default login;
