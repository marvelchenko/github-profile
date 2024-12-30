import React from 'react'
import github from '../assets/github.png'

const Logo = () => {
  return (
    <>
      <div className=' flex pb-2 justify-center items-center border-b border-gray-500 '>
        <img src={github} alt="github" className='w-24 rounded-full' />
        <h1 className='text-2xl px-4 first-letter:text-5xl'>GitHub users</h1>
      </div>
    </>
  )
}

export default Logo
