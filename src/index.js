import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import reduxStore from './reduxStore/store.js';
import App from './App.jsx';

import './stylesheet/vars.css';
import './stylesheet/fonts.css';
import './stylesheet/basic/module.scss';
// eslint-disable-next-line import/no-relative-packages
import '../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <QueryClientProvider client={queryClient}>
        <App/>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
