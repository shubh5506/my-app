import React from "react";
import emailjs from 'emailjs-com';

export default function ContactSection() {

  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
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
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message Us</h5>
                    </div>
                    <div>
                      <form id="contact-form"
                        role="form"
                        className="php-email-form"
                      >
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="user_name"
                                className="form-control"
                                id="name"
                                placeholder="Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="user_email"
                                id="email"
                                placeholder="Email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="phone"
                                className="form-control"
                                name="contact_number"
                                id="contact_number"
                                placeholder="Contact No."
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="contact_subject"
                                id="subject"
                                placeholder="Subject"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 text-center my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">
                              Your message has been sent. Thank you!
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                          <input type="submit" value="Send" className="button button-a button-big button-rouded" />
                            {/* <button
                              type="submit"
                              
                            >
                              Send Message
                            </button> */}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span className="bi bi-geo-alt"></span> 
                          Austin,Texas
                        </li>
                        <li>
                          <span className="bi bi-phone"></span> (617) 557-0089
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
