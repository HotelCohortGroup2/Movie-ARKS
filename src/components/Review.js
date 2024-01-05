import React from "react"
import Navbar from '../components/Navbar'

// Use step to do integers i.e. 3.2. 


const Review = (props) => {

  // const handleClick ()
  return (
    <div>
      <Navbar />
      <div className="Review-title">
        <input type="text" placeholder="Movie title"></input>
      </div>
      <div className="Review-body">
        <input type="number" min="0" max="5" placeholder="-"></input>
        <br />
        <input type="text" placeholder="Write a review"></input>
      </div>
      <div className="Review-footer">
        <button>Submit Review</button>
      </div>
    </div>
  )
}

export default Review

