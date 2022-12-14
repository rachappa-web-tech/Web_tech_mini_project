import React, { useContext } from 'react'
import {Route,Routes} from 'react-router-dom'

import About from './comp/body/About'
import SignIn from './comp/body/SignIn';
import SignUp from './comp/body/SignUp';
import Fargot from './comp/body/Fargot';
import Add from './comp/body/Add';
import Calender from './comp/body/Calender';
import Setting from './comp/body/Setting';
import Home from './comp/body/Home';

import Wrong_page from './comp/body/Wrong_page';
import { GlobalState } from './Global';
import Home_log from './comp/body/Home_log';



export default function Page() {
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [name] = state.userAPI.name
  const [email]= state.userAPI.email
  const [lastname] = state.userAPI.lastname
  return (
 <Routes>
  
   <Route path='/about' exact element={<About/>}/>

   <Route path='/forgot' exact element={<Fargot/>}/>
   <Route path='/' exact element={isLogged?<Home_log name={name}/>:<Home/>}/>
   <Route path='/SignIn' exact element={isLogged?<Wrong_page/>:<SignIn/>}/>
   <Route path='/SignUp' exact element={isLogged?<Wrong_page/>:<SignUp/>}/>
   <Route path='/add' exact element={isLogged?<Add/>:<Wrong_page/>}/>
   <Route path='/calender' exact element={isLogged?<Calender/>:<Wrong_page/>}/>
   <Route path='/setting' exact element={isLogged?<Setting/>:<Wrong_page/>}/>

   <Route path='*' exact element={<Wrong_page/>}/>
 </Routes>
  )
}
