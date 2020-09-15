import React from "react";
import '../assets/style/About.css'
import profilePic from '../assets/images/profile2.png'

const About = () => {
  return (
    <div className="container-fluid padding" id="aboutme">
      <div className="row welcome text-center">
        <div className="col-12">
          <h1 className="display-4">About Me</h1>
        </div>
        <hr />
        <div class="col-lg-6 profile">
          <img src={profilePic} class="img-fluid" alt="profile-pic"/>
        </div>
        <div className="col-lg-6">
          <p className="lead">
            Accomplished Front-End Web Developer with nearly 5 years experience
            building successful single page applications with the modern
            technologies like <b>ReactJS, Redux, JavaScript, HTML, CSS, SCSS</b> etc.
            Proven ability in building smooth User Interface and creating
            <b>RESTful APIs</b> that can deliver <b>JSON</b> or <b>XML</b> content. Proficient in a
            wide range or <b>Building tools, Testing tools</b>, and <b>Version control
            tools</b>. Continuous learner that keeps up on new technologies and
            changes to languages and frameworks like <b>ECMAScirpt(ES6, ES7), React
            16 etc</b>. Detail knowledge of deployment on various web services like
            AWS, Heroku. Experience with <b>AWS S3, EC2 and Lambda.</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
