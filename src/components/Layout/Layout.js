import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Layout } from 'antd';
import Home from '../Home/Home'


const { Header, Content, Footer } = Layout;


class Layout extends Component {

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>


    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>

                    <Home />

                </Content>
                <Footer style={{ textAlign: 'center' }}>Bunq Assignment</Footer>
            </Layout>

    );
    }
}

export default Layout;
