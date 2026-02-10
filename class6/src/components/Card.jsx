import React from 'react'

const Card = (props) => {
  return (
    <div>
        {props.users.map(function(elem,idx){
         return <div key={idx} className='h-64 w-64 p-10 bg-white shadow-2xl border-none rounded-3xl flex gap-5 flex-col'>
          <h2 className='text-2xl text-black font-mono'>{elem.title}</h2>
          <h2 className='text-2xl text-black font-mono'>{elem.email}</h2>
         </div>
      })}
    </div>
  )
}

export default Card