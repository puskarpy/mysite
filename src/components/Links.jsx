import React from 'react'
import {Github, Instagram, Twitter, Linkedin, Cable} from 'lucide-react'

export default function Links() {
  return (
    <div className="max-w-6xl mx-auto px-10 py-20">
        <div className='text-3xl sm:text-4xl flex gap-2 font-bold uppercase'>
           <Cable size={32}/> <span>connect with me</span>
        </div>
        <div className='mb-6 mt-4'>
            Here's where I post things that may or may not make me look like I have my life together.
        </div>

  <div className='flex gap-4  mb-8'>
      <a
        href="https://github.com/puskarpy"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-neutral-800 rounded-full shadow-lg hover:bg-gray-700 hover:scale-110 transition-transform duration-300"
      >
        <Github/>
      </a>
      
      <a
        href="https://instagram.com/puskar.s07"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-neutral-800 rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transition-transform duration-300"
      >
        <Instagram/>
      </a>
      
      <a
        href="https://x.com/puskarpy"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-neutral-800 rounded-full shadow-lg hover:bg-sky-400 hover:scale-110 transition-transform duration-300"
      >
        <Twitter/>
      </a>
      <a
        href="https://www.linkedin.com/in/pushkar-niraula-100b7728a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-neutral-800 rounded-full shadow-lg hover:bg-teal-400 hover:scale-110 transition-transform duration-300"
      >
        <Linkedin/>
      </a>
  </div>
</div>

  )
}
