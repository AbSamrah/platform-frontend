import React, { useState, useEffect } from "react";

function Header() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }

    return () => {
      document.body.classList.remove("mobile-nav-active");
    };
  }, [isMobileNavOpen]);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a
          href="index.html"
          className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Shamamis</h1>
          <span>.</span>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#conferences">Conferences</a>
            </li>
            <li>
              <a href="#recent-posts">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="mobile-nav-toggle d-xl-none"
          onClick={toggleMobileNav}
          aria-label="Toggle navigation">
          <i className={isMobileNavOpen ? "bi bi-x" : "bi bi-list"}></i>
        </button>

        <a />
      </div>
    </header>
  );
}

export default Header;
