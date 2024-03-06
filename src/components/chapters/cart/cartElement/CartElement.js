import React from 'react';
import './cartElement.css'

export default function CartElement(props){

    function incrementQuantity(){
        let inc = props.cart.quantity + 1;
        props.changeQuantity(props.cart.id, inc);
    }

    function decrementQuantity(){
        if(props.cart.quantity != 0){
            let dec = props.cart.quantity - 1;
            props.changeQuantity(props.cart.id, dec);
        }
    }

    function deleteDrug(){
        props.removeDrug(props.cart.id);
    }
 
    return(
        <div className='cart-element__wrapper'>
            <div className='cart-element__pic'></div>
            <div className='cart-element__text'> 
                <button className='cart-element-delete' onClick={deleteDrug}> X </button> 
                <p className='cart-element__drug-name'>{props.cart.name}</p>
                <div>Price: {props.cart.price * props.cart.quantity}</div>
                <div className='cart-element__price-counter'>
                    <div className='cart-element__price-counter--number'> {props.cart.quantity} </div>
                    <div className='cart-element__price-counter--button'>
                        <button className='cart-element__price-counter--button-up' onClick={incrementQuantity}></button>
                        <button className='cart-element__price-counter--button-down' onClick={decrementQuantity}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}