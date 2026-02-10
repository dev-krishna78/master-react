import React from 'react'
import Card from './components/Card'

const App = () => {

  const User = [
  {
    name: "Rahul",
    age: 21,
    domain: "Full Stack Development",
    duration: "6 months"
  },
  {
    name: "Priya",
    age: 19,
    domain: "Data Science",
    duration: "4 months"
  },
  {
    name: "Aman",
    age: 23,
    domain: "AI / Machine Learning",
    duration: "8 months"
  }
];
  return (
    <div className='h-100 w-3xl border-2 bg-gray-100 m-10 p-10 rounded-2xl absolute top-20 right-50 shadow-2xl shadow-black border-white transition- duration-10 border-dashed flex justify-center '>
       {User.map(function(elem){
           return <Card 
           User={elem.name}
           age={elem.age}
           domain={elem.domain}
           duration={elem.duration}
           />
       })}
    </div>
  )
}

export default App