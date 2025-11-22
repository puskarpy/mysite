import React from 'react'
import { FolderGit2, Github, MoveUpRight } from "lucide-react";
import projects from '../projectData/data';
import ProjectCard from './ui/projectCard.jsx';
export default function Projects() {
  return (
    <div className='relative max-w-6xl min-h-fit sm:min-h-screen px-10 py-20 mx-auto'>
      <div className='z-10 mb-6 flex items-start'>
        <h2 className='text-3xl font-bold tracking-wider mb-12'>What I have created</h2>
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
