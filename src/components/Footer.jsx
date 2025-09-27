import React from "react";

function Footer() {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4">
            <div className="footer-content">
              <a
                href="index.html"
                className="logo d-flex align-items-center mb-4">
                <span className="sitename">Shamamis</span>
              </a>
              <p className="mb-4">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae. Donec velit neque auctor sit amet aliquam
                vel ullamcorper sit amet ligula.
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-6">
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Shamamis</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
