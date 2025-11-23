import React from 'react'
import projects from '../projectData/data';
import ProjectCard from './ui/projectCard.jsx';
export default function Projects() {
  return (
  <div className='relative max-w-full md:max-w-6xl min-h-fit sm:min-h-screen px-4 md:px-10 py-20 mx-auto'>
      <div className='z-10 mb-12 flex items-center gap-4'>
        <h2 className='text-3xl font-bold tracking-wider'>What I have created</h2>
        <span className='w-[1px] h-[1px] flex-1 bg-white/20'></span>
    </div>
<div>
  {
    projects.map((project, index) => (
    <ProjectCard key={index} featuredProject={project}/>
    ))
  }
</div>
    </div>
  )
}
