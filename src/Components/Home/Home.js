import React from 'react'
import "./Home.css"

import { useNavigate } from 'react-router-dom'
const Home = ({setLoginUser}) => {
  const navigate=useNavigate()
  return (
    
    <div className="homepage">
       <h1>Hello, Welcome to our page!</h1>
        <div className='button' onClick={()=>navigate('/login')}>Logout</div>
    </div>
  )
}

export default Home
