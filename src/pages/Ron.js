import React from "react"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

const Ron = (props) => {
  return (
    <div>
        <Navbar />
        <Link to="/Aboutus"><button>Previous</button></Link>
        <h1>Ron's Info</h1>
    </div>
  )
}

export default Ron
