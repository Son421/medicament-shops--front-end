import React, {useState, useEffect} from 'react';
import MedicineElement from './medicineElement/MedicineElement';
import './medicineList.css';

export default function MedicinesList(props){
    const [cart, setCart] = useState([]);
    const [medicament, setMedicament] = useState();

    useEffect(() =>{
        fetch(`https://medicament-shops.onrender.com/shops/products/${props.shop.name}`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        }).then(res => res.json()).then(res => {
            setMedicament(res.products)
        });
    }, []);

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
            cartItem.quantity = 0;
            const cartItems = cart.concat(cartItem);
            setCart(cartItems);
        } 
    }

    if(medicament){
        return(
            <div className='medicine-list__wrapper'>
                {medicament.map((medicineItem) => (
                        <MedicineElement medicine={medicineItem} addToCart={addToCart} key={medicineItem.id}/>
                    ))}
            </div>
        )
    }else{
        return null;
    }
}
   