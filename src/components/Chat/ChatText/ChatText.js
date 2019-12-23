import React, {Component} from 'react';
import styles from "../ChatBox/ChatBox.module.scss";
import PropTypes from 'prop-types';
class ChatText extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li className={styles.clearfix}>
                        <div className={`${styles.messageData} ${styles.alignRight} ${styles.floatRight}`}>
                            <span className={styles.messageDataTime}></span> &nbsp; &nbsp;
                            <span className={styles.messageDataName}>You</span>

                        </div>
                        <div className={`${styles.message} ${styles.otherMessage} ${styles.floatRight}`}>
                            {this.props.msg}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
ChatText.propTypes = {
    msg: PropTypes.string.isRequired,
};
export default ChatText;