import React from "react";
import "../styling/Movie.css";
import MovieCard from "../components/MovieCard";

const Movie = ({ movies }) => {
  return (
    <div className="container-fluid movie-scroll">
      <div className="d-flex align-items-center mt-4 mb-4 overflow-scroll">
        {movies?.map((movie, index) => {
          return <MovieCard movie={movie} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Movie;
