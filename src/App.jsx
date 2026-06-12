import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import TeamSection from "./components/TeamSection";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import BackToTop from "./components/BackToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import AOS from "aos";
import "aos/dist/aos.css";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  // ✅ safe initial theme load
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 🌙 Theme handler
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    document.body.classList.remove("dark-theme", "light-theme");
    document.body.classList.add(
      darkMode ? "dark-theme" : "light-theme"
    );
  }, [darkMode]);

  // 🎯 AOS Init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Page Content */}
      <div style={{ paddingTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={
              <>
                <About />
                <TeamSection />
              </>
            }
          />

          <Route path="/contact" element={<Contact />} />

          {/* ❗ 404 Route */}
          <Route
            path="*"
            element={
              <div
                style={{
                  textAlign: "center",
                  padding: "80px",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                404 - Page Not Found
              </div>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<Terms />} />
<Route path="*" element={<NotFound />} />
<Route path="/blogs" element={<Blogs />} />
<Route path="/blogs/:slug" element={<BlogDetail />} />
<Route path="/blogs" element={<Blogs />} />
<Route path="/blogs/:slug" element={<BlogDetail />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      {/* Back To Top */}
      <BackToTop />
      <ToastContainer />
      
    </>
  );
}

export default App;