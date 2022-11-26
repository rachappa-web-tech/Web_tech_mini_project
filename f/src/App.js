import React, { useState } from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'


import {DataProvider} from './Global'
import Header from './comp/head/Header';
import Page from './Page';
export default function App() {
  return (
    <DataProvider>
      <Router>
      <div className='App'>
        <Header/>
        <Page/>
    </div>

      </Router>
    </DataProvider>
   

    )
}
