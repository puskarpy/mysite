import React from 'react'
import TechCard from './ui/TechCard';

const frontendTech = {
  frontend:[
    {
    id: 1,
    name: 'HTML',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'JavaScript',
  },
  {
    id: 4,
    name: 'React',
  },
  {
    id: 5,
    name: 'Next.js',
  },
  {
    id: 6,
    name: 'Tailwind',
  },
  {
    id: 7,
    name: 'Bootstrap',
  }
]
}
const backendTech = {
  'backend & database':[
    {
      id: 1,
      name: 'Node.js',
    },
    
    {
      id: 2,
      name: 'Express',
    },
    {
      id: 3,
      name: 'MongoDB',
    },
    {
      id: 4,
      name: 'PostgreSQL',
    },
    {
      id: 5,
      name: 'MySQL',
    },
    {
      id: 6,
      name: 'SQLite',
    },
  ]
}

const tools = {
  tools:[
    {
      id: 1,
      name: 'Git',
    },
    {
      id: 2,
      name: 'GitHub',
    },
    {
      id: 3,
      name: 'VS Code',
    },
    {
      id: 4,
      name: 'Terminal',
    },
    {
      id: 5,
      name: 'Figma',
    },
  ]
}

export default function Skills() {

  return (
    <div className='relative max-w-6xl mx-auto min-h-fit px-10 py-20 '>
        <div className='z-10 mb-6 flex items-start'>
        <h2 className='text-3xl font-bold tracking-wider'>What I Work With</h2>
        </div>
            <div className='z-10'>
            <div className='grid sm:grid-cols-3 gap-6'>
             <TechCard tech={frontendTech}/>
             <TechCard tech={backendTech}/>
             <TechCard tech={tools}/>
            </div>
            </div>
    </div>
  )
}
