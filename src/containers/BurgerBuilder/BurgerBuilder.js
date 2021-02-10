import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const PRICES = {
    lettuce: 1.00,
    cheese: 2.00,
    meat: 4.50,
    bacon: 3.25
}
export const BASE_PRICE = 4.50

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            lettuce: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: BASE_PRICE,
        orderModal: false
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

            //change price also only if there is an ingredient to remove
            newTotal = oldPrice - PRICES[ingName]   
        } 

        this.setState({
            ingredients: ingredientAmount,
            totalPrice: newTotal
        })
    }

    orderModalHandler = () => {
        this.setState({ orderModal: true})
    }


    cancelOrderHandler = () => {
        this.setState({ orderModal: false})
    }

    continueOrderHandler = () => {
        alert("CONTINUE!"); 
    }

    render() {

        // create a copy of ingredients object and change thier values to true if the value is 0.
        // this true or false will be sent to the AddItems "Less" button to disable it if true
        let disabled = {...this.state.ingredients}
        for (let key in disabled){
            disabled[key] = disabled[key] <= 0
        }

        return (
            <div>
                <Modal display={this.state.orderModal} modalClose={this.cancelOrderHandler}>
                    <OrderSummary ingredients={this.state.ingredients} 
                                    modalClose={this.cancelOrderHandler}
                                    continueOrder={this.continueOrderHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    clickLess={this.decreaseAmountButton} 
                    clickMore={this.increaseAmountButton}
                    disabled={disabled}
                    totalPrice={this.state.totalPrice}
                    showOrderModal={this.orderModalHandler}/>
            </div>
        )
    }
}

export default BurgerBuilder;