import React from 'react'
import "./Home.css"
const Home = ({setLoginUser}) => {
  return (
    <div className="homepage">
       
        <div className='button' onClick={()=>setLoginUser({})}>Logout</div>
    </div>
  )
}

export default Home