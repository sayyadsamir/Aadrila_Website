import React from "react";
import "../Comman.css"
import Location from "../../Images/Location.png";


const Contact = () => {
    return (
        <section className="contact-section">
            {/* TOP WHITE AREA */}
            <div className="container">
                <div className="row">
                    <div className="text-center mb-5 mt-0">

                        <p className="contact-dots"></p>
                        <h2 className="products-title"></h2>
                    </div>
                    {/* LEFT CONTENT */}
                    <div className="col-lg-6 col-md-12 contact-left">
                        <span className="title">Contact Us</span>

                        <p className="contact-desc">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's.
                        </p>

                        <div className="office">
                            <img
                                src={Location}
                                alt="Product"
                                className="img-fluid"
                            />
                            <span>

                                U.S. Office

                            </span>
                            <p>
                                Aadrila Technologies INC,<br />
                                8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901.
                            </p>
                        </div>

                        <div className="office">
                            <img
                                src={Location}
                                alt="Product"
                                className="img-fluid"
                            />
                            <span>

                                India Office
                            </span>
                            <p>
                                Aadrila Technologies Private Limited,<br />
                                Andheri West, Mumbai, Maharashtra 400053.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* BLUE FOOTER (FORM IS INSIDE THIS) */}
            <div className="contact-footer">
                <div className="container position-relative">
                    {/* FORM CARD */}
                    <div className="contact-form-card">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <input className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="col-md-6">
                                <input className="form-control" placeholder="Email" />
                            </div>

                            <div className="col-md-6">
                                <input className="form-control" placeholder="Phone Number" />
                            </div>
                            <div className="col-md-6">
                                <input className="form-control" placeholder="Company Name" />
                            </div>

                            <div className="col-12">
                                <input className="form-control" placeholder="Inquiry Type" />
                            </div>

                            <div className="col-12">
                                <textarea className="form-control" rows="6" placeholder="Message"></textarea>
                            </div>

                            <div className="col-12">
                                <button className="btn w-100 rounded-pill py-2 Inquiry">
                                    Send Inquiry
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* FOOTER TEXT */}
                    <div className="footer-text mt-5">
                        <p>© 2025 by Aadrila Technologies Private Limited CIN U74999UP2017PTC094688</p>
                        <p>
                            Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow,<br />
                            Uttar Pradesh, India, 226024
                        </p>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Contact;
