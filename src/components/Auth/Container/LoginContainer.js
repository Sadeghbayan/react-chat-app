import { connect } from 'react-redux';
import LoginComponent from '../Login'
import { loginRequest } from '../../../store/actions/login/loginActions'
import { fetchUsers } from '../../../store/actions/usersList/usersListActions'


const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest:(username) => dispatch(loginRequest(username)),
        fetchUsers:(username) => dispatch(fetchUsers(username))
    }
}
const mapStateToProps = (state) => {
    return {
        username : state.UserInfo.userRequest,
        users : state.users,

    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
export default LoginContainer;
