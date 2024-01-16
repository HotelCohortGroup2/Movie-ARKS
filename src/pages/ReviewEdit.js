import Navbar from "../components/Header";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const ReviewEdit = ({ reviews, updateReview }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	let currentReview = reviews?.find((review) => review.id === +id);

	const [editReview, setEditReview] = useState({
		rating: currentReview?.rating,
		user_id: currentReview?.user_id,
		movie_id: currentReview?.movie_id,
		comment: currentReview?.comment,
	});
	const handleChange = (e) => {
		setEditReview({ ...editReview, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		updateReview(editReview, currentReview.id);
		navigate(`/movieshow/${id}`);
	};
	return (
		<div>
			<Navbar />
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
						value={editReview.rating}
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
						value={editReview.comment}
					/>
				</FormGroup>
				<Button onClick={handleSubmit}>Submit</Button>
			</Form>
		</div>
	);
};

export default ReviewEdit;
