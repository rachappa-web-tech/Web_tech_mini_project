// @flow strict
import * as React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../img/logo.png'


function SignUp() {
    return (
        // @flow strict

            <div className="container-fluid p-5  text-white text-center bg-secondary bg-gradient p-5">
                <img className='rounded-circle' src={logo} />
                <div>
                    <form className='row text-center align-center' >
                    <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-4 mb-3 mt-3 '>
                             <input for="name" placeholder='enter NAME' type="text" className='form-control' id='Name' />
                        </div>
                        <div className=' col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="lastname" placeholder='enter Lastname' type="text" className='form-control' id='lastname' />
                        </div>
                        <div className="col-md-2"/>


                        <div className="col-md-2"/>

                        <div className='col-sm-12  col-md-8 bg-dark mb-3 mt-3'>
                            <label className='p-1 text-center form-check-label' >Gender : </label>

                            <div className='mb-3 mt-3 form-check form-check-inline rounded'>

                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" />
                                <label className="form-check-label" for="inlineRadio1">male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" />
                                <label className="form-check-label" for="inlineRadio2">female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="other" />
                                <label className="form-check-label" for="inlineRadio3">other</label>

                            </div>
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-4  mb-3 mt-3'>
                            <input for="age" placeholder='enter your age' type="number" className='form-control' id='age' />
                        </div>
                        <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="Phone Number" placeholder='enter Phone Number' type="text" className='form-control' id='phone' />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-8 mb-3 mt-3'>
                            <input for="email" placeholder='enter Email' type="email" className='form-control' id='email' />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="password" type="password" placeholder='password' className='form-control' id='password' />
                        </div>
                        <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="password" type="password" placeholder='re-enter password' className='form-control' id='password' />
                        </div>
                        <div className="col-md-2"/>

                            <button  className='container col-sm-12 col-md-6 mb-3 mt-3 bg-success' >
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