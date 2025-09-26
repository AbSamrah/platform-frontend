import React, { useState, useEffect } from "react";
import apiClient from "../Api";

function Conferences() {
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    apiClient
      .get("/conferences")
      .then((response) => {
        setConferences(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the conferences!", error);
      });
  }, []);

  return (
    <section id="conferences" className="conferences section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Conferences</h2>
        <p>Join our upcoming conferences</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {conferences.map((conference, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              key={conference.id}>
              <div className="service-item item-red position-relative">
                <div className="icon">
                  <i className="bi bi-calendar-event"></i>
                </div>
                <h3>{conference.title}</h3>
                <p>{conference.description}</p>
                {conference.organizer && (
                  <p>
                    <strong>Organizer:</strong> {conference.organizer.name}
                  </p>
                )}
                {conference.location && (
                  <p>
                    <strong>Location:</strong> {conference.location.city},{" "}
                    {conference.location.country}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Conferences;
