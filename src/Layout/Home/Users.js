import React from 'react'
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'

export default function Users() {
  return (
    <div className='w-48 h-fit mt-8 shadow-lg p-4'>
      <div className='w-full flex justify-center items-center'>
        <div>
          <img
            src='https://api.uifaces.co/our-content/donated/IPh6PTBx.jpg'
            alt=''
            className='rounded-full w-full'
          />
          <div className='text-center '>John Doe</div>
        </div>
      </div>
      <div className='w-full mt-2 text-gray-800'>
        <div className='flex items-center gap-2'>
          <div className='p-1 shadow-inner bg-gray-400/[.15] rounded-full'>
            <FaGithub className=' text-lg' />
          </div>

          <div>
            <a href='!#'>Github</a>
          </div>
        </div>
        <div className='flex items-center gap-2 mt-1'>
          <div className='p-1 shadow-inner bg-gray-400/[.15] rounded-full'>
            <FaLinkedin className='text-lg' />
          </div>

          <div>
            <a href='!#'>Linkedin</a>
          </div>
        </div>
        <div className='flex items-center gap-2 mt-1'>
          <div className='p-1 shadow-inner bg-gray-400/[.15] rounded-full'>
            <FaGlobe className='text-lg' />
          </div>
          <div>
            <a href='!#'>Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  )
}
