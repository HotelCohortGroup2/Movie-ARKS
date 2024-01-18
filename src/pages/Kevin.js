import React from "react"
import { NavLink } from "react-router-dom"
import "../styling/Aboutus.css";


const Kevin = () => {
  return (
    <div >
        <div className="person-page">
          <h1 className="header-h1"> Kevin </h1>

          <img src="https://media.licdn.com/dms/image/D5635AQEbimAH-o30Ww/profile-framedphoto-shrink_400_400/0/1697238634718?e=1706126400&v=beta&t=VZ_AGXWVunTarDItfbT5HQAdDKV8z8D0afZmsVZj1jQ" alt="profile" className="profile-image"/>

          <p1 className="contact-me">Contact me at...</p1>
    <p2>
    	<div><a href ="https://www.linkedin.com/in/mr-kevin-rojas-/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon>LinkedIn</a></div> 
        <div><a href ="https://github.com/mrkevinrojas" target="_blank"><ion-icon name="logo-github"></ion-icon>GitHub</a></div> 
        <section class="intro"></section>   
    </p2>   

          <div className="information">
          Hello! 👋 I'm an aspiring full-stack web developer with a keen passion for crafting solutions to intricate problems. My journey into full-stack web development has been a thrilling pursuit of turning ideas into functional, user-centric solutions.

Before venturing into the world of coding, I served in the Marine Corps as a logistics officer. This experience not only ingrained in me the values of discipline and dedication but also equipped me with invaluable skills in leadership and supply chain management. The ability to manage complex logistical operations and lead teams has seamlessly translated into my current pursuit of mastering the intricacies of web development.

My mission is to leverage my diverse background to contribute to innovative and impactful projects. I'm excited about the intersection of technology and creativity, and I'm eager to bring my unique perspective and skills to the dynamic field of full-stack web development.

Skills: Javascript, React, Ruby, Ruby on Rails, HTML, CSS, PostgreSQL, Git/Github
Test-Driven Development: Jest, RSPEC, React Testing Library

Let's connect and explore the exciting possibilities at the intersection of technology and creativity! 🚀 #WebDeveloper #PassionateCoder #Innovator #MarineCorpsVeteran
          </div>

          <br/>
          <NavLink to="/aboutus"><button>Previous</button></NavLink>
        </div>
    </div>
  )
}

export default Kevin