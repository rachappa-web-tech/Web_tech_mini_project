// @flow strict


import * as React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../COMMON/img/logo.png';


function Navar() {
    return (
    <nav className='navbar  navbar-expand-sm bg-dark navbar-dark'> 
    <div className='container-fluid' >
        <img src={logo} alt="brand-logo" width={"50px"}  className=" bg-secondry " />
        <Link to='/' className='navbar-brand'><h4>Reminder</h4></Link>



            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#cnavbar" >
                 <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-end'  id="cnavbar">
            <ul className='navbar-nav'>
            <li className='nav-item p-2 ' >
                <Link className='nav-link' to='/'><h4>Home</h4></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' to='/about'><h4>about</h4></Link>
            </li>
            < li className='nav-item p-2'>
                <Link className='nav-link' to='/signin'><h4>SignIn</h4></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' to='/signup'><h4>SignUp</h4></Link>
            </li>
            </ul>

            </div>
       
    </div>
    </nav>
 
    );
};

export default Navar;