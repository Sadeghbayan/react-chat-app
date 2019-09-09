import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILED
} from '../../actions/names';


const login = (state = [], action) => {
    switch (action.type) {
        case LOGIN_REQUEST_SUCCESS:
            let newState = {...state, userRequest: action.requestResponse};
            return newState;
        default:
            return state
    }
}

export default login;
