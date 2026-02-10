import React, { useState } from 'react'
import Card from './components/card'

const App = () => {

  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')

  const [allUsers, setallUsers] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault();
     
    setallUsers([...allUsers,{title,email}])

    setTitle("");
    setEmail("");
  }
  return (
   
   <div className="h-screen w-full bg-gray-800 flex justify-center">
 
     <div className='h-full w-130 bg-gray-600 p-20'>
      <form className="bg-gray-200 h-110 w-80 p-10 rounded-3xl flex justify-center flex-col gap-8 shadow-md  shadow-white border-none"
         onSubmit={(e)=>{
            submitHandler(e)
         }}>


 <h1 className='text-black text-4xl font-bold text-center  '>React Form</h1>

      <input className="bg-white p-3 rounded-2xl shadow-md border-none shadow-black hover:scale-110" 
      type="text"
      placeholder='Enter name'
      value={title}
      required
      onChange={(e)=>{
         setTitle(e.target.value);
      }}  />

      <input className="bg-white p-3 rounded-2xl shadow-md border-none shadow-black hover:scale-110"
      type="emain"
      placeholder='enter email'
      value={email}
      required
      onChange={(e)=>{
         setEmail(e.target.value);
      }} />
 
      <button className="bg-blue-400 p-3 rounded-2xl shadow-md border-none shadow-black hover:scale-110 hover:bg-blue-600">
         submit</button>

      </form>

      </div>
      <div className='bg-gray-900 h-screen w-full p-10 flex flex-wrap gap-4 ' >
         <Card users={allUsers} />
      </div>
      </div>
  )
}

export default App