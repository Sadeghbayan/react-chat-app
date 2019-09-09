import { connect } from 'react-redux';
import HomeComponent from '../Home'
import {logOutRequest} from "../../../store/actions/logout/logoutAction";
import {fetchUsers} from "../../../store/actions/usersList/usersListActions";

const mapDispatchToProps = (dispatch) => {
    return {
        logOutRequest:() => dispatch(logOutRequest()),
    }
}
const mapStateToProps = (state) => {
    return {
        user : state.UserInfo.userRequest,

    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
export default LoginContainer;
