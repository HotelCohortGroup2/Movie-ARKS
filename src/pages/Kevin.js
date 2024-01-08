import React from "react"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"


const Kevin = (props) => {
  return (
    <div>
      <Navbar />
      <Link to="/Aboutus"><button>Previous</button></Link>
      <h1>Kevin's info</h1>
    </div>
  )
}

export default Kevin
