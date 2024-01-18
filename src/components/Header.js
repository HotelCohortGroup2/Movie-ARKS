import React from "react";
import { Nav, NavItem, Navbar, NavbarBrand, Button } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "../styling/Header.css";

const Header = ({ currentUser, logout }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		logout();
		navigate("/");
	};

	const headerStyle = {
		backgroundImage:
			'url("https://cdn.create.vista.com/api/media/medium/447485566/stock-photo-top-view-airy-crunchy-popcorn-banner-cinema-concept?token=")',
		backgroundSize: "cover",
		backgroundPosition: "center",
		position: "relative",
	};

	return (
		<Navbar style={headerStyle} className="bg-dark" dark expand="md">
			<NavbarBrand>
				<NavLink to="/" className="header-font">
					ARKS
				</NavLink>
			</NavbarBrand>
			<Nav className="ml-auto header-font" navbar>
				<NavItem>
					<NavLink to="/" className="nav-link">
						Home
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/movie" className="nav-link">
						Movies
					</NavLink>
				</NavItem>
				{!currentUser && (
					<>
						<NavItem>
							<NavLink to="/signup" className="nav-link">
								Sign up
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/login" className="nav-link">
								Log in
							</NavLink>
						</NavItem>{" "}
					</>
				)}
				<NavItem>
					<NavLink to="/aboutus" className="nav-link">
						About us
					</NavLink>
				</NavItem>
				{currentUser && (
					<NavItem>
						<Button onClick={handleClick} color="danger">
							Log out
						</Button>
					</NavItem>
				)}
			</Nav>
		</Navbar>
	);
};

export default Header;
