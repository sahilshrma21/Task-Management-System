import React, { useState } from 'react'
import { backendUrl } from '../App';
import {toast} from 'react-toastify';
import axios from 'axios';

const Login = ({setToken}) => {
  const [email ,setEmail] = useState('');
  const [password, setPassword] = useState('');

  // saving email and passwords to local storage
  const onSubmitHandler = async (e) =>{
    try{ //use for stop unwanted refresshing 
          e.preventDefault();
        
        const response =await axios.post( backendUrl + '/api/user/admin',{email,password})
          console.log(email,password)

         if(response.data.success){
          setToken(response.data.token)
         }else{
            toast.error(response.data.message)
         }
    }
catch (error){
  console.log(error);
  toast.error(error.message)


}
  }
  return (
    <div className='min-h-screen flex items-center justify-center w-full drop-shadow-2xl'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-2 text-center '> Admin Panel </h1>
        <div className='w-20 ml-26  h-[0.5px] bg-black mb-4    shadow-2xl drop-shadow-2xl '></div>


        <form onSubmit={onSubmitHandler}>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2 '>Email Address </p>
            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" name="email" required placeholder = "your@gmail.com" className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none hover:border-black"/>
          </div>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2 '>Password  </p>
            <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" name="password" required placeholder = "Enter your password"  className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none hover:border-black "/>
          </div>
          <button type="submit" className='mt-2 w-full py-2 px-4 rounded-md text-2xl text-white bg-black ' >Login</button>
        </form>

      
      
    </div>
    </div>
  )
}

export default Login
