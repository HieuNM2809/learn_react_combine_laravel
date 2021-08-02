import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StylesProvider } from "@material-ui/core/styles";


ReactDOM.render(
  <StylesProvider injectFirst>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </StylesProvider>,
  document.getElementById('root')
);

