import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postAuth, postSignup } from '../../Redux/auth/authAction'

function Signup() {

  const [email,setEmail]=useState("")
  const [user,setUser]=useState('')
   const [isValidemail,setIsValidEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()

  // const token=localStorage.getItem("token")

  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailPattern.test(value));
  }
  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }
  const handleUser=(e)=>{
    let value=e.target.value
    setUser(value)
  }
  const handleSubmit=()=>{
    if(email===""||password===""){
      alert("Please enter data")
    }
    else{
     let data={
      userName:user,
      email:email,
      password:password
    }
    dispatch(postSignup(data))
      alert("Login Successfull")
      navigate('/login')
    }
  }

  return (
    <div >
    <div >
        <h1>Signup</h1>
        <hr ></hr>
        <div >
        <div style={{marginBottom:10}}>
        <label>User Name</label>
        <input placeholder='User name...' onChange={handleUser} style={{border:"1px solid grey",borderRadius:20,padding:10}}/>
        </div>
            <label  form='email'>Email Id</label>
            <input style={{border:"1px solid grey",borderRadius:20,padding:10}} onChange={handleEmail} placeholder='Email Id...'/>
        {!isValidemail && <p>{email&&<p>Please enter a valid email address</p>}</p>}
        </div>
        <div >
            <label  form='password'>Password</label>
            <input style={{border:"1px solid grey",borderRadius:20,padding:10}} onChange={handlePassword} placeholder='Password...' />
        </div>
        <button className='btn' onClick={handleSubmit} type='submit'  >Login</button>

    </div>
    </div>
  )
}

export default Signup