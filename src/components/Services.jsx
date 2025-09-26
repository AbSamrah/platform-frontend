import React, { useState, useEffect } from "react";
import apiClient from "../Api"; // Import the api client

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services from the API
    apiClient
      .get("/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the services!", error);
      });
  }, []); // The empty dependency array ensures this runs only once

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Check our valuable services</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              key={service.id}>
              <div className="service-item item-cyan position-relative">
                <div className="icon">
                  <i className="bi bi-briefcase"></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" className="read-more stretched-link">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
