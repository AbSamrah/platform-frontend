import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Courses from "./components/Courses";
import Conferences from "./components/Conferences";
import RecentPosts from "./components/RecentPosts";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const vendorScripts = [
      "/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
      "/assets/vendor/aos/aos.js",
      "/assets/vendor/swiper/swiper-bundle.min.js",
      "/assets/vendor/glightbox/js/glightbox.min.js",
      "/assets/vendor/purecounter/purecounter_vanilla.js",
      "/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js",
      "/assets/vendor/isotope-layout/isotope.pkgd.min.js",
    ];

    const mainScript = "/assets/js/main.js";
    const loadedScripts = [];

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = () => {
          loadedScripts.push(script);
          resolve();
        };
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      for (const scriptSrc of vendorScripts) {
        await loadScript(scriptSrc);
      }
      await loadScript(mainScript);
    };

    loadAllScripts();

    return () => {
      loadedScripts.forEach((script) => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Courses />
        <Conferences />
        <RecentPosts />
      </main>
      <Footer />
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
