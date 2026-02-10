import React from 'react'

const Navbar = (props) => {

  return (
    <div style={{backgroundColor:props.color}} className='w-full h-10 bg-red-600 p-1 m-0.2 mb-2 flex justify-between align-middle '>
   <h1   className='text-2xl font-bold text-center font-stretch-50%  '>{props.title}</h1>
        
        <div className='flex gap-10'>
            {props.links.map(function(elem,idx){
                return <h2 key={idx} className='text-2xl font-mono hover:scale-110 underline hover:text-blue-600'>{elem}</h2>
            })
}
        </div>
    </div>
  )
}

export default Navbar