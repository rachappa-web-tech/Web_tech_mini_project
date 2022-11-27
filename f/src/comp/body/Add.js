// @flow strict
import * as React from 'react';
import { useState,useContext } from 'react';
import '../../App.css';
import axios from 'axios';
import { GlobalState } from '../../Global';

import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../../COMMON/img/logo.png';

export default function Add() {
    const state = useContext(GlobalState)
    const [token] = state.token
    const [header,setHeader]=useState("")
    const [about,setAbout]=useState("")
    const [date,setDatae] = useState("")
    const [time,setTime] = useState("")

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            alert(time);
            alert(date);
            await axios.post('/rem/add',{header,about,date,time},{   headers: {Authorization: token}})
            window.location.href="/";
        } catch (err) {
            alert(err.response.data.msg)
           }
     };
    
    return (

            <div className="container-fluid p-5  text-white text-center bg-primary bg-gradient p-5">
                <img className='rounded-circle' src={logo} />
                <div>
                    <form  onSubmit={handleSubmit}  className='row text-center align-center' >
                    
                       
                        <div className="col-md-2"/>
                        <div className='col-sm-12 col-md-8 mb-3 mt-3'>
                            <input placeholder='Enter Header' value={header} onChange={(e)=>setHeader(e.target.value)} type="text" className='form-control' id='header' />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-8 mb-3 mt-3'>
                            <input  type="text" placeholder='About Reminder' value={about} onChange={(e)=>setAbout(e.target.value)} className='form-control' id='about' />
                        </div>
                        <div className="col-md-2"/>
                         
                        <div className="col-md-2"/>
                        <div className='col-sm-12 col-md-8 mb-3 mt-3'>
                        <input  type="date" placeholder='ADD date' value={date} onChange={(e)=>setDatae(e.target.value)} className='form-control' id='date' />

                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>
                        <div className='col-sm-12 col-md-8 mb-3 mt-3'>
                        <input  type="time" placeholder='ADD time' value={time} onChange={(e)=>setTime(e.target.value)} className='form-control' id='time' />
                        </div>
                        <div className="col-md-2"/>


                            <button   type='submit'  className='container col-sm-12 col-md-7 mb-3 mt-3 bg-success' >
                           <div className='size_button'>Add Reminder</div>
                            </button>

                    </form>
                    <p >
                        <Link className=' text-white' to={'/'} > <div className='size_button'>Don't mind</div></Link>
                    </p>
                    <p></p>
                </div>
            </div>


    );
};

