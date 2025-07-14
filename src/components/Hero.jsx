import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-basketball.jpg"

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white relative"
      style={{
        backgroundImage: {heroImage}, // <-- update with your image path
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-heading mb-6 text-redline drop-shadow-lg">
          Redline Basketball Club
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-lg">
          Elite player development and competitive travel basketball — powered by Under Armour.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://redlineathletics.com/forsyth-county/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-charcoal font-bold px-6 py-3 rounded hover:bg-gray-200 transition shadow"
          >
            Basketball Training
          </a>
          <a
            href="https://www.redlinebasketballclub.com/registration"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-redline text-white font-bold px-6 py-3 rounded hover:bg-red-700 transition shadow"
          >
            Register Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
