import React from "react";
import '../assets/style/Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="container-fluid padding" id="contact">
      <div className="row welcome text-center padding">
      <hr />
        <div className="col-12">
          <h1 className="display-5">Get in Touch</h1>
        </div>
        <hr />
        <div className="col-12 social padding">
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/jiro1">
            <FontAwesomeIcon color="black" icon={faGithub} />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ferat-imrak/">
            <FontAwesomeIcon color= '#2867B2' icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
