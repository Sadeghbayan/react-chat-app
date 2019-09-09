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
            console.log(this.props.users.UserInfo)
            userInfo = this.props.users.UserInfo.userRequest
        }
        return (
            <div>
                {this.props.users.users.users ?
                    (
                        <div className={styles.layoutContainer}>
                            <ChatSidebar usersItem={this.props.users.users.users} currentUser={userInfo.id}/>
                            <ChatBox />
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