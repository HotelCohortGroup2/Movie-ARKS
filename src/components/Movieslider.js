import React, { useState } from "react";
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
	{
		src: "https://m.media-amazon.com/images/M/MV5BNWI5ODc4MTAtN2U2NC00ZDk3LWE3NjAtNjIyODE2YTlhYjYwXkEyXkFqcGdeQXVyOTA3ODI3NDA@._V1_.jpg",
		altText: "Scott Pilgrim vs The World",
		caption: "Scott Pilgrim vs The World",
		key: 1,
	},
	{
		src: "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
		altText: "World War Z",
		caption: "World War Z",
		key: 2,
	},
	{
		src: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
		altText: "Avengers End Game",
		caption: "Avengers End Game",
		key: 3,
	},
	{
		src: "https://m.media-amazon.com/images/M/MV5BMjAxNDk2Njk1OV5BMl5BanBnXkFtZTcwOTE5MzIzMQ@@._V1_FMjpg_UX1000_.jpg",
		altText: "GOAL! The Dream Begins",
		caption: "GOAL! The Dream Begins",
		key: 4,
	},
];

const Movieslider = (args) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.src}>
				<img src={item.src} alt={item.altText} className="carousel-image" />
				<CarouselCaption className="Carousel-text" captionText={item.caption} />
			</CarouselItem>
		);
	});

	return (
		<div>
			<h3 className="Movieslider-title">Hot Watches</h3>
			<div>
				<Carousel
					activeIndex={activeIndex}
					next={next}
					previous={previous}
					{...args}>
					<CarouselIndicators
						items={items}
						activeIndex={activeIndex}
						onClickHandler={goToIndex}
					/>
					{slides}
					<CarouselControl
						direction="prev"
						directionText="Previous"
						onClickHandler={previous}
					/>
					<CarouselControl
						direction="next"
						directionText="Next"
						onClickHandler={next}
					/>
				</Carousel>
			</div>
		</div>
	);
}

export default Movieslider;
