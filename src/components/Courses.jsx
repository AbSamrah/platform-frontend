// src/components/Courses.jsx
import React, { useState, useEffect } from "react";
import apiClient from "../Api";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    apiClient
      .get("/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  }, []);

  return (
    <section id="courses" className="courses section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Courses</h2>
        <p>Explore our available courses</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {courses.map((course, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              key={course.id}>
              <div className="service-item item-orange position-relative">
                <div className="icon">
                  <i className="bi bi-book"></i>
                </div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <p>
                  <strong>Start Date:</strong>{" "}
                  {new Date(course.startDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>End Date:</strong>{" "}
                  {new Date(course.endDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses; // <-- Make sure this line exists
