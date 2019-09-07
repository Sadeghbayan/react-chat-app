import React, {Component} from 'react';
import ChatSidebar from "./ChatSidebar/ChatSidebar"
import ChatBox from "./ChatBox/ChatBox"
import styles from "./ChatLayout.module.scss"
import {fetchUsers} from "../../store/actions/chat/chatActions";

class ChatLayout extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }
    render() {
        return (
            <div className={styles.layoutContainer}>
                <ChatSidebar users={this.props.users}/>
                <ChatBox />
            </div>
        );
    }
}

export default ChatLayout;