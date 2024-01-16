import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "reactstrap";

const MovieShow = ({ movies, reviews }) => {
  const { id } = useParams();

  let selectedMovie = movies?.find((movie) => movie.id === +id);

  // hey create a funciton that finds all reviews that correlate to the corresponding movie.id
  // i.e. all reviews that have a movie_id of 2. take those and store them in this variable
  let selectedReviews = reviews?.filter((review) => review.movie_id === selectedMovie.id);




  return (
    <>
      {selectedMovie && (
        <>
          <img
            alt={`${selectedMovie.name}'s profile`}
            src={selectedMovie.image}
          />
          <h3>{selectedMovie.genre}</h3>
          <h3>{selectedMovie.length}</h3>

          {selectedReviews.map((value, index) => {
			return <h3>{value.comment}</h3> 
		  })}

          <NavLink to="/movie" className="nav-link">
            <Button>Go Back</Button>
          </NavLink>
          <NavLink to={`/review/${selectedMovie.id}`}>
            <Button>Leave a review</Button>
          </NavLink>
        </>
      )}
    </>
  );
};

export default MovieShow;
