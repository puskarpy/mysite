import React from 'react'
import {UserRound} from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
    return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{type:"spring", duration:2}}
    viewport={{once:true}}
    className='relative max-w-6xl mx-auto px-10 py-20 sm:min-h-screen h-fit'>
    <div className="absolute inset-0 z-0">
        <div className="w-72 h-72 bg-gradient-to-r from-sky-400 via-purple-500 to-teal-500 blur-[120px] opacity-30 rounded-full absolute top-10 left-10" />
        <div className="w-72 h-72 bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-500 blur-[100px] opacity-20 rounded-full absolute bottom-20 right-10" />
      </div>            
      <div className='mb-6 flex items-start'>
                    <span className='mr-2'><UserRound size={34}/></span>
                <h2 className='text-4xl  gap-4 font-bold uppercase'>About me</h2>
            </div>
            <div className='sm:text-lg'>
                <p className='mb-4'>I’m Pushkar Niraula, a computer engineering student from Kathmandu with a passion for creating full-stack web applications. I enjoy building interactive frontends, robust backends, and exploring ways to bring ideas to life through code. My skill set includes <span className='bg-gray-600 px-2 py-[1px]'> HTML, CSS, JavaScript, MERN stack, NextJS and Python </span>, tools I’m constantly improving as I grow as a developer.</p>
                <p className='mb-4'>
                    <span className='block mb-4 text-gray-100/30 italic font-semibold'>/* If you’re a hiring manager or a serious professional, you might want to stop here. The next part is just me talking like a normal human. *\</span>
                    Phew. Glad we got the formal intro out of the way. Now, the truth? I mostly just pretend I know what I’m doing.
                </p>
                <p className='mb-4'>It all started back in class 9, when I had one simple question: “How do websites work? I made an HTML page, but why can’t I browse it on the internet?” That single curiosity dragged me into the rabbit hole of web development.</p>
                <p className='mb-4'>In my first year of high school, I learned HTML and CSS. By my second year, JavaScript showed up… but honestly, my “skills” at that point were limited to console.log and alert. Later, I stumbled upon React — only to realize I actually needed to know JavaScript first. So, just to learn React, I learned JavaScript… and then never really stopped.</p>
                <p className='mb-4'>Since then, I’ve “pretended” to know my way around JavaScript, React, Node.js, Next.js, Express, MongoDB, and a bunch of other tech stacks that somehow made their way into my brain. Still figuring it all out, but that’s half the fun.</p>
                <p className='mb-4'>Besides this , I’m either lost in music, or chasing the “perfect” photo — which, like bug-free code, is still a myth I’m chasing. My ultimate goal? Keep learning, keep building, and maybe (just maybe) write code that works on the first try.</p>
            </div>
        </motion.div>
    )
}
