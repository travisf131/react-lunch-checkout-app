import { checkPropTypes } from 'prop-types';
import React from 'react';
import styles from './Modal.module.css';

const modal = (props) => {

    return (
        <div className={styles.Modal} 
            style={{ transform: props.display ? "translateY(0)" : "translateY(-100)", 
            opacity: props.display ? '1' : '0'
        }}>
        {props.children} 
        </div>
    )
}

export default modal;