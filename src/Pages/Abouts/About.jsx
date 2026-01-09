import React from "react";
import "../Comman.css";

import bg from "../../Images/bg_about.svg";
import vision from "../../Images/Vision_logo.png";

import meet1 from "../../Images/meet_1.jpg";
import meet2 from "../../Images/meet_2.jpg";
import meet3 from "../../Images/meet_3.jpg";
import Contact from "../Contacts/Contact";

const About = () => {
    return (
        <>
            <section
                className="about-section"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="about-card">
                    <span>About Us</span>
                    <p>Meet the Minds Shaping Document Automation.</p>
                </div>

                <div className="about-strip1">
                    <p className="strip-text1 left">
                        To redefine document management with cutting-edge technology that
                        ensures accuracy, efficiency, and trust.
                    </p>

                    <div className="strip-center">
                        <span className="strip-label">
                            <span className="line"></span>
                            Our<br />Vision
                        </span>

                        <div className="strip-icon">
                            <img src={vision} alt="Vision" />
                        </div>
                    </div>
                </div>

                {/* MISSION */}
                <div className="about-strip2">
                    <div className="strip-center">
                        <div className="strip-icon">
                            <img src={vision} alt="Mission" />
                        </div>

                        <span className="strip-label">
                            Our<br />Mission
                            <span className="line right"></span>
                        </span>
                    </div>

                    <p className="strip-text2 right">
                        To redefine document management with cutting-edge technology that
                        ensures accuracy, efficiency, and trust.
                    </p>
                </div>
            </section>

            {/* Meet Section  */}

            <section className="team-section">
                <div className="team-container">

                    <h2 className="team-title">Meet our team</h2>

                    <p className="team-subtitle">
                        Meet our passionate and talented team, committed to delivering exceptional
                        results, driving innovation, and transforming your vision into reality.
                    </p>

                    <div className="blogs-nav text-center mt-5 mb-5">
                        <button className="nav-btn_left me-2" style={{color:'white'}}>←</button>
                        <button className="nav-btn_right">→</button>
                    </div>

                    <div className="text-center">

                        <p className="products-subtitle3"></p>
                        <h2 className="products-title"></h2>
                    </div>

                    <div className="product-bg-circle_meet"></div>

                    <div className="team-avatars">

                        <img src={meet3} className="avatar small" />

                        <img src={meet1} className="avatar active" alt="Team member" />

                        <img src={meet2} className="avatar small" />
                    </div>

                    <div className="team-card">
                        <div className="card-pointer"></div>

                        <h3 >MANSI SHUKLA</h3>
                        <span>CEO FutureSphere</span>

                        <p>
                            For this time-constrained generation in a NOW economy, we would want to
                            play our parts. We intend to make Banking not feel out of place.
                        </p>
                    </div>

                </div>
            </section>

      <Contact/>

        </>
    );
};

export default About;
