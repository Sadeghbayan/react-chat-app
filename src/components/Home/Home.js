import React, {Component} from 'react';
import { Layout, Row, Col } from 'antd';
import ChatLayout from "../Chat/ChatLayout"
const { Content, Footer } = Layout;

class Home extends Component {
    render() {
        return (
            <div>
                <Content style={{ padding: '0 50px' }}>
                    <Row>
                        <Col span={20} offset={2}>
                           <ChatLayout />
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Bunq assignment - chat app</Footer>
            </div>
        );
    }
}


export default Home;
