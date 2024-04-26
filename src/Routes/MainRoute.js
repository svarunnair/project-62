import React from 'react'
import PrivateRoute from './PrivateRoute'
import PublicRoutes from './PublicRoutes'

function MainRoute() {
      const token=localStorage.getItem('token')
  return (
    <div>
{token?<PrivateRoute/>:<PublicRoutes/>}
    </div>
  )
}

export default MainRoute