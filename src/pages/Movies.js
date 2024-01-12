import React from "react";
import Navbar from "../components/Header";
import Mockdata from "../Mockdata";
import "../styling/Movie.css";
import { createRoutesFromElements } from "react-router-dom";
import { NavLink, useParams } from "react-router-dom";

const Movie = ({ movies }) => {
  return (
    <div>
      <Navbar />

      <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <NavLink to={`/movieshow/${movie.id}`}>
              <img
                src={movie.image}
                alt={movie.title}
                className="movie-image"
              />
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>{movie.synopsis}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
