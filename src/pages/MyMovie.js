import MovieCard from "../components/MovieCard";

const MyMovie = ({ movies, currentUser }) => {
	console.log("movies: ", movies);
	console.log("user: ", currentUser);

	const myMovies = movies?.filter((movie) => currentUser.id === movie.user_id);
	console.log("mymovies: ", myMovies);
	return (
		<div className="cards-index">
			{myMovies?.map((movie, index) => {
				return <MovieCard movie={movie} index={index} />;
			})}
		</div>
	);
};

export default MyMovie;
