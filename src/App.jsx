import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import Schedule from "./components/Schedule";
import Coaches from "./components/Coaches";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CampsAndClinics from "./components/CampsAndClinics.jsx"

function App() {
  return (
    <div className="font-sans bg-black text-white">
      <Hero />
      <About />
      <CampsAndClinics/>
      <Programs />
      <Testimonials />
      <Schedule />
      <Coaches />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
