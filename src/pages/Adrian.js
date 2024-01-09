import React from "react"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

const Adrian = (props) => {
  return (

    <div>
        <Navbar />

        <Link to="/Aboutus"><button>Previous</button></Link>

        <h1>Adrian 3 liner</h1>
    </div>
  )
}

export default Adrian
