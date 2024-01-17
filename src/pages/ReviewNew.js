import Navbar from "../components/Header";
import "../styling/Review.css";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

// Use step to do integers i.e. 3.2.
//test

const ReviewNew = ({ createReview, currentUser }) => {
	const navigate = useNavigate();
	const { movieID } = useParams();
	const [newReview, setNewReview] = useState({
		rating: "",
		user_id: currentUser.id,
		movie_id: movieID,
		comment: "",
	});

	const handleChange = (e) => {
		setNewReview({ ...newReview, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		createReview(newReview, movieID);
		navigate(`/movieshow/${movieID}`);
	};

	return (
		<div>
			<Form>
				<FormGroup>
					<Label for="rating">Rating</Label>
					<Input
						id="rating"
						name="rating"
						type="number"
						min="1"
						max="5"
						placeholder="Rate the movie from 1-5"
						onChange={handleChange}
						value={newReview.rating}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="comment">Comment</Label>
					<Input
						id="comment"
						name="comment"
						type="text"
						placeholder="Write a review"
						onChange={handleChange}
						value={newReview.comment}
					/>
				</FormGroup>
				<Button onClick={handleSubmit}>Submit</Button>
			</Form>
		</div>
	);
};

export default ReviewNew;
