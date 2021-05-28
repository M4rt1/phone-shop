import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';

function App() {
  const showProducts = useSelector(state => state.showProducts);
  // console.log(showProducts);
  const showNavMenu = useSelector(state => state.showNavMenu);
  return (
    <div className="App">
      <Navbar />
      {showNavMenu ?
        <div className='nav-list'>
          <ul>
            <li><button>About Us</button></li>
            <li><button>Tech Section</button></li>
            <li><button>Contact Us</button></li>
          </ul>
        </div> :
        ''}
      {showProducts ?
        <div className='products'>PRODUCTS</div> :
        ''}
    </div>
  );
}

export default App;
