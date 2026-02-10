import React from 'react'
import { useState } from 'react'

import StudentForm from "./components/StudentForm";

const App = () => {

      const [students , setStudents] = useState([]);

      const addStudent = (students)=>{
        setStudents([...students , students]);
      };
      
      const deleteStudent = (index) =>{
        const newStudents = students.filter((_,i) => i !== index);
           setStudents(newStudents);
      };
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>Student profile manager </h1>
      
      <StudentForm addStudent={addStudent} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {students.map((student,index)=>{
          <StudentCard key={index} student={student} deleteStudent={()=>{
            deleteStudent(index)
          }}/>

        })}
      </div>
    </div>
  )
}

export default App