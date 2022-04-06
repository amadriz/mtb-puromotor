import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout } from "./js/Layout";
import reportWebVitals from './reportWebVitals';
// Importar SASS se debe installar npm i sass
import './scss/theme.scss'; 


ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
