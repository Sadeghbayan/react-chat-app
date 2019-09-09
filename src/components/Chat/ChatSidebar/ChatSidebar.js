import React, {Component} from 'react';
import ListUser from '../UsersList/UsersList'
import PropTypes from 'prop-types';
import styles from './ChatSidebar.module.scss'
import {Spin} from "antd";

class ChatSidebar extends Component {
    render() {
        const {users} = this.props.users

        return (
            <div>
                    <div className={styles.peopleList}>
                        <div className={styles.search}>
                            <input type="text" placeholder="search" />
                        </div>
                        {
                            users ? (
                                <ul className={styles.list}>
                                    {users.map(item => <ListUser item={item} key={item.id} />)}
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
    users: PropTypes.object
};

export default ChatSidebar;