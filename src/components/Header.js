import React from "react";
import { Nav, NavItem, Navbar, NavbarBrand, Button } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "../styling/Home.css";

const Header = ({ currentUser, logout }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <Navbar className="my-2" color="secondary" dark>
      <NavbarBrand>Movie ARKS</NavbarBrand>
      <Nav justified>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/movie">Movies</NavLink>
        </NavItem>
        {!currentUser && (
          <>
            <NavItem>
              <NavLink to="/signup">Sign up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">Log in</NavLink>
            </NavItem>{" "}
          </>
        )}
        <NavItem>
          <NavLink to="/aboutus">About us</NavLink>
        </NavItem>
        {currentUser && (
          <NavItem>
            <Button onClick={handleClick}>Log out</Button>
          </NavItem>
        )}
      </Nav>
    </Navbar>
    // <div className="Header-Content">
    //   <ul>
    //     <NavLink to='/'><li>Home</li></NavLink>
    //     <NavLink to='/movie'><li>Movies</li></NavLink>
    //     <NavLink to='/aboutus'><li>About us</li></NavLink>
    //     <NavLink to='/signup'><li>Sign up</li></NavLink>
    //     <NavLink to='/login'><li>Log in</li></NavLink>
    //   </ul>
    // </div>
  );
};

export default Header;
