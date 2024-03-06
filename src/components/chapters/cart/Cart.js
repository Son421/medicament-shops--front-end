import React, {useState} from 'react';
import './cart.css';
import CartElement from './cartElement/CartElement';

export default function Cart(props){

    return(
        <div className='cart__wrapper'>
            {props.cartMedicine.map((cartItem) => (
                <CartElement cart={cartItem} removeDrug={props.removeDrug} changeQuantity={props.changeQuantity} key={cartItem.id}/>
            ))}
        </div>
    )
}