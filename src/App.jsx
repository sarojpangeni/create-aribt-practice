import { Route, Routes } from 'react-router-dom'
import Layout from './HOC/Layout'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
