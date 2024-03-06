import React, {useState, useEffect} from 'react';
import MedicineElement from './medicineElement/MedicineElement';
import './medicineList.css';

export default function MedicinesList(props){
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        const items = JSON.parse(localStorage.getItem('cart'));
        if(items){
            setCart(items);
        }
    }, [])
   
    useEffect(() =>{
        if(cart.length !== 0){
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    function addToCart(cartItem){
        const dublicateIndex = cart.findIndex(item => item.id == cartItem.id);
        if(dublicateIndex != -1){
            const cartDoublicateItems = cart;
            cartDoublicateItems[dublicateIndex].quantity = cart[dublicateIndex].quantity + 1;
            const cartItems = cartDoublicateItems.concat(cartItem);
            setCart(cartItems);
        }else{
            const cartItems = cart.concat(cartItem);
            setCart(cartItems);
        } 
    }

    return(
        <div className='medicine-list__wrapper'>
            {props.medicines.map((medicineItem) => (
                    <MedicineElement medicine={medicineItem} addToCart={addToCart} key={medicineItem.id}/>
                ))}
        </div>
    )
}