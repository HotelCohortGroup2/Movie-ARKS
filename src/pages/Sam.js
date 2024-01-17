import React from "react"
import { NavLink } from "react-router-dom"
import "../styling/Aboutus.css"

const Sam = (props) => {
  return (
    <div >
        <div className="person-page">
          <h1 className="header-h1"> Sam </h1>

          <img src="https://media.licdn.com/dms/image/D4E35AQGgdL_md6KOLQ/profile-framedphoto-shrink_400_400/0/1705143298683?e=1706126400&v=beta&t=XLD5vV9_engKXb5_yTdQhMTD9RSZ080oBAbQt1yezn4" alt="profile" className="profile-image"/>

          <p1 className="contact-me">Contact me at...</p1>
    <p2>
    	<div><a href ="https://www.linkedin.com/in/slabrutte/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon>LinkedIn</a></div> 
        <div><a href ="https://github.com/SLaBrutte" target="_blank"><ion-icon name="logo-github"></ion-icon>GitHub</a></div> 
        <section class="intro"></section>   
    </p2>   

          <div className="information">
          Hello! I'm Samuel LaBrutte, a dedicated military veteran with a background in Civil Engineering. Throughout my military career, I have honed valuable skills such as: problem-solving, team building, and communication. I'm excited to transition into web development and expand these skills in a new field.

In the world of web development, I am eager to challenge myself to solve problems creatively and efficiently. I believe in continuous learning and look forward to gaining insights from both peers and mentors, discovering innovative ways to tackle any challenge that comes my way.

My experience has instilled in me a strong foundation for approaching complex issues, and I am confident that these skills will translate seamlessly into the dynamic field of web development. I am open to collaborations and ready to contribute my unique perspective to any team.

Let's connect and explore opportunities together!
          </div>

          <br/>
          <NavLink to="/aboutus"><button>Previous</button></NavLink>
        </div>
    </div>
  )
}

export default Sam