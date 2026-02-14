import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Product from "./pages/Product"

import Women from "./pages/Women"
import Men from "./pages/Men"

import RandomAbout from "./pages/RandomAbout"
import AnyCourse from "./pages/AnyCourse"
import CourseDetail from './pages/CourseDetail'
import Notfound from './pages/Notfound'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/courses" element={<Courses/>}/>

        {/* {nested Routes} */}
        <Route path='/product/men' element={<Men/>}/>
        <Route path='/product/women' element={<Women/>}/>

        {/* {Dynamic route} */}

        <Route path="/about/:id" element={<RandomAbout/>} />
        <Route path="/courses/:courseId" element={<AnyCourse/>} />


        {/* {Nested Dynamic Routes } */}

        <Route path='courses/:coursesId/detail' element={<CourseDetail/>}/>

       {/* {Notfound Page} */}

       <Route path='/*' element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App