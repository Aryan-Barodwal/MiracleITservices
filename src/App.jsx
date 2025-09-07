import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home } from "../src/components/Index";
import "./App.css";
import ChatB from "../src/components/Home/chatB/ChatBot.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Services from "./components/Services/Services.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import toast, { Toaster } from "react-hot-toast";
import GradientText from "./components/OGL/GradientText.jsx";

import Privacy from "./components/PrivacyPolicyPage.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0); // Ensure top on initial load
    }, 800); // 0.8s delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen min-h-screen bg-black text-white">
        <h2 className="text-2xl animate-pulse">
          {" "}
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            Loading...
          </GradientText>
        </h2>
      </div>
    );
  }



  return (
    <>
      <Toaster />
      <Navbar />
      <ChatB />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/privacypolicy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}
