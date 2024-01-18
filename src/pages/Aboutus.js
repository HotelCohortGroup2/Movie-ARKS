import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "../styling/Aboutus.css";

const Aboutus = () => {
	return (
		<div className="header">
			<h1>About us</h1>
			<div className="container">
				<div>
					<img src="https://media.licdn.com/dms/image/D5635AQGn1idSU4796g/profile-framedphoto-shrink_400_400/0/1697857633854?e=1706126400&v=beta&t=1vMTq50PEwdyQWjq-4A7kio-UvFOw6gFVRrPiT1Qjxo" alt="profile" className="profile-image"/>
					<div>
						<Link to="/adrian"> Adrian</Link>
					</div>
				</div>

				<div>
					<img src="https://media.licdn.com/dms/image/D5603AQGnwv_f-sBb2g/profile-displayphoto-shrink_400_400/0/1697236163466?e=1710979200&v=beta&t=SPHo_C17c_XHZBaKDdGQutuOuSv79bQk841r5V_YlHk" alt="profile" className="profile-image"/>
					<div>
						<Link to="/ron"> Ron</Link>
					</div>
				</div>

				<div>
					<img src="https://media.licdn.com/dms/image/D5635AQEbimAH-o30Ww/profile-framedphoto-shrink_400_400/0/1697238634718?e=1706126400&v=beta&t=VZ_AGXWVunTarDItfbT5HQAdDKV8z8D0afZmsVZj1jQ" alt="profile" className="profile-image"/>
					<div>
						<Link to="/kevin"> Kevin</Link>
					</div>
				</div>

				<div>
					<img src="https://media.licdn.com/dms/image/D4E35AQGgdL_md6KOLQ/profile-framedphoto-shrink_400_400/0/1705143298683?e=1706126400&v=beta&t=XLD5vV9_engKXb5_yTdQhMTD9RSZ080oBAbQt1yezn4" alt="profile" className="profile-image"/>
					<div>
						<Link to="/sam"> Sam</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aboutus;
