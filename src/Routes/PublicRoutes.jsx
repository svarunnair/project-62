import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Auth/Login'
import Home from '../Pages/Data/Home'
import Create from '../Pages/Data/Create'
import Edit from '../Pages/Data/Edit'
import Employ from '../Pages/Data/Employ'

function PublicRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/employ' element={<Employ/>}/>
    </Routes>
  )
}

export default PublicRoutes