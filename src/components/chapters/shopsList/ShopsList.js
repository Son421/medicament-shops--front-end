import React, {useState, useEffect} from 'react';
import './shopsList.css';
import ShopElement from './shopElement/ShopElement';

export default function ShopsList(props){
    const [shops, setShops] = useState([]);
    
    useEffect(() =>{
        fetch('https://medicament-shops.onrender.com/shops', {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        }).then(res => res.json()).then(res => setShops(res));
    }, []);

    return(
        <div className='shops-list__wrapper'> 
            <span> Shops: </span>
            {shops.map((shopItem) => (
                <ShopElement shop={shopItem} showDrug={props.showDrug} key={shopItem.id}/>
            ))}
        </div>
    )
}