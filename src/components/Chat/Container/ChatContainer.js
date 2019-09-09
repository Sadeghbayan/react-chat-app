import { connect } from 'react-redux';
import ChatLayout from '../ChatLayout'
import { fetchUsers } from '../../../store/actions/usersList/usersListActions'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers:() => dispatch(fetchUsers()),
    }
}
const mapStateToProps = (state) => {
    return {
        users : state.users,
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(ChatLayout)
export default ChatContainer;
