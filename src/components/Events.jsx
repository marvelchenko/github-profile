import React from 'react'
import { format } from 'timeago.js'

const Events = ({ events }) => {
  return (
    <>
      {events?.map((event, index) => (
        <div 
        key={index}>
          <img src={event.actor?.avatar_url} alt="actor" className='w-16 rounded-full' />
          <h1 className='break-words'> {event?.actor?.login} {event?.type}
            <br/>
            {event?.repo?.name} 
            <br />
            <span className='text-sm'> {format(event?.created_at)} </span>
            </h1>
        </div>
      ))}
    </>
  )
}

export default Events
