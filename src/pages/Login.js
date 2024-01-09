import React, { useState } from "react"
import Navbar from "../components/Navbar"

const Login = (props) => {
    
    const [isClicked, setIsClicked] = useState(false)


    // Once submitted get it to redirect straight to log in page
     const handleClick = () => {
       setIsClicked(true)
       alert('Clicked')
     }

  return (
    <div>
        <Navbar />
      <h1>Login</h1>
      <div className="Login-Form">
        <div className="Login-Body">
            <input type="email" placeholder="Please enter Email"></input>
            <input type="password" placeholder="Password"></input>
        </div>
        <div className="Login-Footer">
            <button onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
