import React from 'react';



const orderSummary = (props) => {

    // pass ingredients object (state) as a prop (ingredients), then transform object to array of keys
    // then for each key in the new array, return a list item with key name and amount
    const finalIngredientList = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTranform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
            )
        })

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>One burger with the following toppings:</p>
            <ul>
                {finalIngredientList}
            </ul>
            <p>Continue to checkout?</p>
        </React.Fragment>
    )
}

export default orderSummary;