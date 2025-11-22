import React from 'react'


export default function TechCard({tech}) {
  return (
    <div className='border-[1px] border-neutral-100/10 hover:border-neutral-100/50 text-[#afafaf] hover:text-white p-6 pb-12'>
      {Object.entries(tech).map(([key, value]) => (
        <div key={key}>
          <h2 className='capitalize text-2xl font-bold mb-6'>{key}</h2>
          <ul className='space-y-2'>
            {value.map((item) => (
                <li className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-4 before:w-4 before:bg-[url('chevron-right.svg')] before:bg-no-repeat before:bg-contain">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>  

  )
}
