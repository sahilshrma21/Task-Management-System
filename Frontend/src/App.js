import React from "react";
// import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import LoginPage from "./pages/Login";
// import RegisterPage from "./pages/Register";
import "./App.css";

import { useEffect, useState } from 'react'
import Navabr from './components/Navbar'
import Sidebar from './components/Sidebar'
import {BrowserRouter as Routes ,Route ,Router} from 'react-router-dom';
import Add from './components/AddTask';
import List from './components/TaskList';
import Login from './pages/Login';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const  App = () =>  {
  const [token , setToken]= useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(()=> {
    localStorage.setItem('token',token);
  },[token])
 
  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token === "" ? <Login setToken={setToken}/> : <>
      <Navabr setToken={setToken}/>
         <hr/>
         <div className='flex w-full'>
            <Sidebar/>
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Router>
            <Routes>
              <Route path="/add" element={<Add token={token}/>} />
              <Route path="/list" element={<List token={token}/>} />

            </Routes>
          </Router>
            </div>
         </div>
    </>}
      
    </div>
  
  )
}

export default App

