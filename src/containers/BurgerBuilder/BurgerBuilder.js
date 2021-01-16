import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            lettuce: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        }
    }

    increaseAmountButton = (ingName) => {
        let ingredientsCopy = this.state.ingredients
        ingredientsCopy[ingName] += 1
        this.setState({
            ingredients: ingredientsCopy
        })
    }

    decreaseAmountButton = (ingName) => {
        let ingredientsCopy = this.state.ingredients
        
        if( ingredientsCopy[ingName] > 0 ) {
            ingredientsCopy[ingName] -= 1
        }
        this.setState({
            ingredients: ingredientsCopy
        })
    }

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    clickLess={this.decreaseAmountButton} 
                    clickMore={this.increaseAmountButton}/>
            </div>
        )
    }
}

export default BurgerBuilder;