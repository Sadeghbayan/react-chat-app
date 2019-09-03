import React, {Component} from 'react';
import ChatSidebar from "./ChatSidebar/ChatSidebar"
import ChatBox from "./ChatBox/ChatBox"
class ChatLayout extends Component {
    render() {
        return (
            <div>
                <ChatSidebar />
                <ChatBox />
            </div>
        );
    }
}

export default ChatLayout;