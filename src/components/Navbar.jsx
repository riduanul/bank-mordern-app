import React, {useState} from 'react'
import {close, logo, menu} from '../assets/index'
import {navLinks} from '../constants/index'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img  src={logo} alt="hoobank"
      className='w-[124px] h-[32px]'
      />
      <div className='sm:flex hidden gap-3 justify-end items-center flex-1'>
      <p className='font-poppins font-normal cursor-pointer text-[16px] text-white'>Home</p>
      <p className='font-poppins font-normal cursor-pointer text-[16px] text-white'>Features</p>
      <p className='font-poppins font-normal cursor-pointer text-[16px] text-white'>Products</p>
      <p className='font-poppins font-normal cursor-pointer text-[16px] text-white'>Client</p>
     </div>
     <div className='sm:hidden flex flex-1 justify-end items-center'>
      <img 
      src={toggle ? close : menu}
      alt="menu"
      className='w-[28px] h-[28px] object-contain cursor-pointer'
      onClick={()=> setToggle(prv => !prv)}
      />
      <div 
      className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <div className='flex flex-col  gap-3 justify-end items-center flex-1'>
      <p className='font-poppins font-normal cursor-pointer text-[16px] text-white'>Home</p>
      <p className='font-poppins font-normal cursor-pointer text-[16px] text-white'>Features</p>
      <p className='font-poppins font-normal cursor-pointer text-[16px] text-white'>Products</p>
      <p className='font-poppins font-normal cursor-pointer text-[16px] text-white'>Client</p>
     </div>
      </div>
     </div>
    </nav>
  )
}

export default Navbar