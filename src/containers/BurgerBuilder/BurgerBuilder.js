import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import styled from 'styled-components';

const PRICES = {
    lettuce: 1.00,
    cheese: 2.00,
    meat: 4.50,
    bacon: 3.25
}
const BASE_PRICE = 4.50

const H3 = styled.h3 `
    display: flex;
    justify-content: center;
    text-align: center;
 `

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            lettuce: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: BASE_PRICE
    }

    // increase ingredient amount and total price
    increaseAmountButton = (ingName) => {
        let ingredientAmount = this.state.ingredients
        ingredientAmount[ingName] += 1

        const oldPrice = this.state.totalPrice
        let newTotal = oldPrice + PRICES[ingName]

        this.setState({
            ingredients: ingredientAmount,
            totalPrice: newTotal
        })
    }

    // decrease ingredient amount and total price
    decreaseAmountButton = (ingName) => {
        let ingredientAmount = this.state.ingredients
        const oldPrice = this.state.totalPrice

        // keep the new total the same as the old one by defualt and only update if
        // the condition below is met (there are > 0 ingredients)
        let newTotal = oldPrice 

        if (ingredientAmount[ingName] > 0 ) {
            ingredientAmount[ingName] -= 1

            //change price only if there is an ingredient to remove
            newTotal = oldPrice - PRICES[ingName]   
        } 

        this.setState({
            ingredients: ingredientAmount,
            totalPrice: newTotal
        })
    }

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <H3>Total Price: ${this.state.totalPrice}</H3>
                <BuildControls 
                    clickLess={this.decreaseAmountButton} 
                    clickMore={this.increaseAmountButton}/>
            </div>
        )
    }
}

export default BurgerBuilder;