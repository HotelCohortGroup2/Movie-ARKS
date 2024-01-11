import React, { useState } from "react"
import Navbar from "../components/Header"
import "../styling/SignUp.css"

const Signup = (props) => {

 const [isClicked, setIsClicked] = useState(false)


 // Once submitted get it to redirect straight to log in page
  const handleClick = () => {
    setIsClicked(true)
    alert('Clicked')
  }

  return (
    <div className="signup-header">
        <Navbar />
        <h1>WHY WAIT?! SIGN UP TODAY!</h1>
        <br/>
        <div>
          <div className="Body">
            <div>
              <input type="email" placeholder="Email"></input>
            </div>
            <br/>
            <div>
              <input type="password" placeholder="Password"></input>
            </div>
            <br/>
            <div>
              <input type="password" placeholder="Confirm Password"></input>
            </div>

          </div>
          <br/>
          <div className="Footer">
            <button onClick={handleClick}>Sign up</button>
          </div>
        </div>
    </div>
  )
}

export default Signup