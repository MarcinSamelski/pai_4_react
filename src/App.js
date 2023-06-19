import logo from './logo.svg';

import React from 'react';

import './App.css';

function App(props) {
  const name = props.name || 'Karolina';
  
  return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Hello, {props.name}!</h1>
     </header>
    </div>
  );
}


export default App;
