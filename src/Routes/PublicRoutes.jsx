import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Auth/Login'
import Home from '../Pages/Data/Home'
import Create from '../Pages/Data/Create'
import Edit from '../Pages/Data/Edit'
import Employ from '../Pages/Data/Employ'
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