import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postAuth } from '../../Redux/auth/authAction'

function Login() {

  const [email,setEmail]=useState("")
   const [isValidemail,setIsValidEmail]=useState("")
   const success = useSelector((store)=>store.auth.postAuth)
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()

  // const token=localStorage.getItem("token")
  const token=localStorage.getItem('token')

  console.log("tokenLL",token)

  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
  }
  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }
  const handleSignup=()=>{
    navigate('/signup')
  }
  const handleSubmit=()=>{
    if(email===""||password===""){
      alert("Please enter data")
    }
    else{
      let data={
      email:email,
      password:password
    }
    dispatch(postAuth(data))
    localStorage.setItem("email",email)
   
    }
  }


  useEffect(()=>{
if(Object.keys(success).length>0){
 window.location.reload()
    navigate('/')
}
  },[success])

console.log("success",success)

  return (
    <div >
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
        <h1>Login</h1>
        <hr ></hr>
        <div   >
            <label  form='username'>UserName</label>
            <input style={{border:"1px solid grey",borderRadius:20,padding:10}} onChange={handleEmail} placeholder='User name...'/>
   
        </div>
        <div >
            <label  form='password'>Password</label>
            <input style={{border:"1px solid grey",borderRadius:20,padding:10}} onChange={handlePassword} placeholder='Password...' />
        </div>
        
        
        <div style={{display:"flex",flexDirection:"column",gap:20,width:200,marginTop:10}}>
        <button className='btn' onClick={handleSubmit} type='submit'  >Login</button>
<button onClick={handleSignup}>Go back to Signup</button>
        </div>

    </div>
    </div>
  )
}

export default Login