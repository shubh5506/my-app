import React from "react";
import counterBgImage from "../Images/counters-bg.jpg";
export default function CounterSection() {
  const counterSectionStyle = {
    backgroundImage: `url(${counterBgImage})`, // Use backticks (`) here
  };
  return (
    <div
      className="section-counter paralax-mf bg-image"
      style={counterSectionStyle}
    >
      <div className="overlay-mf"></div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-sm-4 col-lg-4">
            <div className="counter-box counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <i className="bi bi-check"></i>
                </span>
              </div>
              <div className="counter-num">
                <p
                  data-purecounter-start="0"
                  data-purecounter-end="450"
                  data-purecounter-duration="1"
                  className="counter purecounter"
                ></p>
                <span className="counter-text">11+ PROEJCTS COMPLETED</span>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-lg-4">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <i className="bi bi-journal-richtext"></i>
                </span>
              </div>
              <div className="counter-num">
                <p
                  data-purecounter-start="0"
                  data-purecounter-end="25"
                  data-purecounter-duration="1"
                  className="counter purecounter"
                ></p>
                <span className="counter-text">7+ YEARS OF EXPERIENCE</span>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-lg-4">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <i className="bi bi-people"></i>
                </span>
              </div>
              <div className="counter-num">
                <p
                  data-purecounter-start="0"
                  data-purecounter-end="550"
                  data-purecounter-duration="1"
                  className="counter purecounter"
                ></p>
                <span className="counter-text">11+ TOTAL CLIENTS </span>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <i className="bi bi-award"></i>
                </span>
              </div>
              <div className="counter-num">
                <p
                  data-purecounter-start="0"
                  data-purecounter-end="48"
                  data-purecounter-duration="1"
                  className="counter purecounter"
                ></p>
                <span className="counter-text">Achievements - </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
