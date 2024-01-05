import React from "react"
import Navbar from "./Navbar"
import '../App.css'
import { Link } from "react-router-dom"


const Aboutus = (props) => {
  return (
    <div>
        <Navbar />
        <h1>About us</h1>
        <div className="About">
          Picture
          <Link to="/Adrian">Adrian's Info</Link>
          3 Liner connect with me:
        </div>
        <div className="About">
          Picture
          <Link to="/Ron"> Ron's Info </Link>
          3 Liner connect with me:
        </div>
        <div className="About">
          Picture
          <Link to="/Kevin"> Kevin's Info </Link>
          3 Liner connect with me:
        </div>
        <div className="About">
          Picture
          <Link to="/Sam"> Sam's Info </Link>
          3 Liner connect with me:
        </div>
    </div>
  )
}

export default Aboutus
