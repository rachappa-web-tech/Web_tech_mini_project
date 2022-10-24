import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navar from './comp/Navbar.js/Navar';
import Home from './comp/Home';
import SignIn from './comp/autho/SignIn';
import SignUp from './comp/autho/SignUp';
import Fargot from './comp/autho/Fargot';
import About from './comp/autho/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/signin' element={<SignIn/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/forgot' element={<Fargot/>}/>
  
  </Routes></BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
