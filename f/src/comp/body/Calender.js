import React from 'react'
import {useState,useContext, useEffect} from 'react'
import axios from 'axios'
import { GlobalState } from '../../Global';
import Card1 from './Card1';

export default function Calender() {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [data,setdata] = state.userAPI.data
useEffect(() =>{
  const getrem = async () =>{
    try {
            const res = await axios.get('/rem/all', {headers: {Authorization: token}})
            setdata(res.data.rem);
    } catch (err) {
        alert(err.response.data.msg)
    }
}
  getrem();
  console.log(data)
},[token])
const list = data.map((reminder) =>
<Card1 key={reminder._id} value = {reminder} />)
  return (
    <div className='container-fluid row p-1'>{list}</div>
    )
}
