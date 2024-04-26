import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Auth/Login'
import Signup from '../Pages/Auth/Signup'

function PublicRoutes() {
  
  return (
    <Routes>
        <Route path='/' element= { <Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default PublicRoutes