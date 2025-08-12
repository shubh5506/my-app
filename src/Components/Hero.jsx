import React from "react";
import heroImage from "../Images/IMG_1120.jpg";

export default function Hero() {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`, // Use backticks (`) here
  };

  return (
    <>
      <div id="hero" className="hero route ">
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              {/* <p className="display-6 color-d">Hello, world!</p> */}
              <h1 className="hero-title mb-4">I am Shubham Sarpal</h1>
              <p className="hero-subtitle">
                <span
                  className="typed"
                  data-typed-items="Designer, Developer, Freelancer, Photographer"
                ></span>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
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
