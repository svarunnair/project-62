import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Pages/Data/Home'
import Create from '../Pages/Data/Create'
import Edit from '../Pages/Data/Edit'
import Employ from '../Pages/Data/Employ'


function PrivateRoute() {
  
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/employ' element={<Employ/>}/>
    </Routes>
  )
}

export default PrivateRoute