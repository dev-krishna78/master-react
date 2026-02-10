import React, { useState } from 'react'

const StudentForm = ({addStudent}) => {

    
        const [name,setName] = useState("");
        const [age,setAge] = useState("");
        const [domain,setDomain]= useState("");

        const handleSubmit =(e) =>{
            e.preventDefault();

            addStudent({name ,age , domain});

            setName("");
            setAge("");
            setDomain("");
        }

  return (
    <form  onsubmit={handleSubmit}
    className='bg-white p-4 rounded-lg shadow-md max-w-md mx-auto'>
        <input type="text" placeholder='Name' className='w-full border p-2 mb-2' value={name} onChange={(e)=>{
            setName(e.target.value)
        }}/>

        <input type="Number" placeholder='Age' className='w-full border p-2 mb-2' value={age} onChange={(e)=>{
            setAge(e.target.value)
        }}/>

        <input type="text" placeholder='Domain' className='w-full border p-2 mb-2' value={domain} onChange={(e)=>{
            setDomain(e.target.value)
        }}/>

        <button className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>
            Add Student
        </button>
    </form>
  )
}

export default StudentForm;