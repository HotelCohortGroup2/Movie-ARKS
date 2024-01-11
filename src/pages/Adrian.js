import React from "react"
import Header from "../components/Header"
import { NavLink } from "react-router-dom"
import "../styling/Aboutus.css";

const Adrian = (props) => {
  return (

    <div >
        <Header />
        <div className="person-page">
          <h1 className="header h1"> Adrian</h1>

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

export default Adrian