// src/App.jsx
import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Courses from "./components/Courses";
import Conferences from "./components/Conferences";
import CallToAction from "./components/CallToAction";
import RecentPosts from "./components/RecentPosts";
import Footer from "./components/Footer";

// Make sure to import the main.js file if it's not already globally available
// If your bundler supports it, you can try: import '../public/assets/js/main.js';

function App() {
  useEffect(() => {
    // This function will run after the component mounts
    // and all the elements are in the DOM.
    // We can now safely initialize our template's scripts.

    // You might need to expose the functions from main.js to the global scope
    // or call them directly if your setup allows.
    // For now, let's assume they are available on the window object.

    if (window.AOS) {
      window.AOS.init();
    }

    // Add other initializations if needed, e.g., for Swiper, GLightbox, etc.
  }, []); // The empty array ensures this effect runs only once

  return (
    <div>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Courses />
        <Conferences />
        <CallToAction />
        <RecentPosts />
      </main>
      <Footer />
      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
      {/* The preloader is handled by CSS, ensure it's removed or hidden */}
      {/* <div id="preloader"></div> */}
    </div>
  );
}

export default App;
