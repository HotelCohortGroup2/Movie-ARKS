import React from "react"
import { Link } from "react-router-dom"

const Navbar = (props) => {
  return (
    <div>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/Movie'><li>Movies</li></Link>
        <Link to='/Aboutus'><li>About us</li></Link>
        <Link to='/Signup'><li>Sign up</li></Link>
        <Link to='/Review'><li>Leave a review</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
