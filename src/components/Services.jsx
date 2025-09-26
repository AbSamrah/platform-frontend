import React from "react";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            Ea vitae aspernatur deserunt voluptatem impedit deserunt magnam
            occaecati dssumenda quas ut ad dolores adipisci aliquam.
          </p>
        </div>
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100">
            <div className="card">
              <div className="card-img">
                <img
                  src="/assets/img/services-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href="service-details.html" className="stretched-link">
                  Nesciunt Mete
                </a>
              </h3>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200">
            <div className="card">
              <div className="card-img">
                <img
                  src="/assets/img/services-2.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href="service-details.html" className="stretched-link">
                  Eosle Commodi
                </a>
              </h3>
              <p>
                Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                Libero corrupti neque eum hic non ut nesciunt dolorem.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300">
            <div className="card">
              <div className="card-img">
                <img
                  src="/assets/img/services-3.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href="service-details.html" className="stretched-link">
                  Ledo Markt
                </a>
              </h3>
              <p>
                Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus
                ea aut. Vel qui id voluptas adipisci eos earum corrupti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
