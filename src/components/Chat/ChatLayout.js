import React, {Component} from 'react';
import ChatSidebar from "./ChatSidebar/ChatSidebar"
import ChatBox from "./ChatBox/ChatBox"
import styles from "./ChatLayout.module.scss"
import {Spin} from "antd";

class ChatLayout extends Component {
    componentDidMount() {
        if(this.props.users.users.length <= 0){
            this.props.fetchUsers();
        }
    }

    render() {
        let userInfo = ''
        if(!this.props.users.UserInfo.length > 0){
            userInfo = localStorage.getItem(('user'));
            userInfo = JSON.parse(userInfo);
        }else{
            userInfo = this.props.users.UserInfo.userRequest
        }
        const activeClass = this.props.users.chat.chatStatus ? styles.active : '';
        return (
            <div>
                {this.props.users.users.users ?
                    (
                        <div className={`${styles.layoutContainer} ${activeClass}`}>
                            <ChatSidebar usersItem={this.props.users.users.users}
                                         currentUser={userInfo.id}
                                         personalChatRequest={this.props.personalChatRequest}
                                         chatHistory={this.props.users.chat.chatHistory}
                                         getMessageHistory={this.props.getMessageHistory}
                            />
                            {this.props.users.chat.chatStatus ?
                                (
                                    <ChatBox targetPerson={this.props.users.chat.targetPerson}
                                             senderId={this.props.users.chat.senderId}
                                             sendMessageInPersonalChat={this.props.sendMessageInPersonalChat}
                                             users={this.props.users.users.users}
                                             conversationId={this.props.users.chat.personalChatConversationId.id}
                                             messages={this.props.users.chat.messages}
                                             listMsg={this.props.listMsg}
                                    />
                                ) : ''}
                        </div>
                    ) : (
                        <div className="full-height text-center"><Spin/></div>
                    )

                }
            </div>

        );
    }
}





export default ChatLayout;