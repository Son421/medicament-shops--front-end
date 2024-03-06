import React, {useState} from 'react';
import './customerForm.css';

export default function CustomerForm(props){
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e)=>{
        const value = e.target.value;
        setCustomerInfo({
         ...customerInfo,
         [e.target.name]: value
        });
    }

    function pushForm(){
        props.addForm(customerInfo);
    }

    return(
        <div className='customer-form__wrapper'>
            <form>
                <label> <p>Name:</p>
                    <input type="text" name='name' placeholder="input" className='customer-form__input' onChange={handleChange}></input>
                </label>
                <label> <p>Email:</p>
                    <input type="email" name='email' placeholder="input" className='customer-form__input' onChange={handleChange}></input>
                </label>
                <label> <p>Phone:</p>
                    <input type="text" name='phone' placeholder="input" className='customer-form__input' onChange={handleChange}></input>
                </label>
                <label> <p>Address:</p>
                    <input type="text" name='address' placeholder="input" className='customer-form__input' onChange={handleChange}></input>
                </label>
            </form>
            <button className='customer-form__button' onClick={pushForm}> Submit </button>
        </div>
    )
}