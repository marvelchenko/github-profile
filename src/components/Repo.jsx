import React from 'react'

const Repo = ({ repos }) => {
  return (
    <>
     {repos.map((repo, idx) =>(
      <div key={idx} 
      className='bg-gray-900 p-3 leading-8'>
        <a href={repo.html_url} target="_blank" rel='noreferrer'
        className='break-words font-semibold hover:underline text-teal-400'>
          {repo.full_name}
        </a>
        <div className='flex gap-x-5'>
          <h1 className='text-sm font-semibold'>
            {"🟢" + repo.language}
          </h1>
          <h1 className='text-sm font-semibold'>forks :{repo.forks}</h1>
          <h1 className='text-sm font-semibold'>stars :{repo.stargazers_count}</h1>
        </div>
      </div>
     ))}
    </>
  )
}

export default Repo
