import React from 'react';
import '../styles/Navbar.css';

function Navbar() {

    return (
        <div className='navbar'>
            <i className="fas fa-mobile-alt"></i>Yumone
            <button name='products-btn' className='products-navbar'>Products</button>
            <i className="fas fa-caret-square-down"></i>
        </div>
    )
}

export default Navbar;