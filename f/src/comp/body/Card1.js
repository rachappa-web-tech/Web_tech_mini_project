import React from 'react'
import Card from 'react-bootstrap/Card';
import '../../App.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Card1(props) {
  const delete_=async (k) =>{
    alert(props.value._id);

    await axios.post("/rem/del",{"id":props.value._id}).then((res) =>console.log("deleted"))
    window.location.href ="/calender"


    
  }

  return (
    <div className='p-1'>
      <div className='border  border-dark rounded border-2 rounded-2 container-fluid col-sm-10 col-md-8 col-lg-6 bg-primary'>
      <div className='container-fluid bg-secondary'>
     <h1 className='text-white'> {
      props.value.header
     }</h1>
      </div>
      <div>
    <h5>  {
      props.value.about
     }</h5>
      </div>
      <div className='text-warning'>
        <h3>Date :{" "}{props.value.date}</h3>
        <h3>Time :{" "}{props.value.time}</h3>

      </div>
      <div className='bg-danger border border-danger  text-white rounded-pill rounded-3' onClick={()=>{delete_(props.value._id)}}>
Delete
      </div>
    </div>

    </div>
      
      );
    }
    
