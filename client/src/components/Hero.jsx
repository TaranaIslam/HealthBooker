import React from "react";
import image from "../images/9432548.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
        At the heart of our mission lies a deep commitment to your well-being. We believe that health is the foundation of a happy and fulfilling life. Our platform is designed to provide seamless access to healthcare services, empowering users and doctors alike to connect, collaborate, and care effortlessly. With advanced technology, secure systems, and a user-friendly interface, we are dedicated to making healthcare simple, efficient, and reliable. Because your health isn’t just a priority – it’s our responsibility.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
