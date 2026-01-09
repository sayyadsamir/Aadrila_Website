import React from "react";
// import "./Industries.css";
import "../Comman.css";
import LendingIcon from "../../Images/Lending_Icon.jpg";
import Healthcare_icon from "../../Images/Healthcare_Icon.jpg"
import Insurance_icon from "../../Images/Insurance_Icon.jpg"
import extra_dot from "../../Images/extra_dot.png"



const Industries = () => {
    return (
        <section className="industries-section">
            <div className="industries-container">

                {/* LEFT CONTENT */}
                <div className="industries-left">
                    <span className="industries-subtitle">
                        AI-driven innovation for growth.
                    </span>

                    <h2 className="industries-title">
                        Industries We Empower
                    </h2>
                </div>

                {/* CARDS */}
                <div className="industries-cards">

                    <div className="industry-card insurance">
                        <div className="industry-icon">
                            {/* <img src="" alt="" /> */}
                            <img src={Insurance_icon} alt="Hero" />
                        </div>
                        <h4>Insurance</h4>
                        <p>
                            Automate claims processing with accurate document validation.
                        </p>
                    </div>

                    <div className="industry-card lending">
                        <div className="industry-icon">
                            <img src={LendingIcon} alt="Hero" />
                        </div>
                        <h4>Lending</h4>
                        <p>
                            Ensure faster loan approvals with fraud detection and instant verification.
                        </p>
                    </div>


                    <div className="healthcare-wrapper">
                        <div className="industry-card healthcare">
                            <div className="industry-icon">
                                <img src={Healthcare_icon} alt="Healthcare" />
                            </div>

                            <h4>Healthcare</h4>
                            <p>
                                Streamline patient record management and ensure compliance with HIPAA standards.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Industries;
