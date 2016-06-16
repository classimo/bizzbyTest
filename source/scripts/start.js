import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var divAppContainer = document.getElementById('app-container');
ReactDOM.render(<App/>, divAppContainer);
document.body.appendChild(divAppContainer);