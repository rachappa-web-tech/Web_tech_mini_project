import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Navar from './Navar';
import Home from  '../../COMMON/Home'
import Add from './Add';
import Setting from './Setting';
import Calender from './Calender';
import Start from './Start';



export default function Main_page1() {
  return (
    <BrowserRouter>
    <Navar/>
    <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/Add' element={<Add/>}/>
      <Route path='/setting' element={<Setting/>}/>
      <Route path='/calender' element={<Calender/>}/>

       
      </Routes></BrowserRouter>
  )
}

