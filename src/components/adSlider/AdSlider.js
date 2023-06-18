import React, { useEffect, useState } from "react"
import "./AdSlider.scss"



const ads = [
  { url: process.env.PUBLIC_URL + "/imgs/ad1.png", title: "Акции", id: "232412" },
  { url: process.env.PUBLIC_URL + "/imgs/ad2.png", title: "Специальные предложения", id: "343255" },
  { url: process.env.PUBLIC_URL + "/imgs/ad3.png", title: "Самое популярное", id: "235456" },
];

const PAGE_WIDTH = 380
const TRANSITION_DURATION = 2000

const AdSlider = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

	useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(currentSlideIndex === ads.length - 1 ? 0 : currentSlideIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlideIndex]);


	const moveDot = (index) => {
		setCurrentSlideIndex(index)
	}

	return (
    <div className="ad-section">
      <div className="title-wrapper">
        <span className="title">{ads[currentSlideIndex].title}</span>
      </div>
      <div className="slider-wrapper">
        <div
          className="slider"
        >
          <div
            className="slides"
            style={{
              transform: `translateX(-${PAGE_WIDTH * currentSlideIndex}px)`,
              transitionDuration: `${TRANSITION_DURATION}ms`,
            }}
          >
            {ads.map((slide) => (
              <img className="slide" src={slide.url} key={slide.id} />
            ))}
          </div>
        </div>
        <div className="dot-container">
          {Array.from({ length: ads.length }).map((item, index) => (
            <div
              className={currentSlideIndex === index ? "dot active" : "dot"}
              onClick={() => moveDot(index)}
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdSlider;
