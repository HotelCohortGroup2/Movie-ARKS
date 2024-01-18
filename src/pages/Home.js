import React from "react";
import Movieslider from "../components/Movieslider";
import "../styling/Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
	const Intro = {
		first: "Welcome To Movie ARKS!",
	};
	return (
		<div className="home-container">
			<h1 className="home-title">
				<Typewriter
					options={{
						strings: [Intro.first],
						autoStart: true,
						loop: true,
						deleteSpeed: 15,
            pauseFor: 9999,
            showCursor: false,
            cursor: ""
					}}
				/>
			</h1>
			<Movieslider />
		</div>
	);
};

export default Home;
