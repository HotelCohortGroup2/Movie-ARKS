import React from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const MovieShow = ({ movies, reviews, currentUser, deleteReview }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  let selectedMovie = movies?.find((movie) => movie.id === +id);

  let selectedReviews = reviews?.filter(
    (review) => review.movie_id === selectedMovie.id
  );




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

          {selectedReviews.map((review, index) => (
            <div key={index}>
              <h3>{review.comment}</h3>
              <h3>{review.rating}</h3>
              <NavLink to={`/reviewedit/${review.id}`}>
                <Button>Edit</Button>
              </NavLink>
              <NavLink to={`/movieshow/${id}`}>
                <Button onClick={() => deleteReview(review.id)}>
                  Delete Review
                </Button>
              </NavLink>
            </div>
          ))}

          <NavLink to="/movie" className="nav-link">
            <Button>Go Back</Button>
          </NavLink>
          {!currentUser && (
            <NavLink to={`/review/${selectedMovie.id}`}>
              <Button>Leave a review</Button>
            </NavLink>
          )}
        </>
      )}
    </>
  );
};

export default MovieShow;
