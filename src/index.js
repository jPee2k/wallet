import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './stylesheet/vars.css';

ReactDOM.render(
  <React.StrictMode>
    <App data={'develop'}/>
  </React.StrictMode>,
  document.getElementById('root')
);
