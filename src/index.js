import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import App from './app/App.jsx';

import './stylesheet/vars.css';
import './stylesheet/fonts.css';
import './stylesheet/basic/module.scss';
// eslint-disable-next-line import/no-relative-packages
import '../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter><App/></BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
