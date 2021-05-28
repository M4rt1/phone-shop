import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';

function App() {
  const showProducts = useSelector(state => state.showProducts);
  console.log(showProducts);
  return (
    <div className="App">
      <Navbar />
      {showProducts ?
        <div>PRODUCTS</div> :
        ''}
    </div>
  );
}

export default App;
