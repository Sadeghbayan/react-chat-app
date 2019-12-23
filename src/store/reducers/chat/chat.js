import {
    PERSONAL_CHAT_REQUEST,
    PERSONAL_CHAT_SUCCESS,
    PERSONAL_CHAT_FAILED,
    PERSONAL_CHAT_MESSAGE_REQUEST,
    PERSONAL_CHAT_MESSAGE_SUCCESS,
    PERSONAL_CHAT_MESSAGE_FAILED
} from '../../actions/names';

let messages = []
let messageItems = {}
let message = []
let chatHistory = []
const chat = (state = [], action) => {
    switch (action.type) {
        case PERSONAL_CHAT_REQUEST:
            let senderId = action.payload.users[0]
            let targetPerson = action.payload.users[1]
            chatHistory.indexOf(targetPerson) === -1 ? chatHistory.push(targetPerson) : console.log("This item already exists");
            let newChatState = {...state, chatRequests: action.payload, messages:messages, chatStatus:false, senderId:senderId, targetPerson:targetPerson, chatHistory:chatHistory};
            return newChatState;

        case PERSONAL_CHAT_SUCCESS:
            let personalChatConversationState = {...state, personalChatConversationId: action.data, chatStatus:true};
            return personalChatConversationState;

        case PERSONAL_CHAT_MESSAGE_SUCCESS:
            if(messages.length == 0){
                message.push({id:action.data.id, txt:action.data.txt})
                messageItems.confId = state.personalChatConversationId.id;
                messageItems.targetId = action.data.targetId;
                messageItems.message = message;
                messages.push(messageItems)
            }else{
                const found = messages.some(v => v.confId === state.personalChatConversationId.id);
                if(!found){
                    message = []
                    messageItems = {}
                    message.push({id:action.data.id, txt:action.data.txt})
                    messageItems.confId = state.personalChatConversationId.id;
                    messageItems.targetId = action.data.targetId;
                    messageItems.message = message;
                    messages.push(messageItems)
                }else{
                    messages.find(function (value) {
                        if(value.confId == state.personalChatConversationId.id){
                            value.message.push({id:action.data.id, txt:action.data.txt})
                        }
                    })
                }

            }
            let personalChatMessageSuccess = {...state, messages: messages};
            return personalChatMessageSuccess;

        case PERSONAL_CHAT_MESSAGE_FAILED:
            let personalChatMessageFailed = {...state, chatError: true};
            return personalChatMessageFailed;

        default:
            return state
    }
}

export default chat;
