// @flow strict

import * as React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../img/logo.png';

function Fargot() {
    return (


             
            <div className="container-fluid p-5  text-white text-center bg-primary ">
                <h1>
                    Reset-password
                </h1>
                <img className='rounded-circle' src={logo} />
             
                <div>
                    <form className='row'>
                        <div className='col-md-3'/>
                        <div className='mb-3 mt-3 col-sm-12 col-md-6'>
                            <input for="email" type="email" className='form-control' id='email' />
                        </div>
                        
                        <div className='mb-3 mt-3'>
                            <button >
                                Log In
                            </button>

                        </div>
                    </form>
             
                    <p >
                        <Link className='text-white' to={'/signup'} >Create a account</Link>
                    </p>
                    <p></p>
                </div>
            </div>

    );
};



export default Fargot;