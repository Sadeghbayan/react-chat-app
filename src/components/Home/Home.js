import React, {Component} from 'react';
import { Layout, Row, Col, Menu, Icon } from 'antd';
import ChatContainer from "../Chat/Container/ChatContainer"
const { Content, Footer, Header } = Layout;

class Home extends Component {
    logOut = () => {
        localStorage.clear();
        this.props.history.push('/login')
    }
    render() {
        const {user} = this.props
        let userInfo = ''
        if(!user){
            userInfo = localStorage.getItem(('user'));
            userInfo = JSON.parse(userInfo);
            console.log(userInfo)
        }
        return (
            <div>
                <Header>
                    <Row>
                        <Col span={12}>
                            <span className="white-color">Hello {(user ? user.username : userInfo.name)} </span>
                            <Icon type="smile" style={{ color: '#fff' }} />
                        </Col>
                        <Col span={12} className="text-right">
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '64px' }}
                            >
                                <Menu.Item key="1" onClick={this.logOut}>Log out</Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Row>
                        <Col span={20} offset={2}>
                           <ChatContainer />
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Bunq assignment - chat app</Footer>
            </div>
        );
    }
}


export default Home;
