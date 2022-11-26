import React, { useEffect, useState } from 'react'
import Card1 from './Card1';

export default function Calender() {
  const [data,setdata] = useState([]);
  const fetchData =()=>{
    return fetch("http://localhost:3001/name")
    .then((Response)=>Response.json())
    .then((data)=>setdata(data));
  }


  useEffect(() =>
  {
    fetchData();
  },[])
return (<>
<ul>
{
  data.map((user,index) =>(
    <li key ={index} ><Card1 name={user} /></li>
  ))
}

</ul>

</> )}
