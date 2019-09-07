import React, {Component} from 'react';
import styles from "./ChatBox.module.scss"


class ChatBox extends Component {
    render() {
        return (
                <div className={styles.chat}>
                    <div className={`${styles.chatHeader} ${styles.clearfix}`}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />

                        <div className={styles.chatAbout}>
                            <div className={styles.chatWith}>Chat with Vincent Porter</div>
                            <div className={styles.chatNumMessages}>already 1 902 messages</div>
                        </div>
                    </div>

                    <div className={styles.chatHistory}>
                        <ul>
                            <li className={styles.clearfix}>
                                <div className={`${styles.messageData} ${styles.alignRight} ${styles.floatRight}`}>
                                    <span className={styles.messageDataTime}>10:10 AM, Today</span> &nbsp; &nbsp;
                                    <span className={styles.messageDataName}>Olia</span>

                                </div>
                                <div className={`${styles.message} ${styles.otherMessage} ${styles.floatRight}`}>
                                    Hi Vincent, how are you? How is the project coming along?
                                </div>
                            </li>

                            <li>
                                <div className={styles.messageData}>
                                    <span className={styles.messageDataName}> Vincent</span>
                                    <span className={styles.messageDataTime}>10:12 AM, Today</span>
                                </div>
                                <div className={`${styles.message} ${styles.myMessage}`}>
                                    Are we meeting today? Project has been already finished and I have results to show you.
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div className={`${styles.chatMessage} ${styles.clearfix}`}>
                        <textarea name="message-to-send" placeholder ="Type your message" rows="3"></textarea>

                        <button>Send</button>

                    </div>

                </div>
        );
    }
}

export default ChatBox;