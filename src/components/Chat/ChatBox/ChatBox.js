import React, {Component} from 'react';
import styles from "./ChatBox.module.scss"
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import ChatText from '../ChatText/ChatText'
import UsersBoxItem from "../../Users/UsersBoxItem";
const { TextArea } = Input;

class ChatBox extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let senderId = this.props.senderId
                values['senderId'] = senderId
                values['targetPerson'] = this.props.targetPerson
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
                        {this.props.listMsg.length > 0 ?
                            (this.props.listMsg.map(item => <ChatText msg={item.txt} key={item.id}/>)) :
                            (<span className="text-center">No messages</span>)
                        }
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