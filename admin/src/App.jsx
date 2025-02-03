import { useEffect, useState } from 'react'
import Navabr from './components/Navabr'
import Sidebar from './components/Sidebar'
import { Routes ,Route } from 'react-router-dom';
import Login from './components/Login';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/DashBoard';
import AssignTask from './pages/AssignTask';
// import VITE_BACKEND_URL  from'.env';


export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const  App = () =>  {
  const [token , setToken]= useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  //store token in local storage
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
            <Routes>
              <Route path="/dashboard" element={<Dashboard token={token}/>} />
              <Route path="/assigntask" element={<AssignTask token={token}/>} />
            </Routes>
            </div>
         </div>
    </> }
     
    </div>
  
  )
}

export default App
