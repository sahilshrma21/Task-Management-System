import React from 'react'
import { assets } from '../assets/admin_assets/assets.js'

const Navabr = ({setToken}) => {
  return (
    <div className='flex items-center  py-2 px-[4%] justify-between '>
      <img src={assets.logo} alt='' className='w-[max(10%,80px)] '/>

     {/* onClick set token to empty string to logout */}
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 s,:py-2 rounded-full text-xs sm:text-sm' onClick={()=>setToken('')} >Logout</button>
    </div>
  )
}

export default Navabr
