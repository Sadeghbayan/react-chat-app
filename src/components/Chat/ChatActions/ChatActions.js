import React, {Component} from 'react';
import {Button, Dropdown, Icon, Menu, Modal} from "antd";
import UsersList from "../UsersList/UsersList"
import styles from "../ChatSidebar/ChatSidebar.module.scss";



class ChatActions extends Component {
    state = {
        visible: false,
        title : 'Add memebers',
        width: 350
    };
    handleMenuClick = (e) => {
        if(e.key == '1'){
            this.setState({
                visible: true,
            });
        }
    }


    handleSelectedItem = (id) => {
        console.log(id);
        this.setState({
            visible: false,
        });
    }

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">
                    <Icon type="plus-circle" theme="filled" />
                    Personal Chat
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="plus-circle" theme="filled" />
                    Group Chat
                </Menu.Item>
            </Menu>
        );
        const usersList = this.props.usersItem.filter(item => item.id !== this.props.currentUser)

        return (
            <div>
                <Dropdown overlay={menu} trigger={['click']}>
                    <Button icon="plus" type="primary">
                        New
                    </Button>
                </Dropdown>

                <Modal
                    width={this.state.width}
                    title={this.state.title}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                >
                    <div className={`${styles.peopleList} ${styles.black}`}>
                        <ul>
                            {usersList.map(item => <UsersList handleItem={this.handleSelectedItem} item={item} key={item.id} />)}
                        </ul>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ChatActions;