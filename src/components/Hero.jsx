import React from "react";
// Icons
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFaceBook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
// Styles
import "./HeroStyles.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="content">
            <div className="col-1">
              <h1>Data to enrich your</h1>
              <h1>
                <span className="primary-color">online business</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae aperiam quo provident eaque! Exercitationem
                obcaecati distinctio placeat tempora voluptatum odio dicta,
                consectetur ab. Sed accusamus suscipit facilis illo corrupti id!
              </p>
              <div className="used-by">
                <p>USED BY</p>
                <div className="icons">
                  <i>
                    <FaDatabase />
                    Staxx
                  </i>
                  <i>
                    <FaAsterisk />
                    Star AI
                  </i>
                  <i>
                    <FaAccusoft />
                    Accusoft
                  </i>
                </div>
              </div>
            </div>
            <div className="col-2">
                <div className="form-layout">
                    <div className="form-container">
                        <p className="sign-in-text">Sign in with</p>
                        <div>
                            <i><FaFaceBook size={20}/></i>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
