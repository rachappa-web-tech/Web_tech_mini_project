import React, { useEffect,useContext ,useState } from 'react'
import { GlobalState } from '../../Global';
import '../../App.css';

export default function Home_log() {
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [name] = state.userAPI.name
  const [phone] = state.userAPI.phone
  const [token] = state.token
  const [email]= state.userAPI.email
  const [lastname] = state.userAPI.lastname

  return (
    <div>Home_log
      <p>
        {token}
      </p>
      <h1>{name}</h1>
      <h2>{lastname}</h2>
      <h2>{phone}</h2>
      <h2>{email}</h2>
      
    </div>
  )
}
