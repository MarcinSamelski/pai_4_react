import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const name = 'Karolina';

ReactDOM.render(
  <React.StrictMode>
    <App name={name} />
  </React.StrictMode>,
  document.getElementById('root')
);
