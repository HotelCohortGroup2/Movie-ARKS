import React from "react"
import { Nav, NavItem, Navbar, NavbarBrand, Button } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import '../styling/Home.css'

const Header = (props) => {
  return (
    <div className="Header-Content">
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/movie'><li>Movies</li></NavLink>
        <NavLink to='/aboutus'><li>About us</li></NavLink>
        <NavLink to='/review'><li>Leave a review</li></NavLink>
        <NavLink to='/signup'><li>Sign up</li></NavLink>
        <NavLink to='/login'><li>Log in</li></NavLink>
      </ul>
    </div>
  )
}

export default Header