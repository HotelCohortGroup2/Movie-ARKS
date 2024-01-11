import React from "react"
import Header from "../components/Header"
import { NavLink } from "react-router-dom"
import "../styling/Aboutus.css"

const Sam = (props) => {
  return (
    <div >
        <Header />
        <div className="person-page">
          <h1 className="header h1"> Sam </h1>

          <div className="person">
            Picture
          </div>

          <div className="information">
            Information goes here
          </div>

          <br/>
          <NavLink to="/aboutus"><button>Previous</button></NavLink>
        </div>
    </div>
  )
}

export default Sam