import { connect } from 'react-redux';
import ChatLayout from '../ChatLayout'
import { fetchUsers } from '../../../store/actions/chat/chatActions'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers:() => dispatch(fetchUsers()),
    }
}
const mapStateToProps = (state) => {
    return {
        users : state.Chat.users,
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(ChatLayout)
export default ChatContainer;
