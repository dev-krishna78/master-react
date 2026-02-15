import React,{useContext} from 'react'
import { PostDataContext } from '../Context/PostContext'

const Sections = () => {

    const data = useContext(PostDataContext)
    console.log(data)

  return (

    <div className='h-90 bg-zinc-700'>
        <h1 className='text-xl '>All sections </h1>
    </div>
  )
}

export default Sections