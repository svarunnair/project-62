import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postAuth } from '../../Redux/auth/authAction'

function Login() {

  const [email,setEmail]=useState("")
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
      alert("Login Successfull")
      navigate('/home')
    }
  }

  return (
    <div >
    <div >
        <h1>Login</h1>
        <hr ></hr>
        <div   >
            <label  form='username'>UserName</label>
            <input style={{border:"1px solid grey",borderRadius:20,padding:10}} onChange={handleEmail} placeholder='Email Id...' type='"text' id='username' className='border-fw'/>
        {!isValidemail && <p>{email&&<p>Please enter a valid email address</p>}</p>}
        </div>
        <div  className='mt-3'>
            <label  form='password'>Password</label>
            <input style={{border:"1px solid grey",borderRadius:20,padding:10}} onChange={handlePassword} placeholder='Password...' type='"text' id='password' className='border-fw'/>
        </div>
        <button className='btn' onClick={handleSubmit} type='submit'  >Login</button>

    </div>
    </div>
  )
}

export default Login