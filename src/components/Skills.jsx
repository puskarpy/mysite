import React from 'react'
import { GitCompareArrows } from "lucide-react";
import TechCard from './ui/TechCard';

export default function Skills() {

  const skills = [
    {
      id : 1,
      tech:"HTML",
      progress:90
    },
    {
      id : 2,
      tech:"CSS",
      progress:90
    },
    {
      id : 3,
      tech:"JavaScript",
      progress:85
    },
    {
      id : 4,
      tech:"Tailwind",
      progress:90
    },
    {
      id : 5,
      tech:"React",
      progress:90
    },
    {
      id : 6,
      tech:"Node JS",
      progress:70
    },
    {
      id : 7,
      tech:"NextJS",
      progress:80
    },
    {
      id : 8,
      tech:"Git",
      progress:80
    },
    {
      id : 9,
      tech:"Python",
      progress:50
    },
    {
      id : 10,
      tech:"C/C++",
      progress:50
    },
  ]

  return (
    <div className='relative max-w-6xl mx-auto sm:min-h-screen min-h-fit px-10 py-20 '>
          <div className="absolute inset-0 z-0">
        <div className="w-72 h-72 bg-gradient-to-r from-sky-400 via-purple-500 to-teal-500 blur-[120px] opacity-30 rounded-full absolute top-10 left-10" />
        <div className="w-72 h-72 bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-500 blur-[100px] opacity-20 rounded-full absolute bottom-20 right-10" />
      </div>  
        <div className='z-10 mb-6 flex items-start'>
          <span className='mr-2'><GitCompareArrows size={34}/></span>
        <h2 className='text-4xl font-bold uppercase'>my Skills</h2>
        </div>
            <div className='z-10'>
            <div className='text-lg mb-6'>
                I know you skipped the "About Me"  part so I will show you what I know here.
            </div>
            <div className='grid sm:grid-cols-2 gap-6'>
              {
                skills.map(skill => (
                  <TechCard tech={skill.tech} progress={skill.progress} />
                ))
              }
            </div>
            </div>
    </div>
  )
}
