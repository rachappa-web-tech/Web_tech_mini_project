// @flow strict
import * as React from 'react';
import { useState } from 'react';
import { Await, BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../../COMMON/img/logo.png';
import axios from 'axios';
import '../../App.css';


const  SignUp= ()=> {
    const [name,setName]=useState("")
    const [lastname,setLastname]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")

    const [password,setPassword]=useState("")

    const handleSubmit = async e => {
        e.preventDefault()
       try {
        await axios.post('/user/register',{name,lastname,phone,email,password})
        localStorage.setItem('firstLogin',true)
        window.location.href="/";
    } catch (err) {
        alert(err.response.data.msg)
       }
     };
    
    return (

            <div className="container p-5  text-white text-center bg-primary bg-gradient p-5">
                <img className='rounded-circle' src={logo} />
                <div>
                    <form  onSubmit={handleSubmit}  className='row text-center align-center' >
                    <div className="col-md-2"/>
                        <div className='col-sm-12 col-md-4 mb-3 mt-3 '>
                             <input  placeholder='enter NAME' value={name} onChange={(e)=>setName(e.target.value)} type="text" className='form-control' id='Name' />
                        </div>
                        <div className=' col-sm-12 col-md-4 mb-3 mt-3'>
                            <input  placeholder='enter Lastname' value={lastname} onChange={(e)=>setLastname(e.target.value)}  type="text" className='form-control' id='lastname' />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>
                        <div className='col-sm-12 col-md-8 mb-3 mt-3'>
                            <input placeholder='enter Phone +91' value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" className='form-control' id='phone' />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>
                        <div className='col-sm-12 col-md-8 mb-3 mt-3'>
                            <input placeholder='enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className='form-control' id='email' />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-8 mb-3 mt-3'>
                            <input  type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' id='password' />
                        </div>
                        <div className="col-md-2"/>

                            <button   type='submit'  className='container col-sm-12 col-md-7 mb-3 mt-3 bg-success' >
                                Log In
                            </button>

                    </form>
                    <p >
                        <Link className='text-white' to={'/signin'} >I already have an account</Link>
                    </p>
                    <p></p>
                </div>
            </div>


    );
};

export default SignUp;