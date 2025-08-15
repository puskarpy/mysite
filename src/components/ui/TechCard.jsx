import React from 'react'
import { motion } from 'framer-motion';

export default function TechCard({tech, progress}) {
  return (
<motion.div
initial={{opacity:0, y:50}}
whileInView={{opacity:1, y:0}}
transition={{type:"spring"}}
viewport={{once:true}}

className="w-full bg-neutral-800/90 backdrop-blur-sm hover:bg-neutral-800 border border-transparent hover:border-sky-400/60 transition-all p-5 rounded-2xl shadow-lg text-lg font-medium text-neutral-200 duration-300">
    <div className='flex justify-between'>
        {tech || "Default"}
        <span className='text-gray-100/70 text-sm'>{progress || 80}%</span>
    </div>
    <div className='h-2 bg-gray-400/50 rounded-md mt-8'>
        <div className='bg-sky-300 h-2 rounded-md' style={{width:`${progress ||80}%`}}></div>
    </div>
</motion.div>


  )
}
