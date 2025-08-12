import React, { useRef } from "react";


export default function ContactSection() {
  const formRef = useRef();


  return (
    <section
      id="contact"
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{
        backgroundImage: "url(assets/img/overlay-bg.jpg)",
      }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead"></p>
                      <ul className="list-ico">
                        <li>
                          <span className="bi bi-geo-alt"></span>
                          Austin, Texas
                        </li>
                        <li>
                          <span className="bi bi-phone"></span> (210) 975-2286
                        </li>
                        <li>
                          <span className="bi bi-envelope"></span>{" "}
                          sarpal75@gmail.com
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="https://www.linkedin.com/in/shubham-s-342282134">
                            <span className="ico-circle">
                              <i className="bi bi-linkedin"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
