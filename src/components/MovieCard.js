import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../styling/MovieCard.css";

const MovieCard = ({ movie, index }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }

    if (halfStar) {
      stars.push(<span key="half" className="star">&#9733;&#189;</span>);
    }

    return stars;
  };

  return (
    <NavLink to={`/movieshow/${movie.id}`} className="nav-link">
      <Card style={{ width: "18rem" }} className="movie-card">
        <CardImg top width="100%" src={movie.image} alt={movie.name} />
        <CardBody>
          <CardTitle tag="h5" className="mb-2">{movie.name}</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
            Release Date: {movie.releaseDate}
          </CardSubtitle> */}
          <CardSubtitle tag="h6" className="mb-2 text-muted card-font">
            Genre: {movie.genre}
          </CardSubtitle>
          <CardSubtitle className="mb-2 card-font">
            Rating: {renderStars(movie.rating)}
          </CardSubtitle>
        </CardBody>
      </Card>
    </NavLink>
  );
};

export default MovieCard;
