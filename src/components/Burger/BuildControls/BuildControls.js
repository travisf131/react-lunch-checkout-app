import React from 'react';
import styles from './BuildControls.module.css';
import AddItem from './AddItem/AddItem';
import {BASE_PRICE} from '../../../containers/BurgerBuilder/BurgerBuilder';

const controls = [
    {itemName: "Meat", type: "meat"},
    {itemName: "Cheese", type: "cheese"},
    {itemName: "Lettuce", type: "lettuce"},
    {itemName: "Bacon", type: "bacon"}
]

const buildControls = (props) => {

    // setting the logic for the order now button to only be enabled when items are selected
    // (i.e. when total pirce is < 4.5)
    let orderButtonStatus = true
    if (props.totalPrice > BASE_PRICE){
        orderButtonStatus = false
    }

    // the "type" will be passed to each build control to be used when the onClick is triggered
    // which will trigger the appropriate addAmount or decreaseAmount function in BurgerBuilder
    return (
    
        <div className={styles.BuildControls}>
            <h3>Total Price: ${props.totalPrice}</h3>
            {controls.map(control => (
                <AddItem 
                    itemName={control.itemName}
                    type={control.type} 
                    clickLess={props.clickLess} 
                    clickMore={props.clickMore}
                    disabled={props.disabled}/>
            ))}
            <button className={styles.OrderButton} 
                    disabled={orderButtonStatus} 
                    onClick={props.showOrderModal}>
                    Order Now
                </button>
        </div>
    )
};

export default buildControls;