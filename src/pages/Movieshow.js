import React from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import "../styling/Movieshow.css";

const MovieShow = ({ movies, reviews, currentUser, deleteReview }) => {
	const navigate = useNavigate();
	const { id } = useParams();

	let selectedMovie = movies?.find((movie) => movie.id === +id);

	let selectedReviews = reviews?.filter(
		(review) => review.movie_id === selectedMovie.id
	);

	return (
		<div className="movie-show-container">
			{selectedMovie && (
				<>
					<img
						className="img-size"
						alt={`${selectedMovie.name}'s profile`}
						src={selectedMovie.image}
					/>
					<h3 className="movie-info">{selectedMovie.genre}</h3>
					<h3 className="movie-info">{selectedMovie.length}</h3>

					{selectedReviews.map((review, index) => (
						<div key={index} className="review-container">
							<h3 className="review-comment">{review.comment}</h3>
							<p className="review-rating">Rating: {review.rating}</p>
							<div className="button-container">
								<NavLink to={`/reviewedit/${review.id}`}>
									<Button color="primary">Edit</Button>
								</NavLink>
								<Button color="danger" onClick={() => deleteReview(review.id)}>
									Delete Review
								</Button>
							</div>
						</div>
					))}

					<div className="button-container">
						<NavLink to="/movie" className="nav-link">
							<Button color="info">Go Back</Button>
						</NavLink>
						{!currentUser && (
							<NavLink to={`/review/${selectedMovie.id}`}>
								<Button color="success">Leave a review</Button>
							</NavLink>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default MovieShow;
