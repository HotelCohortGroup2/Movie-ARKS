import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "reactstrap";

const Movieshow = ({ movies }) => {
  const { id } = useParams();

  let selectedMovie = movies.find((movie) => movie.id === +id);

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
          {/* <h3>{selectedMovie.rating}</h3> */}
          <NavLink to="/movie">
            <Button>Go Back</Button>
          </NavLink>
          <NavLink to={`/review/${selectedMovie.id}`}><Button>Leave a review</Button></NavLink>
        </>
      )}
    </>
  );
};

export default Movieshow;
