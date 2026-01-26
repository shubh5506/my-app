import React from "react";
import heroGif from "../Images/g1.png";

export default function Hero() {
  const heroStyle = {
    backgroundImage: `url(${heroGif})`, // Use backticks (`) here
  };

  return (
  <>
    <div id="hero" className="hero route" style={heroStyle}>
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4 hero-animate-title">
              I’m Shubham Sarpal. Full-Stack Engineer building scalable cloud apps
              and AI-powered experiences. I ship end-to-end products — APIs, modern UI,
              CI/CD, and data pipelines
            </h1>

          <p className="pt-3">
          <a
          className="btn btn-primary btn js-scroll px-4 hero-btn-slide"
          href="#about"
          role="button"
           >
           Learn More
          </a>
          </p>
          </div>
        </div>
      </div>
    </div>
  </>
);
}
