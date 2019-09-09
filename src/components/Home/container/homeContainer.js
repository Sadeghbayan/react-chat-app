import { connect } from 'react-redux';
import HomeComponent from '../Home'

const mapStateToProps = (state) => {
    return {
        user : state.UserInfo.userRequest,

    }
}

const LoginContainer = connect(mapStateToProps, null)(HomeComponent)
export default LoginContainer;
