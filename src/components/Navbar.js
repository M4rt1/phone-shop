import React, { useState } from 'react';
import '../styles/Navbar.css';
import { useDispatch } from 'react-redux';
import { showProducts, showNavMenu } from '../app/actions';

function Navbar() {

    const dispatch = useDispatch();

    return (
        <div className='navbar'>
            <i className="fas fa-mobile-alt"></i>Yumone
            <button name='products-btn' className='products-navbar' onClick={() => dispatch(showProducts())}>Products</button>
            <button className='nav-btn' onClick={() => dispatch(showNavMenu())}><i className="fas fa-caret-square-down"></i></button>
        </div>
    )
}

export default Navbar;