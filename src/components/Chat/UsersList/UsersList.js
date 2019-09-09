import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from '../ChatSidebar/ChatSidebar.module.scss'
// TODO : FiXME styles should seperate from chatsidebar

class UsersList extends Component {
    render() {
        return (
            <div>
                <li className={styles.clearfix}>
                    <a className={styles.about}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
                        <span className={styles.info}>
                            <span className={styles.name}>{this.props.item.name}</span>
                            <span className={styles.status}>
                                online
                            </span>
                        </span>
                    </a>
                </li>
            </div>
        );
    }
}
UsersList.propTypes = {
    item: PropTypes.object,
};
export default UsersList;