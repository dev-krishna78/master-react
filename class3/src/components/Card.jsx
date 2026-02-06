import React from 'react'

const Card = (props) => {
  return (
    <div className='h-50 w-50 p-5 m-5 bg-blue-200 border-2 border-gray-500 rounded-2xl gap-2 flex justify-center flex-col shadow-2xl shadow-blue-700 '>
      <h2 className='text-xl text-black font-mono font-bold no-underline hover:underline hover:animate-bounce'>{props.User}</h2>
      <h3  className='text-xl text-black font-mono font-bold'>{props.age}</h3>
      <h3  className='text-xl text-black font-mono font-bold'>{props.domain}</h3>
      <h3  className='text-xl text-black font-mono font-bold'>{props.duration}</h3>
    </div>
  )
}

export default Card