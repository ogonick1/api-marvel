import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import axiosSetup from './plugin/axios-setup';
import s from './plugin/i18n/index';
import './style/style.scss';

axiosSetup();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
