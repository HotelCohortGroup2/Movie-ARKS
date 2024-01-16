import React, { useState, useEffect } from "react";
import Mockdata from "./Mockdata";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import MovieShow from "./pages/Movieshow";
import NotFound from "./pages/Notfound";
import Home from "./pages/Home";
import ReviewNew from "./pages/ReviewNew";
import ReviewEdit from "./pages/ReviewEdit";
import Adrian from "./pages/Adrian";
import Ron from "./pages/Ron";
import Kevin from "./pages/Kevin";
import Sam from "./pages/Sam";
import mockUsers from "./Mockuser";
import mockData from "./Mockdata";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
	const [movies, setMovies] = useState([]);
	const [currentUser, setCurrentUser] = useState(mockUsers[0]);
	const [currentMovie, setCurrentMovie] = useState({});
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		const loggedInUser = localStorage.getItem("user");
		if (loggedInUser) {
			setCurrentUser(JSON.parse(loggedInUser));
		}
		readMovies()
		readReviews()
	}, []);

	const url = "http://localhost:3000/";
	const readMovies = () => {
		fetch(`${url}movies`)
			.then((response) => response.json())
			.then((payload) => {
				setMovies(payload);
			})
			.catch((error) => console.log(error));
	};



	const readReviews = () => {
		fetch(`${url}reviews`)
			.then((response) => response.json())
			.then((payload) => {
				setReviews(payload);
			})
			.catch((error) => console.log("Review read errors: ", error));
	};

	const createReview = (createdReview, movieID) => {
		// console.log(createdReview);
		fetch(`${url}reviews`, {
			body: JSON.stringify(createdReview),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		})
			.then((response) => response.json())
			.then(() => readReviews())
			.catch((error) => console.log(error));
	};

	const updateReview = (selectedReview, id) => {
		fetch(`${url}reviews/${id}`, {
			body: JSON.stringify(selectedReview),
			headers: {
				"Content-Type": "application/json",
			},
			method: "PATCH",
		})
			.then((response) => response.json())
			.then(() => readReviews())
			.catch((error) => console.log("Update review errors:", error));
	};

	const deleteReview = (id) => {
		fetch(`${url}reviews/${id}`, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "DELETE",
		})
			.then((response) => response.json())
			.then(() => readReviews())
			.catch((errors) => console.log("delete errors:", errors));
	};

	const login = (userInfo) => {
		fetch(`${url}login`, {
			body: JSON.stringify(userInfo),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			method: "POST",
		})
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				localStorage.setItem("token", response.headers.get("Authorization"));
				return response.json();
			})
			.then((payload) => {
				localStorage.setItem("user", JSON.stringify(payload));
				setCurrentUser(payload);
			})
			.catch((error) => console.log("login errors: ", error));
	};

	const signup = (userInfo) => {
		fetch(`${url}signup`, {
			body: JSON.stringify(userInfo),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			method: "POST",
		})
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				localStorage.setItem("token", response.headers.get("Authorization"));
				return response.json();
			})
			.then((payload) => {
				localStorage.setItem("user", JSON.stringify(payload));
				setCurrentUser(payload);
			})
			.catch((error) => console.log("login errors: ", error));
	};

	const logout = () => {
		fetch(`${url}logout`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("token"),
			},
			method: "DELETE",
		})
			.then((payload) => {
				localStorage.removeItem("token");
				localStorage.removeItem("user");
				setCurrentUser(null);
			})
			.catch((error) => console.log("log out errors: ", error));
	};

	return (
		<>
			<Header currentUser={currentUser} logout={logout} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup signup={signup} />} />
				<Route path="/movie" element={<Movie movies={movies} />} />
				<Route path="/login" element={<Login login={login} />} />
				<Route path="/aboutus" element={<Aboutus />} />
				<Route path="/adrian" element={<Adrian />} />
				<Route path="/ron" element={<Ron />} />
				<Route path="/kevin" element={<Kevin />} />
				<Route path="/sam" element={<Sam />} />
				<Route
					path="/movieshow/:id"
					element={<MovieShow reviews={reviews} movies={movies} />}
				/>

				{
					<>
						currentUser && (
						<Route
							path="/mymovies"
							element={<MovieShow movies={movies} currentUser={currentUser} />}
						/>
						<Route
							path="/review/:movieID"
							element={
								<ReviewNew
									currentUser={currentUser}
									createReview={createReview}
								/>
							}
						/>
						<Route
							path="/reviewedit/:id"
							element={
								<ReviewEdit reviews={reviews} updateReview={updateReview} />
							}
						/>
						)
					</>
				}

				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
