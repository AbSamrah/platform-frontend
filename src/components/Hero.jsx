import React from "react";

function Hero() {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <h2 data-aos="fade-up">Focus On What Matters</h2>
            <blockquote data-aos="fade-up" data-aos-delay="100">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis cum recusandae eum laboriosam voluptatem
                repudiandae odio, vel exercitationem officiis provident minima.
              </p>
            </blockquote>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="#about" className="btn-get-started">
                Get Started
              </a>
              <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox btn-watch-video d-flex align-items-center">
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
