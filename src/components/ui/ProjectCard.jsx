import React from 'react'

export default function ProjectCard({featuredProject}) {
  return (
    <div className='flex flex-col md:flex-row items-center md:justify-between md:items-center gap-4 tracking-wide text-sm mb-48'>
        <div className='flex flex-col gap-6 text-[#dfdfdf] md:w-2/3'>
            <div className='text-2xl font-bold tracking-wider text-neutral-200'> <span className='block font-semibold tracking-wide text-sm'>Feautred Project</span> {featuredProject.title}</div>
            <div className='border-[1px] border-neutral-100/20 p-4'>{featuredProject.description}</div>
            <div className='flex gap-4'>
               {featuredProject.tech.map((item, index) => (
                <p className='text-xs' key={index}>{item}</p>
               ))}
            </div>
            <div className='flex gap-4'>
                <a className='border border-gray-100/30 p-2 hover:border-gray-100' href={featuredProject.codeLink} target='__blank'>Github</a>
                <a className='border border-gray-100/30 py-2 px-4 hover:border-gray-100' href={featuredProject.demoLink} target='__blank'>Live</a>
            </div>
        </div>
        <div className='md:w-1/2'> 
            <img src={featuredProject.imageUrl} alt={featuredProject.title} className='w-full h-full object-cover' /> 
        </div>
    </div>
  )
}
