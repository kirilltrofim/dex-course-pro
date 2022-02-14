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

