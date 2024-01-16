import React from "react";
import "../styling/Movie.css";
import MovieCard from "../components/MovieCard";

const Movie = ({ movies }) => {
	return (
		<div className="container-fluid movie-scroll">
			<div className="row">
				{movies?.map((movie, index) => {
					return <MovieCard movie={movie} index={index} />;
				})}
			</div>
		</div>
		// 	<div className="movie-container">
		// 		{movies.map((movie) => (
		// 			<div key={movie.id} className="movie-card">
		// 				<NavLink to={`/movieshow/${movie.id}`}>
		// 					<img
		// 						src={movie.image}
		// 						alt={movie.title}
		// 						className="movie-image"
		// 					/>
		// 					<div className="movie-details">
		// 						<h3>{movie.title}</h3>
		// 						<p>{movie.synopsis}</p>
		// 					</div>
		// 				</NavLink>
		// 			</div>
		// 		))}
		// 	</div>
		// </div>
	);
};

export default Movie;
