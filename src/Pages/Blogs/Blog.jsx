import React from "react";
import "../Comman.css";
import Home from "../Home";
import dots from "../../Images/extra_dot.png";
import extra_dots from "../../Images/bg_dots.png";


const Blogs = () => {
  return (
    <>
    <section className="blogs-section">
      <div className="container position-relative">

        {/* LEFT DOTS */}
        <img src={dots} alt="" className="blogs-dots-left" />

        {/* HEADING */}
        <div className="text-center mb-5">
          <h2 className="blogs-title">Blogs</h2>
          <p className="blogs-subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br />
            Lorem Ipsum has been the industry’s standard.
          </p>
        </div>

        {/* CARDS */}
        <div className="row g-4 justify-content-center">

          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <span className="title">
                How AI is Revolutionizing Document Management for Enterprises
              </span>
              <span className="blog-date">24 July, 2023</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and...
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <span  className="title">
                Top 5 Fraud Prevention Strategies for Financial Institutions
              </span>
              <span className="blog-date">24 July, 2023</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and...
              </p>
            </div>
          </div>
          

          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <span className="title">
                The Future of OCR: From Basic Extraction to AI-Driven Intelligence
              </span>
              <span className="blog-date">24 July, 2023</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and...
              </p>
            </div>
          </div>

        </div>

        {/* NAV BUTTONS */}
        <div className="blogs-nav text-center mt-5">
          <button className="nav-btn_left me-2">←</button>
          <button className="nav-btn_right">→</button>
        </div>

        {/* RIGHT DOTS */}

      </div>

        <img src={extra_dots} alt="" className="blogs-dots-right" />

    </section>
    </>
  );
};

export default Blogs;
