import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Products from './components/Products';
import About from './components/About';
import { useSelector, useDispatch } from 'react-redux';
import { showAbout, showTechSection, showContact } from './app/actions';

function App() {
  const showProductsState = useSelector(state => state.showProducts);
  const showAboutState = useSelector(state => state.showAbout);
  const showContactState = useSelector(state => state.showContact);
  const showTechSectionState = useSelector(state => state.showTechSection);
  const showNavMenuState = useSelector(state => state.showNavMenu);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      {
        showNavMenuState ?
          <div className='nav-list'>
            <ul>
              <li><button onClick={() => dispatch(showAbout())}>About Us</button><hr></hr></li>
              <li><button onClick={() => dispatch(showTechSection())}>Tech Section</button><hr></hr></li>
              <li><button onClick={() => dispatch(showContact())}>Contact Us</button></li>
            </ul>
          </div> :
          ''
      }
      {
        !showProductsState & !showAboutState & !showTechSectionState & !showContactState ?
          <div className='products'>
            <Default />
          </div> :
          ''
      }
      {
        showProductsState ?
          < div className='products'>
            <Products />
          </div> :
          ''
      }
      {
        showAboutState ?
          <div className='products'>
            <About />
          </div> :
          ''
      }
      {
        showTechSectionState ?
          <div className='products'>
            Tech
          </div> :
          ''
      }
      {
        showContactState ?
          <div className='products'>
            Contact
          </div> :
          ''
      }
    </div >
  );
}

export default App;
