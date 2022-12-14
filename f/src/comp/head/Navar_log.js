// @flow strict


import * as React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../COMMON/img/logo.png';
import axios from 'axios'


function Navar() {
    const logoutUser = async () =>{
        await axios.get('/user/logout')  
        localStorage.removeItem('firstLogin')
        window.location.href = "/";
    }
    return (
    <nav className='navbar  navbar-primary navbar-expand-sm bg-dark navbar-dark'> 
    <div className='container-fluid' >
        <img src={logo} alt="brand-logo" width={"50px"}  className=" bg-secondry " />
        <Link className='navbar-brand' to='/'><h4>Reminder</h4></Link>



        <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target='#cnavbar1'>
            <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-end'  id='cnavbar1'>
            <ul className='navbar-nav'>
            < li className='nav-item p-2 ' >
                <Link className='nav-link' to='/'><h4 className='size_my'>Home</h4></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' to='/calender'><h4 className='size_my'>Calender</h4></Link>
            </li>
            < li className='nav-item p-2'>
                <Link className='nav-link' to='/add'><h4 className='size_my'>Add</h4></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' to='/setting'><h4 className='size_my'>Setting</h4></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' to='/' onClick={logoutUser}><h4 className='size_my'>Logout</h4></Link>
            </li>
        </ul>
            </div>
       
    </div>
    </nav>
 
    );
};

export default Navar;