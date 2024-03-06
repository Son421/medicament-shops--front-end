import React from 'react';
import './shopElement.css';

export default function ShopElement(props){

    function showUp(){
        props.showDrug(props.shop);
    }

    return(
        <div> 
            <button className='shop-element__wrapper' onClick={showUp}>{props.shop.name}</button>
        </div>
    )
}