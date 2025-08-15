import React, { useState } from 'react'
import { Menu, X, Code } from "lucide-react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed z-50 backdrop-blur-md bg-[#0a0a0a] flex justify-between items-center p-4 border-b-[1px] border-gray-100/30 top-0 right-0 left-0'>
      <div className='bg-sky-400 p-2 text-xl rounded-md'>
        <Code/>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden flex items-center'>
      <button onClick={() => setIsOpen(prev=> !prev)}>{
        isOpen?<X size={36}/>:<Menu size={36}/>}</button>
      </div>
        <nav className='hidden md:block'>
          <ul className='flex gap-6 '>
            <li><a className='hover:text-sky-400 transition-all ease-in-out' href="#home">Home</a></li>
            <li><a className='hover:text-sky-400 transition-all ease-in-out' href="#about">About</a></li>
            <li><a className='hover:text-sky-400 transition-all ease-in-out' href="#skills">Skills</a></li>
            <li><a className='hover:text-sky-400 transition-all ease-in-out' href="#projects">Projects</a></li>
          </ul>
        </nav>
        <div className={'hidden md:block'}>
               <a href='mailto:puskarniraula24@gmail.com' className='hidden md:flex items-center text-md px-4 py-2 bg-sky-400 rounded-md hover:bg-sky-500'>Mail</a>
          </div>

                    {
        isOpen && 
        <nav className='block md:hidden py-4 bg-[#0a0a0a] absolute left-0 top-18 w-full'>
          <ul className='flex flex-col gap-6 items-center '>
            <li><a className='hover:text-sky-400 transition-all ease-in-out' href="#home">Home</a></li>
            <li><a className='hover:text-sky-400 transition-all ease-in-out' href="#about">About</a></li>
            <li><a className='hover:text-sky-400 transition-all ease-in-out' href="#skills">Skills</a></li>
            <li><a className='hover:text-sky-400 transition-all ease-in-out' href="#projects">Projects</a></li>
          </ul>
        </nav>
      }
    </div>

  )
}
