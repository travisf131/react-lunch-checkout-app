import { checkPropTypes } from 'prop-types';
import React from 'react';
import styles from './Modal.module.css';
import Backdrop from './Backdrop/Backdrop';

const modal = (props) => {

    return (
        <React.Fragment>
            <Backdrop show={props.display} clickOff={props.modalClose}/>
            <div className={styles.Modal} 
                style={{ transform: props.display ? "translateY(0)" : "translateY(-100)", 
                opacity: props.display ? '1' : '0'
            }}>
            {props.children} 
            </div>

        </React.Fragment>
        
    )
}

export default modal;