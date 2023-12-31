import React,{useState} from 'react'
import "./Signup.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState({
      name:'',
      email:'',
      password:'',
      reEnterPassword:''
    })

    const handlechange=(e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const register=()=>{
        const {name,email,password,reEnterPassword}=user
        if(name && email && password &&(password===reEnterPassword)){
            //axios.post("http://localhost:3000/register",user)
            //.then(res=>{
                alert("Resgistration Successfull")
                navigate("/login")
            //})
            //.catch(err=> {console.log(err)
            //    alert("Please provide valid details!")
            //}
           // )
        }else{
            alert("invalid input")
        }
    }
  return (
    <div className='register'>
        <h1>Register</h1>
        <input type='text' name='name' placeholder='your Name' value={user.name} onChange={handlechange}></input>
        <input type='text' name='email' placeholder='your Email' value={user.email} onChange={handlechange}></input>
        <input type="password" name='password' placeholder='your Password' value={user.password} onChange={handlechange}></input>
        <input type="password" name='reEnterPassword' value={user.reEnterPassword} placeholder='Re-Enter Password' onChange={handlechange}></input>
        <div className='butt' onClick={register}>Register</div>
        <div>Or</div>
        <div className='butt' onClick={()=>navigate("/login")}>Login</div>

    </div>
  )
}

export default Signup
