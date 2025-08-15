import React from 'react'
import { FolderGit2, Github, MoveUpRight } from "lucide-react";
import projects from '../projectData/data';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className='relative max-w-6xl min-h-fit sm:min-h-screen px-10 py-20 mx-auto'>
      <div className="absolute inset-0 z-0">
        <div className="w-72 h-72 bg-gradient-to-r from-sky-400 via-purple-500 to-teal-500 blur-[120px] opacity-30 rounded-full absolute top-10 left-10" />
        <div className="w-72 h-72 bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-500 blur-[100px] opacity-20 rounded-full absolute bottom-20 right-10" />
      </div>  

      <div className='flex items-start text-2xl'>
        <span className='mr-2'><FolderGit2 size={34} /></span>
        <h2 className='text-4xl mb-4 font-bold uppercase'>Projects</h2>
      </div>

      <div className='mt-2'>
        <div className='sm:text-lg mb-8'>
          Oh, you made it this far? Welcome to my 'look', I built something section. Judge wisely.
        </div>

        <div className='flex flex-col gap-6'>
          {projects.map((item) => (
            <motion.div
              key={item.id}
            initial= {{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{type:"spring"}}
              className='border-b-[1px] flex flex-col flex-wrap border-b-gray-100/50 p-4'
            >
              <div className='text-2xl font-bold mb-2'>{item.title}</div>
              <div>{item.description}</div>

              <div className='flex flex-wrap gap-2 mt-4'>
                {item.tech.map((tech, index) => (
                  <span
                    key={index}
                    className='text-xs bg-sky-500/90 px-2 py-[1px] rounded-lg'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='z-10 flex flex-right gap-4 items-center mt-6'>
                <a className='cursor-pointer' target='_blank' href={item.codeLink}>
                  <Github />
                </a>
                {item.demoLink.length > 0 && (
                  <a
                    className='cursor-pointer flex items-center gap-[1px]'
                    href={item.demoLink}
                    target='_blank'
                  >
                    View Live <MoveUpRight size={15} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
