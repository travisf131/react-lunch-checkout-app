import React from 'react';
import styles from './AddItem.module.css';

const addItem = (props) => {

    // onClick passes the type ("meat", "cheese", etc) to the clickX prop (both of which correspond to the
    // increase and decrease amount handlers in Burger Builder)
    return (
        <div className={styles.AddItem}>
            <div className={styles.Label}>{props.itemName}</div>
            <button className={styles.Less} onClick={() => props.clickLess(props.type)}>Less</button>
            <button className={styles.More} onClick={() => props.clickMore(props.type)}>More</button>
        </div>
    )

}

export default addItem;