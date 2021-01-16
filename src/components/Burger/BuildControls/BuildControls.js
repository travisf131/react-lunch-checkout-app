import React from 'react';
import styles from './BuildControls.module.css';
import AddItem from './AddItem/AddItem';

const buildControls = (props) => {

    // the "type" will be passed to each build control to be used when the onClick is triggered
    // which will trigger the appropriate addAmount or decreaseAmount function in BurgerBuilder
    return (
        <div className={styles.BuildControls}>
            <AddItem itemName="Meat" type="meat" clickLess={props.clickLess} clickMore={props.clickMore}/>
            <AddItem itemName="Cheese" type="cheese" clickLess={props.clickLess} clickMore={props.clickMore}/>
            <AddItem itemName="Lettuce" type="lettuce" clickLess={props.clickLess} clickMore={props.clickMore}/>
            <AddItem itemName="Bacon" type="bacon" clickLess={props.clickLess} clickMore={props.clickMore}/>
        </div>
    )
};

export default buildControls;