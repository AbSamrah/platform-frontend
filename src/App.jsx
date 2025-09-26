import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import RecentPosts from "./components/RecentPosts";
import Footer from "./components/Footer";

function App() {
  // This hook loads and runs the template's main JavaScript file
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // The empty dependency array ensures this runs only once

  return (
    <div>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <CallToAction />
        <RecentPosts />
      </main>
      <Footer />

      {/* These elements are used by the template's JS file */}
      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <div id="preloader"></div>
    </div>
  );
}

export default App;
