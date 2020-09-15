import React from "react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import expense from "../assets/images/expense.png";

const Projects = () => {
  return (
    <div id="projects">
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <hr />
          <div className="col-12">
            <h1 className="display-4">Projects</h1>
          </div>
          <hr />
        </div>
      </div>
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src={project1} alt="project-1" />
              <div className="card-body">
                <h4 className="card-title">ROBOFRIENDS</h4>
                <p>
                  John is an Internet entrepreneur with almost 20 years of
                  experience.
                </p>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://jiro1.github.io/robofriends/"
                  className="btn btn-outline-secondary"
                >
                  Demo
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/jiro1/robofriends"
                  className="btn btn-outline-secondary ml-3"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src={project2} alt="project-2" />
              <div className="card-body">
                <h4 className="card-title">Covid-19 Charter</h4>
                <p>
                  Mary is an Internet entrepreneur with almost 20 years of
                  experience.
                </p>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://covid-chart2020.herokuapp.com/"
                  className="btn btn-outline-secondary"
                >
                  Demo
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/jiro1/covid-chart"
                  className="btn btn-outline-secondary ml-3"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src={expense} alt="expense-pic" />
              <div className="card-body">
                <h4 className="card-title">Expense Tracker</h4>
                <p>
                  Phil is an Internet entrepreneur with almost 20 years of
                  experience.
                </p>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/jiro1/covid-chart"
                  className="btn btn-outline-secondary"
                >
                  Demo
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/jiro1/expense-tracker"
                  className="btn btn-outline-secondary ml-3"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
