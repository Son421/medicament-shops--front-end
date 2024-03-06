import React,{useState} from 'react';
import ShopsList from '../../chapters/shopsList/ShopsList';
import MedicinesList from '../../chapters/medicinesList/MedicinesList';
import './shop.css';

export default function Shop(){
    const [shop, setShop] = useState();

    function showDrug(drugShop){
        setShop(drugShop);
    }

    return(
        <div>
          <section className='shop__wrapper'>
            <ShopsList showDrug={showDrug}/>
            <MedicinesList medicines={shop.productsList} />
          </section>
        </div>
    )
}