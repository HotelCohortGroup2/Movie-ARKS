import React from "react";
import Navbar from "../components/Navbar";
import '../styling/Review.css'

// Use step to do integers i.e. 3.2.
//test

const Review = (props) => {
  // const handleClick ()
  return (
    <div>
      <Navbar />
      <h1 className="Review-Title">Review</h1>
      <div className="Review-Form">
        {/* <div className="Review-Form-Title">
          <input type="text" placeholder="Movie title"></input>
        </div> */}
        <div className="Review-Form-Body">
          <input type="number" min="0" max="5" placeholder="Rate 1 - 5"></input>
          <input type="text" placeholder="Write a review"></input>
        </div>
        <div className="Review-Form-Footer">
          <button>Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
