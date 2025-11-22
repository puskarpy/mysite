import React from 'react'
import {Github, Instagram, Twitter, Linkedin, Cable} from 'lucide-react'
import LinkCard from './ui/LinkCard'

const links = [
  {
    name: "Github",
    icon: <Github/>,
    url: "https://github.com/puskarpy"
  },
  {
    name: "X",
    icon: <Twitter/>,
    url: "https://x.com/puskarpy"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin/>,
    url: "https://www.linkedin.com/in/pushkar-niraula-100b7728a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Github",
    icon: <Github/>,
    url: "https://github.com/puskarpy"
  },
]

export default function Links() {
  return (
    <div className="max-w-7xl mx-auto px-10 py-20">
        <div className='text-3xl font-bold tracking-wider'>
         Let's build something together.
        </div>
        <div className='mb-6 mt-2 text-sm text-neutral-200'>
        Feel free to reach out if you want to discuss a project, collaborate, or just say hello.

        </div>

  <div className='flex gap-4  mb-8'>
     {
      links.map((link, index) => (
        <LinkCard key={index} link={link}/>
      ))
     }
  </div>
</div>

  )
}
