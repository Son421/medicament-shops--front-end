import React from 'react';
import './medicineElement.css';

export default function MedicineElement(props){

    function addCartItem(){
        props.addToCart(props.medicine);
    }

    return(
        <div className='medicine-element__wrapper'>
            <div className='medicine-element__pic'></div>
            <div className='medicine-element__drug-name'> {props.medicine.name}</div>
            <button className='medicine-element__cart_button' onClick={addCartItem}>add to Cart</button>
        </div>
    )
}
