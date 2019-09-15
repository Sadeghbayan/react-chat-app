import React, {Component} from 'react';
import ListUser from '../UsersList/UsersList'
import ChatActions from '../ChatActions/ChatActions'
import PropTypes from 'prop-types';
import styles from './ChatSidebar.module.scss'
import {Spin} from "antd";


class ChatSidebar extends Component {
    handleSelectedItem = id => {
        let users = []
        users.users = [...this.props.currentUser, ...id]
        if(this.props.chatHistory){
            this.props.chatHistory.indexOf(id) === -1 ? this.props.personalChatRequest(users) : console.log("This item already exists");
        }else{
            this.props.personalChatRequest(users)
        }
    }
    render() {
        const usersList = this.props.usersItem.filter(item => item.id !== this.props.currentUser)
        return (
            <div>
                    <div className={styles.peopleList}>
                        <div className={styles.addConversation}>
                            <ChatActions {...this.props}/>
                        </div>
                        {
                            this.props.usersItem ? (
                                <ul className={styles.list}>
                                    {usersList.map(item => <ListUser handleItem={this.handleSelectedItem} item={item} key={item.id} />)}
                                </ul>
                            ) : (
                                <div className={styles.loading}> <Spin /> </div>
                            )}
                    </div>
            </div>

        );
    }
}

ChatSidebar.propTypes = {
    usersItem: PropTypes.array.isRequired,
    currentUser: PropTypes.string.isRequired,
    personalChatRequest: PropTypes.func.isRequired,
};

export default ChatSidebar;