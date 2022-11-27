// @flow strict
import * as React from 'react';
import { useState ,useContext} from 'react';
import { Await, BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../../COMMON/img/logo.png';
import axios from 'axios';
import { GlobalState } from '../../Global';
import '../../App.css';


const  Setting= ()=> {
  const state = useContext(GlobalState)
  const [name,setName] = state.userAPI.name
  const [token] = state.token
  const [email,setEmail]= state.userAPI.email
  const [phone,setPhone] = state.userAPI.phone
  const [lastname,setLastname] = state.userAPI.lastname

    const handleSubmit = async e => {
        e.preventDefault()
       try {
        await axios.patch('/user/change',{  name,lastname,phone,email},{   headers: {Authorization: token}})
        window.location.href="/";
    } catch (err) {
        alert(err.response.data.msg)
       }
     };
    
    return (

            <div className="container-fluid  text-white text-center bg-primary bg-gradient p-5">
                <img className='rounded-circle' src={logo} />
                <div>
                    <form  onSubmit={handleSubmit}  className='col text-center align-center' >
                    
                   
                    <div className='row m-3 '>
                                     <label className=' form-label col-sm-12 col-md-4 col-lg-5' for="Name "> Enter FirstName :  </label>
                                      <input  placeholder='enter NAME' value={name} onChange={(e)=>setName(e.target.value)} type="text" className='form-control col-sm-12 col-md ' id='Name' />
                              </div>
                        <div className=' row m-3'>
                                      <label className=' form-label col-sm-12 col-md-4 col-lg-5' for="Lastname "> Enter LastName :  </label> 
                                      <input  placeholder='enter Lastname' value={lastname} onChange={(e)=>setLastname(e.target.value)}  type="text" className='form-control col-sm-12 col-md' id='lastname' />
                        </div>
                        <div className='row m-3'>
                        <label className=' form-label col-sm-12 col-md-4 col-lg-5' for="Phone "> Enter Phone :  </label> 
                            <input placeholder='enter Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" className='form-control col-sm-12 col-md' id='phone' />
                        </div>
                        <div className='row m-3'>
                        <label className=' form-label col-sm-12 col-md-4 col-lg-5' for="Email "> Enter Email :  </label> 
                            <input placeholder='enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className='form-control col-sm-12 col-md' id='email' />
                        </div>
                        <div className='row m-3'>
                            <button   type='submit'  className='container-fluid  bg-success' >
                                data change
                            </button>       
                        </div>
                       

                            

                    </form>
              
               
                </div>
            </div>


    );
};

export default Setting;