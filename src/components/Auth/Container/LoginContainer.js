import { connect } from 'react-redux';
import LoginComponent from '../Login'
import { loginRequest } from '../../../store/actions/login/loginActions'


const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest:(username) => dispatch(loginRequest(username))
    }
}
const mapStateToProps = (state) => {
    return {
        username : state.UserInfo.userRequest
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
export default LoginContainer;
