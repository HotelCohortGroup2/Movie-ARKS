import React from "react"
import { Nav, NavItem, Navbar, NavbarBrand, Button } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import '../styling/Home.css'

const Header = (props) => {
  return (
    <div className="Header-Content">
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/Movie'><li>Movies</li></NavLink>
        <NavLink to='/Aboutus'><li>About us</li></NavLink>
        <NavLink to='/Review'><li>Leave a review</li></NavLink>
        <NavLink to='/Signup'><li>Sign up</li></NavLink>
        <NavLink to='/Login'><li>Log in</li></NavLink>
      </ul>
    </div>
  )
}

export default Header
