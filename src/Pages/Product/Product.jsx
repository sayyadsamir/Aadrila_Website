import React from "react";
import "../Comman.css";
import Home from "../Home";
import productImg from "../../Images/Product_img.jpg";
import SecondImg from "../../Images/sec_product.jpg";
import ThirdImg from "../../Images/third.jpg";
import Contact from "../Contacts/Contact";

const Products = () => {
  return (
    <>

      <section className="products-section">
        <div className="container">

          {/* TOP HEADING */}
          <div className="text-center mb-5 mt-0">

            <p className="products-subtitle">features and benefits.</p>
            <h2 className="products-title">Our Products</h2>
          </div>

          {/* CONTENT */}
          <div className="row ">

            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <span className="product-badge">DocSim</span>

              <h3 className="product-heading">
                AI-Powered Document Similarity <br /> Engine
              </h3>

              <div className="product-text">
                <h6 className="heading">Features:</h6>
                <ul>
                  <li>Detects near-duplicates and tampered documents.</li>
                  <li>Identifies fraudulent patterns across large repositories.</li>
                  <li>Multi-language support for global adaptability.</li>
                </ul>

                <h6 className="heading">Benefits:</h6>
                <ul>
                  <li>Save 30% time on manual checks.</li>
                  <li>Reduce document fraud by up to 40%.</li>
                </ul>
              </div>

              <div className="product_btn">
                <button className="learn_btn1 primary">Learn More</button>
                <button className="explore_btn1 primary">
                  Shedule a Demo
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 col-md-12 text-center position-relative">
              <div className="product-bg-circle"></div>

              <img
                src={productImg}
                alt="Product"
                className="product-image img-fluid"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="products-section2">

        <div className="container">

          {/* CONTENT */}
          <div className="row align-items-center">

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 col-md-12 text-center position-relative">
              <div className="product-bg-circle_left"></div>

              <img
                src={SecondImg}
                alt="Product"
                className="product-image2 img-fluid"
              />
            </div>

            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-12 mb-lg-0">

              <div className="text-center">

                <p className="products-subtitle1"></p>
                <h2 className="products-title"></h2>
              </div>
              <span className="product-badge">DocPilot</span>

              <h3 className="product-heading">
                AI-Powered Document Similarity <br /> Engine
              </h3>

              <div className="product-text">
                <h6 className="heading">Features:</h6>
                <ul>
                  <li>
                    Automates document collection, routing, and task assignments.
                  </li>
                  <li> Real-time tracking with advanced dashboards.</li>
                  <li>Seamless integration with enterprise systems via APIs.</li>
                </ul>

                <h6 className="heading">Benefits:</h6>
                <ul>
                  <li>Reduce turnaround times by 50%.</li>
                  <li>Improve operational efficiency with minimal manual effort.</li>
                </ul>
              </div>

              <div className="product_btn">
                <button className="learn_btn1 primary">Learn More</button>
                <button className="explore_btn1 primary">
                  Shedule a Demo
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3rd Section  */}

      <section className="products-section3 mt-5">
        <div className="container">

          {/* CONTENT */}
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-12 mb-lg-0">

              {/* TOP HEADING */}

              <div className="text-center">

                <p className="products-subtitle2"></p>
                <h2 className="products-title"></h2>
              </div>

              <span className="product-badge">D o x t r a c t</span>

              <h3 className="product-heading">
                Extract, Validate, and Process Documents with Ease
              </h3>

              <div className="product-text">
                <h6 className="heading">Features:</h6>
                <ul>
                  <li>OCR and NLP-based data extraction.</li>
                  <li>Handles unstructured documents across industries.</li>
                  <li>Validates fields using external data sources.</li>
                </ul>

                <h6 className="heading">Benefits:</h6>
                <ul>
                  <li>Process 10,000+ documents in minutes.</li>
                  <li>Achieve 99% data accuracy with AI-driven validation.</li>
                </ul>
              </div>

              <div className="product_btn">
                <button className="learn_btn1 primary">Learn More</button>
                <button className="explore_btn1 primary">
                  Shedule a Demo
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 col-md-12 text-center position-relative">
              <div className="product-bg-circle"></div>

              <img
                src={ThirdImg
                  
                }
                alt="Product"
                className="product-image img-fluid"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
