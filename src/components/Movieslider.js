import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
    src: "https://live.staticflickr.com/6023/5935427637_be38b7685a_b.jpg",
    altText: "Scott Pilgrim vs The World",
    caption: "Scott Pilgrim vs The World",
    key: 1,
  },
  {
    src: "https://www.psu.com/wp/wp-content/uploads/2019/04/world-war-z-768x432.jpg",
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
];

function Movieslider(args) {
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
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-image" />
        <CarouselCaption className="Carousel-text" captionText={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
        <div className="Movieslider-title">
            <h3>Hot Watches</h3>
        </div>
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
        >
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