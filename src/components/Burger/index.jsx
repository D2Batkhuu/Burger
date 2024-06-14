import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css"

const Burger = props =>{


    
    // console.log(props.orts);
    const items = Object.entries(props.orts);
    // console.log(items);
    let content = [];
    items.forEach(el  => {
        for (let i=0 ; i< el[1]; i++)          // ${j+1} ${el[0]}
         content.push(<BurgerIngredient  key = {`${el[0]}${i+1}`}type = {el[0]} 
        /> );
    });

    if(content.length===0)
         content = <p>Хачиртай талхны орцыг сонгоно уу...</p>;
    return(
        <div className={css.Burger}>
            <BurgerIngredient type = "bread-top"/> 
            {content}
            <BurgerIngredient type = "bread-bottom"/>
        </div>
    );
}



export default Burger;


// const Burger =() => <div className={css.Burger}>
//     <BurgerIngredient type="bread-top"/>
// </div>
   /* <BurgerIngredient type="salad"/> */
    /* <BurgerIngredient type="meat"/>
    <BurgerIngredient type="cheese"/>
    <BurgerIngredient type="bacon"/>
    <BurgerIngredient type="cheese"/>
    <BurgerIngredient type="salad"/>
    <BurgerIngredient type="meat"/>
    <BurgerIngredient type="meat"/> }*/


 
//     <BurgerIngredient type="bread-bottom"/>


