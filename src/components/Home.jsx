import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className='mt-18 grid md:grid-cols-2 py-20 px-10 h-fit md:h-screen max-w-6xl mx-auto'>
        <motion.div
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        transition={{type:"spring", duration:1}}
        className='flex flex-col gap-6'>
            <div className='mt-20 text-lg'>
                I am
                <span className='block uppercase text-sky-400 text-5xl font-bold'>Pushkar Niraula</span>
            </div>
            <div className='sm:text-lg'>
               I am a Full Stack Web Developer <span className='text-gray-200/70 italic'>(atleast thats what I like to say)</span>. I build web apps from scratch, fix things I broke yesterday, and explain to people why 'just a small change' is never actually small. Frontend, backend, and a lot of pretending to understand error messages.
            </div>
            <div className='flex gap-6'>
               <a href='mailto:puskarniraula24@gmail.com' className='md:hidden flex items-center text-md px-4 py-2 bg-sky-400 rounded-md hover:bg-sky-500'>Mail</a>
            </div>
        </motion.div>
        <motion.div
                initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        transition={{type:"spring", duration:1}}
        className='flex items-center justify-center mt-12 md:mt-0'>
            <div className='relative w-80 h-80 md:w-90 md:h-90'>
                <div className='-inset-1 blur-3xl absolute bg-sky-400 z-0'></div>
                <img src="/profile.jpg" alt="My picture" className='z-10 relative rounded-lg object-cover object-top w-full h-full'/>
            </div>
        </motion.div>
    </div>
  )
}
