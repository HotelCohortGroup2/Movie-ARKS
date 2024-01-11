import React, { useState } from "react"
import Header from "../components/Header"

const Login = (props) => {
    
    const [isClicked, setIsClicked] = useState(false)


    // Once submitted get it to redirect straight to log in page
     const handleClick = () => {
       setIsClicked(true)
       alert('Clicked')
     }

  return (
    <div className="signup-header">
        <Header />
      <h1>Login</h1>
      <br/>
      <div className="Login-Form">
        <div className="Login-Body">
            <div>
              <input type="email" placeholder="Please enter Email"></input>
            </div>
            <br/>
            <div>
              <input type="password" placeholder="Password"></input>
            </div>
            <br/>
            <div className="Login-Footer">
                <button onClick={handleClick}>Login</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
