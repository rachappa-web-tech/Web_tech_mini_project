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
     
      <table className=" container bg-primary  p-2 m-4  text-center ">
        <tr className=" col ">
          <th className=" col-sm-2 text-center col-md-3 col-lg-4 border-dark border border-3 rounded">
            Name
          </th>
          <td className=' col'>{name}</td>
        </tr>
        <tr className="p-2 ">
          <th className=" text-center border-dark border border-3 rounded">
            LastName
          </th>
          <td className=''>{lastname}</td>
        </tr>
        <tr className="p-2 ">
          <th className=" p-2 text-center border-dark border border-3 rounded">
            Phone 
          </th>
          <td className=''>{phone}</td>
        </tr>
        <tr className="p-2 ">
          <th className=" border-dark text-center border border-3 rounded">
            Email
          </th>
          <td className=''>{email}</td>
        </tr>
        <tr className="p-2">
          <th  className=" border-dark border text-center border-3 rounded">
            Token
          </th>
          <td rowspan={5} className='p-2'><h5>{token}</h5></td>
        </tr>
        
      </table>

  )
}
