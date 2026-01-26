import React from "react";

export default function Services() {
  const experiences = [
    {
      company: "PATHWARD FINANCIAL SERVICES",
      role: "Senior Software Engineer",
      dates: "Aug 2022 - Present",
      years: "3+ yrs",
      tag: "FinTech",
    },
    {
      company: "LOWER COLORADO RIVER AUTHORITY (LCRA)",
      role: "Software Developer 2",
      dates: "Aug 2021 - Aug 2022",
      years: "1 yr",
      tag: "Utilities",
    },
    {
      company: "ST. JOSEPH INDIAN SCHOOL",
      role: "Software Developer",
      dates: "May 2019 - Jun 2021",
      years: "2+yrs",
      tag: "EdTech",
    },
    {
      company: "HCL (Client: USAA)",
      role: "Technical Analyst & Consultant",
      dates: "Feb 2018 - Apr 2019",
      years: "1+ yrs",
      tag: "Enterprise",
    },
  ];

  return (
    <section id="experiences" className="services-mf route experience-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Experience</h3>
            </div>
          </div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-dot"></div>

              <div className="experience-card">
                <div className="experience-top">
                  <h4 className="experience-company">{exp.company}</h4>

                  <div className="experience-badges">
                    <span className="badge-pill badge-years">{exp.years}</span>
                    <span className="badge-pill badge-tag">{exp.tag}</span>
                  </div>
                </div>

                <div className="experience-meta">
                  <span className="experience-role">{exp.role}</span>
                  <span className="experience-dates">{exp.dates}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="subtitle-a text-center">
  <span className="typewriter-stable">
    Proven delivery across enterprise systems, APIs, UI, and cloud.
  </span>
</p>


      </div>
    </section>
  );
}

