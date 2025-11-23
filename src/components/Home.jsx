import React from 'react'

export default function Home() {
  return (
    <div className='mt-18 flex flex-col md:flex-row justify-between items-center md:py-20 px-4 md:px-10 gap-4 h-fit max-w-full md:max-w-6xl mx-auto'>
     <div className='tracking-wide'>
        <div>I'm <span className='font-bold text-6xl block tracking-wider'>Pushkar Niraula.</span></div> 
        <div className='text-[#cfcfcf] mt-4'>A Full Stack Web Developer. I build web applications from scratch, solve challenging problems, and continuously improve my skills in both frontend and backend development.
        <br />
        I'm a quick learner and I'm always looking for new challenges and opportunities to grow.
        </div> 
     </div>
     <div className='relative overflow-hidden md:w-1/2 rounded-lg'>
        <img src="/profile.jpg" alt="My picture" className=' object-cover object-top' />
     </div>
    </div>
  )
}
