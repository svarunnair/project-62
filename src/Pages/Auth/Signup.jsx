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
  const handleLog=()=>{
    navigate('/')
      window.location.reload()
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
      navigate('/')
        window.location.reload()
    }
  }

  return (
    <div >
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
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
        <div style={{display:"flex",flexDirection:"column",width:200,padding:20,gap:20}}>
        <button className='btn' onClick={handleSubmit} type='submit'  >Signup</button>
        <button onClick={handleLog}>Already have an account. login</button>
        </div>

    </div>
    </div>
  )
}

export default Signup