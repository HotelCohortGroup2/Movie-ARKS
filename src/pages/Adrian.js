import React from "react";
import { NavLink } from "react-router-dom";
import "../styling/Aboutus.css";

const Adrian = () => {
	return (
		<div>
			<div className="person-page">
				<h1 className="header-h1"> Adrian</h1>

				<img src="https://media.licdn.com/dms/image/D5635AQGn1idSU4796g/profile-framedphoto-shrink_400_400/0/1697857633854?e=1706126400&v=beta&t=1vMTq50PEwdyQWjq-4A7kio-UvFOw6gFVRrPiT1Qjxo" alt="profile" className="profile-image"/>

    <p1 className="contact-me">Contact me at...</p1>
    <p2>
    	<div><a href ="https://www.linkedin.com/in/adrian-carranza13/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon>LinkedIn</a></div> 
        <div><a href ="https://github.com/AdrianC113" target="_blank"><ion-icon name="logo-github"></ion-icon>GitHub</a></div> 
        <section class="intro"></section>   
    </p2>   
				<div className="information">Hello, my name is Adrian Carranza, and I'm currently immersing myself in the world of software development at LEARN Academy. With a background spanning 8 years of military active duty in the logistics field, I've embark on a new and exciting journey into full-stack web development.

My time in logistics has been incredibly valuable, providing me with a robust understanding of supply chain management, inventory control, and the intricate web of operations that keeps things moving. However, I've always been drawn to the dynamic and transformative nature of the tech industry. It's the realm where innovation happens daily, and I want to be a part of that.

The decision to transition from logistics to software development wasn't made lightly. It's a leap into the unknown, but one I'm taking with great enthusiasm. I see this as an opportunity to merge my hands-on experience in logistics with the power of coding. I believe this combination will not only enrich my skill set but also bring a unique perspective to the tech industry.

My ultimate goal is to leverage my dual expertise in logistics and web development to contribute to the creation of innovative solutions. I'm particularly interested in projects that streamline logistics operations, enhance supply chain visibility, and ultimately make a positive impact on efficiency and sustainability.

As I continue on this journey, I'm excited about the challenges and opportunities that lie ahead. I'm not just transitioning careers; I'm embracing a whole new way of thinking and problem-solving. I'm confident that my background in logistics, coupled with my newfound coding skills, will make me a valuable asset in the ever-evolving tech landscape.

Thank you for taking the time to learn a bit about my journey, and I'm eager to bring my unique blend of experiences to the world of software development.

</div>
		<br />
				<NavLink to="/aboutus">
					<button>Previous</button>
				</NavLink>
			</div>
		</div>
	);
};

export default Adrian;
