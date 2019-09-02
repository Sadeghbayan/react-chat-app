import React from 'react';
import { Form, Icon, Input, Button, Layout, Row, Col, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const FormItem = Form.Item;

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                var self = this;
                console.log(values)
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <Row>
                    <Col span={12} offset={6}>
                        <Content style={{ padding: '50px 0' }}>
                            <Typography>
                                <Title>Sign In</Title>
                            </Typography>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <FormItem>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'username is required.' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Login
                                    </Button>
                                </FormItem>
                            </Form>
                        </Content>
                    </Col>
                </Row>
            </div>

        );
    }
}
export default Form.create()(Login);