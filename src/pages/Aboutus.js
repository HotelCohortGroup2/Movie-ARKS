import React from "react";
import Navbar from "../components/Header";
import "../App.css";
import { Link } from "react-router-dom";
import "../styling/Aboutus.css";

const Aboutus = (props) => {
  return (
    <div className="header">
      <Navbar />
      <h1>About us</h1>
      <div className="container">
        <div>
          <div className="About">Picture will go here</div>
          <div>
            <Link to="/adrian"> Adrian</Link>
          </div>
        </div>

        <div>
          <div className="About">Picture will go here</div>
          <div>
            <Link to="/ron"> Ron</Link>
          </div>
        </div>


        <div>
          <div className="About">Picture will go here</div>
          <div>
            <Link to="/kevin"> Kevin</Link>
          </div>
        </div>


        <div>
          <div className="About">Picture will go here</div>
          <div>
            <Link to="/sam"> Sam</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Aboutus;