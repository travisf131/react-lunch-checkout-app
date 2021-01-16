import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const burger = (props) => {

    // this will be the final array of JSX BurgerIngredient components created below
    let ingredientList = []

    // get all of the keys from the ingredients object
    const dynamicIngredientsKeys = Object.keys(props.ingredients)
    
    // map the above array, and for each key figure out how many of that item there are
    dynamicIngredientsKeys.map( igKey => {

        // for the value (or amount) of each key (or ingredient), push an ingredient component to ingredientList array.
        for (let i = 0; i < props.ingredients[igKey]; i++){
            ingredientList.push(
                <BurgerIngredient key={igKey + i} type={igKey}/>
            )
        }
    })

    // if there are no ingredients selected, display message
    if (ingredientList.length === 0){
        ingredientList = <p>Create Your Burger!</p>
    }


    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientList}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;