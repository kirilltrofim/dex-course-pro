import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Avenir';
  }
`


ReactDOM.render(
    <>
        <GlobalStyle/>
        <App />
    </>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
