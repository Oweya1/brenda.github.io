import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


// import { PopupButton} from '@typeform/embed-react'




function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
   
    const ClosePopup = () => {
      setIsOpen(false);
    };
   
  return (
    <div className='flex w-full  sticky top-0  sm:sticky-top-4 justify-between  items-center h-28 z-10 bg-black mx-auto px-4 font-bold text-sky-900'>
       <span><i style={{ color: '#da9059', fontSize:'1.8em' }}>Brenda</i><span style={{ color: '#d3d1d3', fontSize: '1.8em' }}>Engineering</span></span>
      <ul className='hidden md:flex text-white'>
        

        <a className='p-4' href="/">Home</a> 
        <a className='p-4' href="/pages">About</a> 
        <a className='p-4' href="/coursepage">Courses</a> 
        <a className='p-4' href="/pages2">Hackathons</a> 
        <a className='p-4' href="/contact">Contact</a> 
      
       
      </ul>


     
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed space-y-4  gap-4 left-0 top-0 w-[60%] h-[100%] border-r border-r-gray-900 bg-slate-100 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        

          <li><a className='p-4   border-[#27AAE1]' href="/">Home</a> </li>
          <li><a className='p-4  border-[#27AAE1]' href="/pages">About</a> </li>
          <li><a className='p-4  border-[#27AAE1]' href="/coursepage">Courses</a> </li>
          <li><a className='p-4    border-[#27AAE1]' href="/pages2">Hackathons</a></li>
          <li><a className='p-4    border-[#27AAE1]' href="/contact">Contact</a></li>


        
      </ul>
    </div>
  )
}

export default Navbar