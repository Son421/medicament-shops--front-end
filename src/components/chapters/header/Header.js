import React from 'react';
import { NavLink } from "react-router-dom";
import './header.css'

export default function Header(){

    return(
        <div>
            <header>
                <nav className='header__wrapper'>
                    <NavLink to={'/'}><a href='#'> Shop </a> </NavLink>
                    <div className='header__line'> &#124; </div>
                    <NavLink to={'/cart'}><a href='#'> Shopping Cart </a></NavLink>
                </nav>
            </header>
        </div>
    )
}