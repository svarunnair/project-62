import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Auth/Login'
import Home from '../Pages/Data/Home'
import Create from '../Pages/Data/Create'
import Edit from '../Pages/Data/Edit'
import Employ from '../Pages/Data/Employ'
import Signup from '../Pages/Auth/Signup'

function PublicRoutes() {
  let token=localStorage.getItem('email')
  console.log("token",token)
  return (
    <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={token&&<Home/>}/>
        <Route path='/create' element={token&&<Create/>}/>
        <Route path='/edit/:id' element={token&&<Edit/>}/>
        <Route path='/employ' element={token&&<Employ/>}/>
    </Routes>
  )
}

export default PublicRoutes