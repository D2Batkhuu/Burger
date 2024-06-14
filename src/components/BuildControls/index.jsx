import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css"

const BuildControls = props => {
    return (
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ : <strong>{props.price} </strong>
            </p>



     {/* console.log(Object.keys(controls)) */}
    {   Object.keys(props.ingredientsNames).map(el => (

         <BuildControl 
        key={el}
         ortsHasah={props.ortsHasah} 
         ortsNemeh={props.ortsNemeh} 
         disabled={props.disabledIngredients}
         // {'cheese':true, 'bacon':false,... }
         type={el} 
         orts={props.ingredientsNames[el]}
         />
    ))}

    <button disabled = {props.disabled} className={css.OrderButton}>Захиалах</button>
         {/* <BuildControl 
         ortsHasah={props.ortsHasah} 
         ortsNemeh={props.ortsNemeh} 
         disabled={props.disabledIngredients}
         type="bacon" 
         orts="гахайн мах"
         />
         <BuildControl 
         ortsHasah={props.ortsHasah} 
         ortsNemeh={props.ortsNemeh} 
         disabled={props.disabledIngredients}
         type="cheese" 
         orts="бяслаг"
         />
         <BuildControl 
         ortsHasah={props.ortsHasah} 
         ortsNemeh={props.ortsNemeh} 
         disabled={props.disabledIngredients}
         type="meat" 
         orts="үхрийн мах"
         /> */}
        </div>
    
            // <div className={css.BuildControls}>
            // <BuildControl ortsHasah={()=> props.ortsHasah('salad')}
            // ortsNemeh={props.ortsNemeh} type="salad" orts="салад"/>
            // <BuildControl ortsHasah={()=> props.ortsHasah('bacon')}
            // ortsNemeh={props.ortsNemeh} type="bacon" orts="гахайн мах"/>
            // <BuildControl ortsHasah={()=> props.ortsHasah('cheese')} ortsNemeh={props.ortsNemeh} type="cheese" orts="бяслаг"/>
            // <BuildControl ortsHasah={()=> props.ortsHasah('meat')} ortsNemeh={props.ortsNemeh} type="meat" orts="үхрийн мах"/>
            // </div>
       
    );
}
export default BuildControls;