import React from "react";
import "../assets/style/MyExperties.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faGithub,
  faSass,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faBug } from "@fortawesome/free-solid-svg-icons";

const MyExperties = () => {
  return (
    <div id="experties">
      <div className="container-fluid padding">
        <div className="row welcome text-center">
        <hr />
          <div className="col-12">
            <h1 className="display-4">My Expertise</h1>
          </div>
          <hr />
          <div className="col-12">
            <p className="lead">
              Welcome to my Bootstrap 4 webiste tutorial! Bootstrap is a free
              and open-source front-end library with HTML and CSS based designs.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon size="2x" color="#61DBFB" icon={faReact} />
            <h3>ReactJS</h3>
            <p>
              Use React.js create interactive UIs and I love building
              applications in React.
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon size="2x" color="#E44D26" icon={faHtml5} />
            <h3>HTML5</h3>
            <p>Bringing the latest in HTML to build the web of the future.</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon size="2x" color="#E44D26" icon={faCss3} />
            <h3>Sass | CSS3 | Bootstrap</h3>
            <p>
              When things need to look good I get creative with Sass, CSS3 and
              Bootstrap.
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon size="2x" color="#3C873A" icon={faNode} />
            <h3>Node.JS | Express.JS</h3>
            <p>
              With the power of Node.JS + I lay the foundation for my back-end
              projects.
            </p>
          </div>
        </div>
        <div className="row text-center padding">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon size="2x" color="black" icon={faDatabase} />
            <h3>MongoDB | PostgreSQL</h3>
            <p>Need a solid database? I can handle data with Mongo or PostgreSQL.</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon size="2x" color="black" icon={faGithub} />
            <h3>Git | GitHub</h3>
            <p>
              Use github to share things on the internet then change them. Make
              things better. Free software? But not as in beer.
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon size="2x" color="red" icon={faBug} />
            <h3>Debugging Code</h3>
            <p>Test for errors or to help determine the cause of an error.</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon size="2x" color="#61DBFB" icon={faReact} />
            <h3>React Native</h3>
            <p>
              Use React Native to build IOS and Android mobile applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperties;
