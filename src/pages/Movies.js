import React from "react";
import Navbar from "../components/Header";
import Mockdata from "../components/Mockdata";
import "../styling/Movie.css"; 

const Movie = () => {
  return (
    <div>
      <Navbar />
      <div className="movie-container">
        {Mockdata.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>{movie.synopsis}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;