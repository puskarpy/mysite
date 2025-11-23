import React, { useState } from 'react'
import { Menu, X, Code } from "lucide-react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex justify-between items-center px-4 py-6 top-0 right-0 left-0 max-w-6xl mx-auto'>
      <div className='bg-white p-2 text-xl rounded-md'>
        <Code color='black'/>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden flex items-center'>
      <button onClick={() => setIsOpen(prev=> !prev)}>{
        isOpen?<X size={36}/>:<Menu size={36}/>}</button>
      </div>
        <nav className='hidden md:block'>
          <ul className='flex gap-6 uppercase font-semibold text-xs tracking-wide text-neutral-300 '>
            <li><a className='hover:text-neutral-100 transition-all ease-in-out' href="#home">Home</a></li>
            <li><a className='hover:text-neutral-100 transition-all ease-in-out' href="#skills">Skills</a></li>
            <li><a className='hover:text-neutral-100 transition-all ease-in-out' href="#projects">Projects</a></li>
            <li><a className='hover:text-neutral-100 transition-all ease-in-out' href="#contact">Connect</a></li>
          </ul>
        </nav>

{/* Mobile Menu */}
        {
        isOpen && 
        <nav className='block md:hidden py-4 bg-[#0a0a0a] absolute left-0 top-18 w-full'>
          <ul className='flex flex-col gap-6 items-center '>
            <li><a className='hover:text-neutral-100 transition-all ease-in-out' href="#home">Home</a></li>
            <li><a className='hover:text-neutral-100 transition-all ease-in-out' href="#skills">Skills</a></li>
            <li><a className='hover:text-neutral-100 transition-all ease-in-out' href="#projects">Projects</a></li>
            <li><a className='hover:text-neutral-100 transition-all ease-in-out' href="#contact">Connect</a></li>
          </ul>
        </nav>
      }
    </div>

  )
}
