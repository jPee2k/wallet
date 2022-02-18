import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/ProtectedRoute';
import AuthRoute from './components/AuthRoute';
import Spinner from './components/Spinner';
import TransactionTab from './pages/Home/TransactionTab';
import DiagramTab from './pages/Home/DiagramTab';
import HomePage from './pages/Home';
import AuthPage from './pages/Auth';
import Page404 from './pages/404';
import CurrencyPage from './pages/Currency';

const App = () => (
  <React.Fragment>
    <div style={{ padding: 0, margin: 0 }}>
      <ToastContainer />
      <Spinner/>
    </div>

    <Routes>
      <Route path="/register" element={<AuthRoute><AuthPage action="register"/></AuthRoute>}/>
      <Route path="/login" element={<AuthRoute><AuthPage action="login"/></AuthRoute>}/>
      <Route path="/currency" element={<ProtectedRoute><CurrencyPage/></ProtectedRoute>}/>
      <Route path="/" element={<ProtectedRoute><HomePage/></ProtectedRoute>}>
        <Route index element={<TransactionTab/>}/>
        <Route path="/transactions" element={<TransactionTab/>}/>
        <Route path="/statistics" element={<DiagramTab/>}/>
      </Route>
      <Route path="*" element={<Page404/>}/>
    </Routes>
  </React.Fragment>
);

export default App;
