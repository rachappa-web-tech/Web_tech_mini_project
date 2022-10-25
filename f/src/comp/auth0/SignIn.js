// @flow strict
import { useState } from 'react';
import * as React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../../COMMON/img/logo.png';
function SignIn() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/auth/log', {
           method: 'POST',
           body: JSON.stringify({
           email,password
        }),
           headers: {
              'Content-type': 'application/json',
           },
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data);
        })
        .catch((err) =>{
            console.log(err.message)
        });
     };
    
    return (
            <div className="bg-primary container-fluid  text-white text-center">
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
                        <div className='mb-3 mt-3'>
                            <button >
                                Log In
                            </button>
                        </div>
                    </form>
                    <p >
                        <Link className='text-white' to={'/forgot'} >Forgot Password</Link>
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