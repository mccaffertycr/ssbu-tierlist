import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app-container')
);
