import React, { useState } from 'react'
import Main_page from './comp/auth0/Main_page';
import Main_page1 from './comp/auth1/Main_page';

export default function App() {
  var log =1
  return (
    <>
    {!log && <Main_page/>
    }
    {
      log && <Main_page1/>
    }
    
    
    </>
  )
}
