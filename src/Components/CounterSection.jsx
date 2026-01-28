import React from "react";
import counterBgImage from "../Images/counters-bg.jpg";
export default function CounterSection() {
  const counterSectionStyle = {
    backgroundImage: `url(${counterBgImage})`, // Use backticks (`) here
  };
   const projects = [
    {
      title: "AI-Powered Portfolio Chatbot (RAG)",
      desc: "Recruiters can ask questions about my resume and projects and get instant, AI-powered answers.",
      tech: ["React", "Python", "FastAPI", "RAG", "Hugging Face", "ChromaDB"],
      links: {
        github: "https://github.com/shubh5506/rag-api",
        live: "https://rag-api-production-bf85.up.railway.app/docs",
      },
      badge: "AI / RAG",
    },
    {
      title: "CRUD API for Shipping Items (Python + FastAPI)",
      desc: "A RESTful API to manage shipping items with full CRUD operations, built using FastAPI.",
      tech: ["Python", "FastAPI", "RestAPI"],
      links: {
        github: "https://github.com/shubh5506/PythonFastAPI",
        live: "https://pythonfastapi-production-5915.up.railway.app/docs"
      },
      badge: "Enterprise",
    },
    {
      title: "Shipment Manager + Duplicate Detection",
      desc: "FastAPI + React app to create and track shipments, automatically flagging duplicate entries in real time.",
      tech: ["Python", "FastAPI", "React", "UI/UX", "Data Validation"],
      links: {
        github: "https://github.com/shubh5506/my-app/blob/main/src/Components/ShipmentForm.jsx",
        live: "/shipments"
      },
     badge: "Full Stack",
    },
  ];
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
                <span className="counter-text">11+ PROJECTS COMPLETED</span>
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
                <span className="counter-text">8+ YEARS OF EXPERIENCE</span>
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
            <section id="projects" className="projects-section">
      <div className="container">
        <div className="title-box text-center">
          <h3 className="counter-num" style={{ color: 'white' }}>Projects</h3>
          <p className="counter-num" style={{ color: 'white' }}>
            Real-world builds across AI, enterprise systems, and cloud platforms.
          </p>
          <div className="line-mf"></div>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-top">
                <span className="project-badge">{p.badge}</span>
                <h4 className="project-title">{p.title}</h4>
                <p className="project-desc">{p.desc}</p>
              </div>

              <div className="project-tech">
                {p.tech.map((t, idx) => (
                  <span className="tech-pill" key={idx}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    GitHub
                  </a>
                )}

                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn primary"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
        </div>
      </div>
      
    </div>
    
    
  );
  
}


