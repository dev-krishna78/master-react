import { useState } from 'react'

const StudentCard = ({student,deleteStudent }) => {
    const [showDetails,setshowDetails]=useState(false);
  return (

    <div className='bg-white p-4 rounded-lg shadow-md'>
        <h2 className='text-xl font-bold'>{student.name}</h2>

        {showDetails && (
            <div className='text-gray-700 mt-2'>
          <p>Age:{student.age}</p>
          <p>Domain:{student.domain}</p>
        </div>
    )}

      <div className='flex gap-2 mt-3'>
        <button onClick={()=>{
            setshowDetails(!showDetails)
        }} className='bg-green-500 text-white px-3 py-1 rounded'>
            {showDetails?"hide":"show"}
        </button>

        <button onClick={deleteStudent} className='bg-red-500 text-white px-3 py-1 rounded'>Delete</button>
      </div>
    </div>
  );
}

export default StudentCard