import React from 'react'

export default function LinkCard({link}) {
  return (
    <a href={link.url} target='__blank' className='p-3 border border-gray-100/20 hover:border-gray-100 hover:scale-110 transition-transform duration-300'>
        {link.icon}
    </a>
  )
}
