// @flow strict

import * as React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../img/logo.png';
function SignIn() {
    return (
            <div className="bg-primary container-fluid  text-white text-center">
                <img className='rounded-circle' src={logo} />
                <div>
                    <form>
                        <div className='mb-3 mt-3'>
                            <input for="email" type="email" className='form-control' id='email' />
                        </div>
                        <div className='mb-3 mt-3'>
                            <input for="password" type="password" className='form-control' id='password' />
                        </div>
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