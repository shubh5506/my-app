import React from "react";

export default function Services() {
  return (
<section id="experiences" className="services-mf route">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="title-box text-center">
          <h3 className="title-a">Experience</h3>

          {/* ✅ Use div instead of <p> */}
          <div className="subtitle-a">
            <ul className="experience-description">
              <li>
                <strong>PATHWARD FINANCIAL SERVICES</strong> |
                Senior Software Engineer |
                <strong> August 2022 - Present</strong>
              </li>
              <li>
                <strong>
                  LOWER COLORADO RIVER AUTHORITY (LCRA) (NON-PROFIT ORGANIZATION)
                </strong>{" "}
                | Software Developer 2 |
                <strong> August 2021 - August 2022</strong>
              </li>
              <li>
                <strong>
                  ST. JOSEPH INDIAN SCHOOL (NON-PROFIT ORGANIZATION)
                </strong>{" "}
                | Software Developer |
                <strong> May 2019 - June 2021</strong>
              </li>
              <li>
                <strong>HCL (CLIENT: USAA)</strong> | Technical Analyst and
                Consultant | <strong> February 2018 - April 2019</strong>
              </li>
            </ul>
          </div>

          <div className="line-mf"></div>
        </div>
      </div>
    </div>

      </div>
    </section>
  );
}
