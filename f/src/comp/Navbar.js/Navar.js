// @flow strict


import * as React from 'react';
import SignIn from '../autho/SignIn';
import SignUp from '../autho/SignUp';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';


function Navar() {
    return (<nav className='navbar  navbar-primary navbar-expand-sm bg-dark navbar-dark'> 
    <div className='container-fluid' >
        <img src={logo} alt="brand-logo" width={"50px"}  className=" bg-secondry " />
        <a className='navbar-brand' href='/'><h4>logo</h4></a>



        <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target='#cnavbar'>
            <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-end'  id='cnavbar'>
            <ul className='navbar-nav'>
            < li className='nav-item p-2 ' >
                <a className='nav-link' href='/'><h4>Home</h4></a>
            </li>
            <li className='nav-item p-2'>
                <a className='nav-link' href='/about'><h4>about</h4></a>
            </li>
            < li className='nav-item p-2'>
                <a className='nav-link' href='/signin'><h4>SignIn</h4></a>
            </li>
            <li className='nav-item p-2'>
                <a className='nav-link' href='/signup'><h4>SignUp</h4></a>
            </li>
        </ul>

            </div>
       
    </div>
    </nav>
 
    );
};

export default Navar;