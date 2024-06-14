import React from "react";
import Button from "../General/Button"
const OrderSummery = (props) => {
    return (
    <div>
        <h3>Таны захиалга</h3>
        <p>Таны сонгосон орцууд</p>
        <ul>
            {/* <li>Bacon : 1</li> */}
            {Object.keys(props.ingredients).map(el => (
                <li key={el}>{props.ingredientsNames[el]} : {props.ingredients[el]}</li>
            ))}
        </ul>
            <p><strong>Захиалгын дүн : {props.price}₮</strong></p>
            <p>Цааш нь үргэлжлүүлэх үү?</p>
            <Button daragdsan={props.onCancel} btnType="Danger" text="ТАТГАЛЗАХ"/>
            <Button daragdsan={props.onContinue}btnType="Success" text="ҮРГЭЛЖЛҮҮЛЭХ"/>
        </div>
    );
};

export default OrderSummery;