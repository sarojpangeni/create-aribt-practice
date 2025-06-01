import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './HOC/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Work from './Pages/Work'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/work' element={<Work />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
