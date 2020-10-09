import React from "react";
import '../assets/style/About.css'
import profilePic from '../assets/images/profile2.png'

const About = () => {
  return (
    <div className="container-fluid padding" id="aboutme">
      <div className="row welcome text-center">
        <div className="col-12">
          <h1 className="display-5 mt-4">About Me</h1>
        </div>
        <hr />
        <div class="col-lg-6 profile">
          <img src={profilePic} class="img-fluid" alt="profile-pic"/>
        </div>
        <div className="col-lg-6">
          <p className="lead">
          Accomplished Front-End Web Developer with nearly 5 years of experience building successful single-page applications with modern technologies like ReactJS, Redux, JavaScript, HTML, CSS, SCSS, etc.
            Proven ability in building smooth User Interface and creating
            RESTful APIs that can deliver JSON or XML content. Proficient in a
            wide range of Building Tools, Testing Tools, and Version control tools. A continuous learner that keeps up on new technologies and
            changes to languages and frameworks like ECMAScript(ES6, ES7), React
            16 etc. Detail knowledge of deployment on various web services like
            AWS, Heroku. Experience with AWS S3, EC2, and Lambda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
