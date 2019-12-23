import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './UsersBoxItem.module.scss'



class UsersBoxItem extends Component {
    handleSubmit = (e) => {
        this.props.signIn(this.props.item)
    }
    render() {
        return (
            <div className={`${styles.box} ${styles.orange}`}>
                <div className={styles.dot}></div>
                <div className={`${styles.dot} ${styles.two}`}></div>
                <div className={styles.face}>
                    <div className={styles.eye}></div>
                    <div className={`${styles.eye} ${styles.right}`}></div>
                    <div className={`${styles.mouth} ${styles.happy}`}></div>
                </div>
                <div className={`${styles.shadow} ${styles.scale}`}></div>
                <div className={styles.message}><h1 className={styles.alert}>H!</h1><p>My name is {this.props.item.name}</p></div>
                <button className={styles.buttonBox} onClick={this.handleSubmit}>Log In</button>
            </div>
        );
    }
}

UsersBoxItem.propTypes = {
    item: PropTypes.object,
    loading: PropTypes.array

};
export default UsersBoxItem;