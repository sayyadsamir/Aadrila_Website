import React from "react";
import "./Comman.css";
// import Hero from '.Hero.jpg'
import heroImg from "../Images/Hero.png";
// import Bacground_slider from '../Images/Bacground_slider.jpg'
const Home = () => {
  return (
    <>
      <section
        className="hero-main"
        // style={{ backgroundImage: `url(${Bacground_slider})` }}
      >
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-container">

                <div className="hero-left">
                  <h2 className="hero-title">
                    <span className="hero-highlight">AI-Powered</span>
                    <br />
                    Document Automation
                    <br />& Fraud Detection
                  </h2>

                  <p className="hero-desc">
                    Enhance security, accuracy, and efficiency with our
                    cutting-edge AI solutions for seamless document
                    processing and fraud prevention.
                  </p>

                  <div className="hero-actions">
                    <button className="hero-btn primary">Get a Demo</button>
                    <button className="hero-btn primary">
                      Explore Solutions
                    </button>
                  </div>
                  
                </div>


              </div>
            </div>
            <div className="col-md-6">
              {/* RIGHT IMAGE */}
              <div className="hero-right">
                <img
                  src={heroImg}
                  alt="AI Document Automation"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Home;
