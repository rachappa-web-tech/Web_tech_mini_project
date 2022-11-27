// @flow strict
import { useState } from 'react';
import '../../App.css'
import * as React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../../COMMON/img/logo.png';
import axios from 'axios';
import { Alert } from 'bootstrap';

function SignIn() {
    const [masg,setMasg] = useState('')
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  
    const handleSubmit = async e => {
        e.preventDefault()
        try{
            await  axios.post('/user/login',{email,password})
            localStorage.setItem('firstLogin',true)
            window.location.href ="/"

        }catch(err)
        {
            alert(err.response.data.msg)
        }
    
    }
    
    return (
            <div className="bg-primary container text-white text-center">
                <img className='rounded-circle' src={logo} />
                <div>
                    <form onSubmit={handleSubmit}  className='row'>
                        <div className="col-md-3"/>

                        <div className='col-sm-12 col-md-6 mb-3 mt-3 '>
                       <input  type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' id='email' />
                        </div>
                     <div className="col-md-3"/>
                        <div className="col-md-3"/>


                          <div className='col-sm-12 col-md-6 mb-3 mt-3 '>
                            <input  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' id='password' />
                        </div>
                        <div className="col-md-3"/>
                    


                     <button   type='submit'  className='container col-sm-12 col-md-6 mb-3 mt-3 bg-success' >
                                Log In
                            </button>
                    </form>
                    <p >
                        <Link className=' text-white' to={'/forgot'} >
                        <div className='size_my'>Forgot Password</div></Link>
                    </p>
                    <p >
                        <Link className='text-white' to={'/signup'} >Create a account</Link>
                    </p>
                    <p></p>
                </div>
            </div>

    );
};

export default SignIn;