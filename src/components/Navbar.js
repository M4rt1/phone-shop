import React from 'react';
import '../styles/Navbar.css';
import { useDispatch } from 'react-redux';
import { showProducts } from '../app/actions';

function Navbar() {
    const dispatch = useDispatch();

    return (
        <div className='navbar'>
            <i className="fas fa-mobile-alt"></i>Yumone
            <button name='products-btn' className='products-navbar' onClick={() => dispatch(showProducts())}>Products</button>
            <i className="fas fa-caret-square-down"></i>
        </div>
    )
}

export default Navbar;