import React from "react";

const OrderSummery = (props) => {
    return (
    <div>
        <h3>Таны захиалга</h3>
        <p>Таны сонгосон орцууд</p>
        <ul>
            {/* <li>Bacon : 1</li> */}
            {Object.keys(props.ingredients).map(el => (
                <li>{props.ingredientsNames[el]} : {props.ingredients[el]}</li>
            ))}
        </ul>
            <p>Цааш нь үргэлжлүүлэх үү?</p>
        </div>
    );
};

export default OrderSummery;