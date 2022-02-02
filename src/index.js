import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import './stylesheet/vars.css';
import './stylesheet/fonts.css';
import './stylesheet/basic/module.scss';
// eslint-disable-next-line import/no-relative-packages
import '../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
