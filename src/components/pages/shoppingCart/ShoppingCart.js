import React, {useState, useEffect} from 'react';
import CustomerForm from '../../chapters/customerForm/CustomerForm';
import Cart from '../../chapters/cart/Cart';
import './shoppingCart.css'

export default function ShoppingCart(){
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [customerInputs, setCustomerInputs] = useState({})

    useEffect(() =>{
        const items = JSON.parse(localStorage.getItem('cart'));
        if(items){
            const sortedItems = sortDoubleDrug(items);
            setTotalPrice(changePrice(sortedItems));
            setProducts(sortedItems);
        }
    }, []);

    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(products));
    }, [products]);

    function sortDoubleDrug(arr){
        let unique = {}
        const newArr = arr.filter((el) => {
            if (!unique[el.id]) {
                unique[el.id] = true;
                return true;
            }
            return false;
        });
        return newArr;
    }

    function removeDrug(drugId){
        const sorted = products.filter(el => el.id !== drugId);
        setProducts(sorted);
        setTotalPrice(changePrice(sorted));
    }

    function changePrice(arr){
        const price = arr.reduce(function(sum, product) {
            return sum + (product.pricePerUnit * product.quantity);
        }, 0);
        return price;
    }

    function changeQuantity(drugId, quantity){
        const drugIndex = products.findIndex(item => item.id == drugId)
        let newCart = products;
        newCart[drugIndex].quantity = quantity;
        setProducts(newCart);
        setTotalPrice(changePrice(newCart));
    }

    function addForm(customerInfo){
        setCustomerInputs(customerInfo);
    }

    function sendCustomerInfo(){
        fetch('https://medicament-shops.onrender.com/shops', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ totalPrice: totalPrice, customerInputs: customerInputs, products: products})
          }).then(response => response.json()).then(data => console.log(data));
    }

    return(
        <div>
            <section className='shopping-cart__wrapper'>
                <CustomerForm addForm={addForm}/>
                <Cart cartMedicine={products} changeQuantity={changeQuantity} removeDrug={removeDrug} />
            </section>
            <section className='shopping-cart--total-price'>
                <div className='shopping-cart--total-price_count'>
                    <span > Total price: {totalPrice} </span>
                </div>
                <div>
                    <button className='shopping-cart--total-price_submit-button' onClick={sendCustomerInfo}> Submit </button>
                </div>
            </section>
        </div>
    )
}