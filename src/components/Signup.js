import React, { useState } from "react"
import Navbar from "./Navbar"

const Signup = (props) => {

 const [isClicked, setIsClicked] = useState(false)


 // Once submitted get it to redirect straight to log in page
  const handleClick = () => {
    setIsClicked(true)
    alert('Clicked')
  }

  return (
    <div>
        <Navbar />
        <h1>Sign Up</h1>
        <div>
          <div className="Body">
            <input type="email" placeholder="Email">
            </input>
            <input type="password" placeholder="Password"></input>
            <input type="password" placeholder="Confirm Password"></input>
          </div>
          <div className="Footer">
            <button onClick={handleClick}>Sign up</button>
          </div>
        </div>
    </div>
  )
}

export default Signup
