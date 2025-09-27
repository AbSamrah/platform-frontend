import React from "react";

function Hero() {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="info d-flex align-items-center">
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100">
            <div className="col-lg-8 text-center">
              <h2>Building Trust, Driving Growth</h2>
              <p>
                Present your business with confidence using a clean, flexible,
                and fully responsive template that helps you connect with
                clients, attract opportunities, and strengthen your brand
                identity.
              </p>
              <a />
            </div>
          </div>
        </div>
      </div>
      <div
        id="hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000">
        <div className="carousel-item">
          <img src="/assets/img/slider/slider-16.webp" alt="" />
        </div>
        <div className="carousel-item">
          <img src="/assets/img/slider/slider-13.webp" alt="" />
        </div>
        <div className="carousel-item active">
          <img src="/assets/img/slider/slider-14.webp" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
