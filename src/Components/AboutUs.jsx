import React from "react";
import resumePdf from "../ShubhamSarpalResume.pdf";

export default function AboutUs() {
  return (
    <>
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      {/* <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img
                            src={AboutMeImage}
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div> */}
                      {/* <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span>{" "}
                            <span>Shubham Sarpal</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>{" "}
                            <span>Full Stack Developer</span>
                          </p>
                          <p>
                            <span className="title-s">Email: </span>{" "}

                            <span>sarpal75@gmail.com</span>
                          </p>
                        </div>
                      </div> */}
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skills</p>
                      <span>HTML</span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>CSS</span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>JAVASCRIPT</span> <span className="pull-right">80%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>BOOTSTRAP</span> <span className="pull-right">80%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>REACT</span>{" "}
                      <span className="pull-right">70%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>C#</span> <span className="pull-right">75%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                       <span>Python</span> <span className="pull-right">70%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>

                      <span>ASP.NET CORE MVC / BLAZOR 6.0</span> <span className="pull-right">70%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>ASP.NET CORE WEB API 6.0/5.0</span> <span className="pull-right">75%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                       <span>AI/LLM/RAG/HuggingFace Embeddings</span> <span className="pull-right">70%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>SQL SERVER 2017/2016/2015</span> <span className="pull-right">80%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>GITHUB / TORTOISE SVN/ GITKRAKEN</span> <span className="pull-right">80%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>IIS 7.0/6.0 , OCTOPUS DEPLOY</span> <span className="pull-right">80%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">
                    I’m Shubham Sarpal, a Senior Full-Stack Engineer based in Austin, TX, with 8+ years of experience building scalable, cloud-native applications. I work across .NET, Blazor, React, and Python (FastAPI), and I’ve also shipped AI/LLM-powered features using ChatGPT and Hugging Face. 
I enjoy turning complex business problems into clean, reliable software — from REST APIs and microservices to modern UI, CI/CD pipelines, and data workflows (SQL Server, Snowflake, PostgreSQL). I care about performance, clean architecture, and shipping products that scale.
                      </p>
                      <p className="lead">Looking for roles where I can combine full-stack engineering with AI-powered search and automation. Let’s connect!</p>
                   <div className="resume-btn-wrap">
  <a
    href={resumePdf}
    download="ShubhamSarpal_Resume.pdf"
    className="resume-btn"
  >
    Download Resume
  </a>
</div>

<div className="scroll-box">
  <div className="scroll-content">
    <p><i className="bi bi-cloud-fill scroll-icon"></i> Cloud-Native</p>
    <p><i className="bi bi-code-slash scroll-icon"></i> Full-Stack</p>
    <p><i className="bi bi-diagram-3-fill scroll-icon"></i> Clean Architecture</p>

    <p><i className="bi bi-grid-1x2-fill scroll-icon"></i> Platform Mindset</p>
    <p><i className="bi bi-cpu-fill scroll-icon"></i> AI-Driven</p>
    <p><i className="bi bi-graph-up-arrow scroll-icon"></i> Built to Scale</p>

    {/* repeat for smooth loop */}
    <p><i className="bi bi-cloud-fill scroll-icon"></i> Cloud-Native</p>
    <p><i className="bi bi-code-slash scroll-icon"></i> Full-Stack</p>
    <p><i className="bi bi-diagram-3-fill scroll-icon"></i> Clean Architecture</p>

    <p><i className="bi bi-grid-1x2-fill scroll-icon"></i> Platform Mindset</p>
    <p><i className="bi bi-cpu-fill scroll-icon"></i> AI-Driven</p>
    <p><i className="bi bi-graph-up-arrow scroll-icon"></i> Built to Scale</p>
  </div>
</div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
