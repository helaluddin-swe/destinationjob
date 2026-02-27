import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import GetTest from './pages/backend/GetTest'
import PostTest from './pages/backend/PostTest'
import Home from './pages/Home/Home'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
  return (
    <div>
      
        <Routes>
          <Route path='/' element={<Home/>}>
          <Route index element={<Dashboard/>}/>
          </Route>
          <Route path='/backend/get' element={<GetTest/>}/>
          <Route path='/backend/post' element={<PostTest/>}/>
        </Routes>
      
      
    </div>
  )
}

export default App
