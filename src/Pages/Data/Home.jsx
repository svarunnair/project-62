import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()

    const token=localStorage.getItem("email")

    console.log("emailToken",token)

    const handleEmploy=()=>{
        navigate('/employ')
    }

    const handleLogout=()=>{
        localStorage.clear()
        window.location.reload()
        navigate('/')
    }
  return (
    <div >
        <div style={{height:40,background:"#F5F5DC",justifyContent:"space-between",display:"flex"}}>
            <text>HOME</text>
             <button onClick={handleEmploy}>EMPLOY LIST</button>
              <text>{token}</text>
                 <button onClick={handleLogout}>LOG OUT</button>
        </div>

        <div style={{marginTop:100,display:"flex",flexDirection:"column"}}>
         <text style={{fontSize:20,fontWeight:600}}>Welcome</text>
            <text style={{fontSize:20,fontWeight:600}}> {token}</text>
        </div>
 
    </div>
  )
}

export default Home