import React from "react";
import "../assets/style/CoverImg.css";
import backgroundImg from "../assets/images/back.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ImageSlider = () => {
  return (
    <div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={backgroundImg} alt="cover-img" />
          <div className="carousel-caption">
            <h1 className="display-2">Ferat Imrak</h1>
            <h3>Front-End Web Developer</h3>
            <h5>
              <i>
                Effective at combining creativity and problem solving to develop
                user-friendly applications.
              </i>
            </h5>
            <a
              href="https://github.com/jiro1/resume/blob/master/Ferat%20Imrak's%20Resume.docx?raw=true"
              download
            >
              <button type="button" className="btn btn-outline-light btn-lg">
                <FontAwesomeIcon
                  className="down-icon"
                  size="1x"
                  icon={faDownload}
                />
                RESUME
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
