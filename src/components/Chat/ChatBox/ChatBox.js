import React, {Component} from 'react';
import styles from "./ChatBox.module.scss"
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import ChatSidebar from "../ChatSidebar/ChatSidebar";
const { TextArea } = Input;

class ChatBox extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let senderId = this.props.senderId
                values['senderId'] = senderId
                values['conversationId'] = this.props.conversationId
                this.props.sendMessageInPersonalChat(values)
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        let targetPersonId = this.props.targetPerson
        let targetPersonName = this.props.users.find(item => item.id == targetPersonId)
        return (
                <div className={styles.chat}>
                    <div className={`${styles.chatHeader} ${styles.clearfix}`}>
                        <div className={styles.chatAbout}>
                            <div className={styles.chatWith}>Chat with {targetPersonName.name}</div>
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
                        <Form onSubmit={this.handleSubmit} className="chat-form">
                            <Form.Item>
                                {getFieldDecorator('message', {
                                    rules: [{ required: true, message: 'Please type your message' }],
                                })(
                                    <TextArea rows={3} placeholder="Type your message"/>,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit">
                                   Send
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
        );
    }
}
ChatBox.propTypes = {
    targetPerson: PropTypes.string.isRequired,
    senderId: PropTypes.string.isRequired,
    sendMessageInPersonalChat: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    conversationId: PropTypes.string.isRequired
};
export default Form.create()(ChatBox);