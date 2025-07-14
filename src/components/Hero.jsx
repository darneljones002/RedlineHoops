import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-basketball.jpg";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <motion.h1
        className="relative text-5xl md:text-6xl font-heading uppercase text-redline"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Elevate Your Game
      </motion.h1>
      <motion.button
        className="relative mt-8 bg-redline hover:bg-red-700 px-8 py-4 rounded text-lg font-bold"
        whileHover={{ scale: 1.05 }}
      >
        Register Now
      </motion.button>
    </section>
  );
}
