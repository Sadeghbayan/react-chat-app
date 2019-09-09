import React from 'react';
import {Form, Icon, Input, Button, Layout, Row, Col, Typography, notification, Spin} from 'antd';
import UsersBoxItem from "../Users/UsersBoxItem"
import styles from "./Login.module.scss";


const { Content } = Layout;
const { Title } = Typography;

const FormItem = Form.Item;

class Login extends React.Component {
    handleSubmit = (e) => {
        this.props.loginRequest(e)
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(!prevProps.username && this.props.username, "aaa")
        if(!prevProps.username && this.props.username){
            const {status, username} = this.props.username
            var self = this;
            if(status) {
                notification['success']({
                    message: `Hello ${username}`,
                    description:
                        'Welcome to the chat app.',
                    icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
                    duration: 2,
                });
                setTimeout(function () {
                    self.props.history.push('/')
                }, 500)
            }
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const {users} = this.props.users
        return (
            <div className="login">
                <Row>
                    <Col span={12} offset={6}>
                        <Content style={{ padding: '50px 0' }}>
                            <Typography>
                                <Title>Sign In With:</Title>
                            </Typography>
                            {
                                users ? (
                                    <div className={styles.usersWrapper}>
                                        {users.map(item => <UsersBoxItem signIn={this.handleSubmit} item={item} key={item.id} />)}
                                    </div>
                                ) : (
                                    <div className={styles.loading}> <Spin /> </div>
                            )}
                        </Content>
                    </Col>
                </Row>
            </div>

        );
    }
}
export default Form.create()(Login);