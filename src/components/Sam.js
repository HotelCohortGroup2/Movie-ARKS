import React from "react"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"

const Sam = (props) => {
  return (
    <div>
      <Navbar />
      <Link to="/Aboutus"><button>Previous</button></Link>
      <h1>Sam's Info</h1>
    </div>
  )
}

export default Sam
