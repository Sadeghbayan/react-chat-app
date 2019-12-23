import { connect } from 'react-redux';
import ChatLayout from '../ChatLayout'
import { fetchUsers } from '../../../store/actions/usersList/usersListActions'
import {personalChatRequest, sendMessageInPersonalChat, getMessageHistory} from "../../../store/actions/chat/chatActions";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers:() => dispatch(fetchUsers()),
        personalChatRequest:(users) => dispatch(personalChatRequest(users)),
        sendMessageInPersonalChat:(data) => dispatch(sendMessageInPersonalChat(data)),
        getMessageHistory:(targetId) => dispatch(getMessageHistory(targetId))
        }
}
const mapStateToProps = (state) => {
    var listMsg = [];
    if(state.chat){
        if ('messages' in state.chat) {
            var msg = state.chat.messages;
                for (var i=0; i < msg.length; i++){
                    if(msg[i].targetId == state.chat.targetPerson){
                        listMsg = msg[i].message
                    }
                }
        }
    }
    return {
        users : state,
        listMsg: listMsg
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(ChatLayout)
export default ChatContainer;
