import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ChatSidebar.module.scss'
import {Spin} from "antd";

class ChatSidebar extends Component {
    render() {
        const {users} = this.props

        return (
            <div>
                    <div className={styles.peopleList}>
                        <div className={styles.search}>
                            <input type="text" placeholder="search" />
                        </div>
                        {
                            users ? (
                                <ul className={styles.list}>
                                    <li className={styles.clearfix}>
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
                                        <div className={styles.about}>
                                            <div className={styles.name}>Vincent Porter</div>
                                            <div className={styles.status}>
                                                online
                                            </div>
                                        </div>
                                    </li>
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
    users: PropTypes.array
};

export default ChatSidebar;