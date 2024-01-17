import React from "react"
import { NavLink } from "react-router-dom"
import "../styling/Aboutus.css"

const Ron = (props) => {
  return (
    <div >
        <div className="person-page">
          <h1 className="header-h1"> Ron </h1>

          <img src="https://media.licdn.com/dms/image/D5603AQGnwv_f-sBb2g/profile-displayphoto-shrink_400_400/0/1697236163466?e=1710979200&v=beta&t=SPHo_C17c_XHZBaKDdGQutuOuSv79bQk841r5V_YlHk" alt="profile" className="profile-image"/>

          <p1 className="contact-me">Contact me at...</p1>
    <p2>
    	<div><a href ="https://www.linkedin.com/in/ronmorant/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon>LinkedIn</a></div> 
        <div><a href ="https://github.com/rrmorant" target="_blank"><ion-icon name="logo-github"></ion-icon>GitHub</a></div> 
        <section class="intro"></section>   
    </p2>   

          <div className="information">
          I am Ron Morant, a 20-year Marine Corps Veteran with a diverse military background in leadership, technical proficiency, and planning management and I am transitioning those skills into web development. I have had the pleasure of overseeing some complex maintenance operations and ensuring the highest standards in the military. Now, I am excited to apply my problem-solving and collaboration abilities to coding and web development.

Throughout my tenure in the military, I developed a strong sense of commitment to pursuing excellence and acquired a logical approach to problem-solving. As a part of my duties, I was responsible for managing and leading initiatives to ensure equipment readiness, which further honed my attention to detail and resilience. My constant quest for improvement motivates me to create web solutions that are user-centric and geared towards enhancing the overall user experience.

Capable in HTML5, CSS, JavaScript, and SQL, and exploring frameworks like React.js and Ruby on Rails, I am eager to delve into the world of evolving technologies. I am excited to contribute my organizational skills and growing coding expertise to a collaborative environment, aiming to learn and deliver innovative web solutions that exceed expectations.

I'm enthusiastic about applying my technical background and coding skills to web development. Let's connect and explore how my attention to detail, combined with my growing developer skills, can add value to your projects. Don't hesitate to reach out—I'm here to drive success and bring innovation to the table!

Skills:
Communication, Data Analysis, Organized, Project Management, Adaptability, Flexibility, Problem Solving, Training and Mentoring, Resource Management, System Administrator, Collaboration
          </div>

          <br/>
          <NavLink to="/aboutus"><button>Previous</button></NavLink>
        </div>
    </div>
  )
}

export default Ron