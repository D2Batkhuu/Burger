import React ,{Component} from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../components/General/Modal'
import OrderSummery from '../../components/OrderSummary';

const INGREDIENT_PRICES = {salad: 500,cheese: 800, bacon: 800, meat : 3000};
const INGREDIENT_NAMES = {
    bacon : 'Гахайн мах',
    cheese : 'Бяслаг',
    meat : 'Үхрийн мах',
    salad : 'Салад'
};

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0,
            // salad: 0,
            // cheese: 2,
            // bacon: 2,
            // meat: 1,
        },
        totalPrice : 3000,
        purchasing: false
        
    };

    ortsNemeh = (type) => {
        // console.log("=====>" + type);
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]++;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        
        this.setState({purchasing:true ,totalPrice: newPrice ,ingredients: newIngredients});
    };
    
    ortsHasah = (type) =>{
        if(this.state.ingredients[type] > 0){
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]--;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({purchasing: newPrice>3000,totalPrice: newPrice ,ingredients: newIngredients}); 
    }
};

    render(){
        const disabledIngredients = {...this.state.ingredients};

        for(let key in disabledIngredients) {
            // console.log(disabledIngredients[key]);
            disabledIngredients[key] = disabledIngredients[key] <= 0;
            // console.log(key + '=====>' + disabledIngredients[key])
        }
        return(
            <div>
                <Modal>
                     <h1>Та итгэлтэй байна уу...</h1>
                     <OrderSummery 
                     ingredientsNames={INGREDIENT_NAMES} 
                     ingredients={this.state.ingredients}/>
                </Modal>
                <Burger orts={this.state.ingredients} />
                <BuildControls
                ingredientsNames={INGREDIENT_NAMES} 
                disabled ={!this.state.purchasing}
                
                price = {this.state.totalPrice}
                disabledIngredients={disabledIngredients} 
                ortsHasah={this.ortsHasah} 
                ortsNemeh={this.ortsNemeh}/>
            </div>
            
        );
    }

}

export default BurgerBuilder;