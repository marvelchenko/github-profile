import React from 'react'
import { Link } from 'react-router-dom'

const UsersContainer = ({ users }) => {
  return (
    <div className='flex gap-5 flex-wrap justify-center py-5'>
     {users && users.map((user, index) => (
        user?.login && (
        <div key={index} 
            className='flex w-[200px] border border-gray-500
            bg-gray-700 p-3 flex-col items-center'>
            <img src={user?.avatar_url} alt=""
            className='w-24 mb-4 border-4 border-teal-400
            rounded-full ' />
            <h1 className='text-xl'> {user?.login} </h1>
            <h1 className='text-xl text-teal-400'> {user?.name} </h1>
            <Link to={`/${user?.login}`} className=' mt-4'>
            <span className='text-gray-200 bg-teal-400 rounded font-semibold lock py-1 px-4 tracking-wide'>
                View
            </span>
            </Link>
        </div>
        )
     ))}
    </div>
  )
}

export default UsersContainer
