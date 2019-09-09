import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './UsersBoxItem.module.scss'

let colorClasses = [
    styles.red,
    styles.picton,
    styles.green,
    styles.purple,
    styles.orange
];

class UsersBoxItem extends Component {
    handleSubmit = (e) => {
        this.props.signIn(this.props.item)
    }
    render() {
        let colorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
        // colorClasses = colorClasses.filter(item => item !== colorClass)
        return (
            <div className={`${styles.box} ${colorClass}`}>
                <div className={styles.dot}></div>
                <div className={`${styles.dot} ${styles.two}`}></div>
                <div className={styles.face}>
                    <div className={styles.eye}></div>
                    <div className={`${styles.eye} ${styles.right}`}></div>
                    <div className={`${styles.mouth} ${styles.happy}`}></div>
                </div>
                <div className={`${styles.shadow} ${styles.scale}`}></div>
                <div className={styles.message}><h1 className={styles.alert}>H!</h1><p>My name is {this.props.item.name}</p></div>
                <button className={styles.buttonBox} onClick={this.handleSubmit}><h1 className={styles.green}>Log In</h1></button>
            </div>
        );
    }
}

UsersBoxItem.propTypes = {
    item: PropTypes.object,
    loading: PropTypes.array

};
export default UsersBoxItem;