import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Navar from './Navar';
import Home from  '../../COMMON/Home'
import SignIn from './SignIn';
import SignUp from './SignUp';
import Fargot from './Fargot';
import About from './About';


export default function Main_page() {
  return (
    <BrowserRouter>
    <Navar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/forgot' element={<Fargot/>}/>
      
      </Routes></BrowserRouter>
  )
}

