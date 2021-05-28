import React from 'react';
import '../styles/Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { showProducts, showNavMenu, showAbout, showTechSection, showContact } from '../app/actions';

function Navbar() {
    const showProductsState = useSelector(state => state.showProducts);
    const showAboutState = useSelector(state => state.showAbout);
    const showContactState = useSelector(state => state.showContact);
    const showTechSectionState = useSelector(state => state.showTechSection);
    const showNavMenuState = useSelector(state => state.showNavMenu);

    const dispatch = useDispatch();

    const clearShows = () => {
        if (showProductsState) {
            dispatch(showProducts());
        };
        if (showAboutState) {
            dispatch(showAbout());
        };
        if (showContactState) {
            dispatch(showContact());
        };
        if (showTechSectionState) {
            dispatch(showTechSection());
        };
        if (showNavMenuState) {
            dispatch(showNavMenu());
        };
    };

    return (
        <div className='navbar'>
            <button className='logo-btn' onClick={clearShows}><i className="fas fa-mobile-alt"></i>Yumone</button>
            <button name='products-btn' className='products-navbar' onClick={() => dispatch(showProducts())}>Products</button>
            <button className='nav-btn' onClick={() => dispatch(showNavMenu())}><i className="fas fa-caret-square-down"></i></button>
        </div>
    )
}

export default Navbar;