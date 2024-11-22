import React from "react";
import image from "../images/n-front-of-hospital.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Welcome to Our Comprehensive Healthcare Platform!

Experience seamless healthcare services for users and doctors. Sign up or log in to

    Browse and connect with doctors.
    Manage your profile and submit queries.
    Stay updated with notifications.
    Book appointments and track their status.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
