import React, {Component} from 'react';
import {Icon} from 'antd'
import PropTypes from 'prop-types';
import styles from '../ChatSidebar/ChatSidebar.module.scss'
// TODO : FiXME styles should be seperate from chatsidebar

class UsersList extends Component {
    render() {
        return (
            <div>
                <li className={styles.clearfix} onClick={()=>this.props.handleItem(this.props.item.id)}>
                    <a className={styles.about}>
                        <Icon type="smile" style={{ fontSize:'36px' }}/>
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