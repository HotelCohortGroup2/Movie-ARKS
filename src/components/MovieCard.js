import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../styling/MovieCard.css"

const MovieCard = ({ movie, index }) => {
	return (
		<Card
			color="light"
			style={{ width: "18rem" }}
			key={index}
			className="d-flex justify-content-start m-3">
			<img alt="movie information" src={movie.image} />
			<CardBody>
				<CardTitle tag="h4">{movie.name}</CardTitle>
				<NavLink to={`/movieshow/${movie.id}`} className="nav-link">
					Details
				</NavLink>
			</CardBody>
		</Card>
	);
};

export default MovieCard;