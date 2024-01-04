import React from 'react'
import valo6 from "./assests/valo6.svg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex  bg-[#5E3FB0] justify-around py-3'>
      <div className='flex items-center'>
        <Link to="/">
      <img  src={valo6} alt="" style={{ marginTop: "0.5rem" }} />
      </Link>
      </div>
      <div className=' space-x-12  items-bottom hidden md:flex items-center'>
       <div className='uppercase text-[#A06CD5] font-semibold text-md cursor-pointer'>
        home
       </div>
       <div className='uppercase text-[#A06CD5] font-semibold text-md cursor-pointer'>
       aGents
       </div>
       <div className='uppercase text-[#A06CD5] font-semibold text-md cursor-pointer'>
       Features
       </div>
      </div>
    </div>
  )
}

export default Header
