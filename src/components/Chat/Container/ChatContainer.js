import { connect } from 'react-redux';
import ChatLayout from '../ChatLayout'
import { fetchUsers } from '../../../store/actions/usersList/usersListActions'
import {personalChatRequest, sendMessageInPersonalChat} from "../../../store/actions/chat/chatActions";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers:() => dispatch(fetchUsers()),
        personalChatRequest:(users) => dispatch(personalChatRequest(users)),
        sendMessageInPersonalChat:(data) => dispatch(sendMessageInPersonalChat(data)),
        }
}
const mapStateToProps = (state) => {
    return {
        users : state,
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(ChatLayout)
export default ChatContainer;
