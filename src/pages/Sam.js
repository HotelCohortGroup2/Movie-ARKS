import React from "react"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import "../styling/Aboutus.css"

const Sam = (props) => {
  return (
    <div >
        <Navbar />
        <div className="person-page">
          <h1 className="header h1"> Sam </h1>

          <div className="person">
            Picture
          </div>

          <div className="information">
            Information goes here
          </div>

          <br/>
          <Link to="/Aboutus"><button>Previous</button></Link>
        </div>
    </div>
  )
}

export default Sam
