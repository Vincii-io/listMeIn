import React from 'react'
import Users from './Users'

export default function Home() {
  return (
    <div className='w-screen flex justify-center '>
      <div className='max-w-6xl grid grid-cols-4 gap-6'>
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
      </div>
    </div>
  )
}
