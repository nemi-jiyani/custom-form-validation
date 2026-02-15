import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { LOGIN_ROUTE, REGISTER_ROUTE } from './constant/formRouter';
import Register from './pages/Register';


function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;