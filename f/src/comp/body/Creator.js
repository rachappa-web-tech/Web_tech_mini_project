import React from 'react'
import '../../App.css';

export default function Creator(props) {
  return (
 <div className='container-fluid border-2 rounded-pill border border-dark text-white  bg-primary' >
  <h1>
    {props.name}
  </h1>
  <h2>{props.srn}</h2>
  <h2>{props.roll_no}</h2>

 </div>



  )
}
