import React, { useState } from "react";
import { motion } from "framer-motion";

// Import coach images
import jayImg from "../assets/coaches/jay.webp";
import gordonImg from "../assets/coaches/gordon.webp";
import brianImg from "../assets/coaches/brian.webp";
import danImg from "../assets/coaches/dan.webp";
import ryanImg from "../assets/coaches/ryan.webp";
import seanImg from "../assets/coaches/sean.webp";
import djImg from "../assets/coaches/dj.webp";
import devinImg from "../assets/coaches/devin.webp";
import dylanImg from "../assets/coaches/dylan.webp";
import brevinImg from "../assets/coaches/brevin.webp";
import cameronImg from "../assets/coaches/cameron.webp";
import thomasImg from "../assets/coaches/thomas.webp";
import caraImg from "../assets/coaches/Cara.webp";

export default function Coaches() {
  const [openModal, setOpenModal] = useState(null);

  const coaches = [
    {
      name: "Brian Burns",
      role: "Director of Basketball Operations | GM",
      desc: "Oversees all operational aspects of Redline, manages team logistics, and ensures program excellence.",
      img: brianImg,
    },
    {
      name: "Jay Gibbons",
      role: "Program Director | Head Coach",
      desc: "Leads program vision and player development. Former D1 coach with extensive experience at the highest levels.",
      img: jayImg,
      fullBio: (
        <>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Played at Newberry College and Presbyterian College</li>
            <li>20 years of college coaching experience at Presbyterian College, Charleston Southern, Jacksonville University, and University of North Florida</li>
            <li>Coached over 30 professional players</li>
            <li>Worked with NBA players including Steph Curry, Zach LaVine, Mason Plumlee, Josh Hart, Dwayne Bacon, and more</li>
            <li>Started Redline Basketball Club in 2019</li>
            <li>Worked with the highest level of youth basketball in the country including the EYBL and UA circuits</li>
          </ul>
        </>
      ),
    },
    {
      name: "Gordon Gibbons",
      role: "Coach | Practice Coordinator",
      desc: "Coordinates practice plans and on-court strategy, bringing decades of coaching expertise.",
      img: gordonImg,
      fullBio: (
        <>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Over 25 years of NCAA Division I and II head coaching experience</li>
            <li>All-time winningest coach in Florida Southern College history</li>
            <li>Achieved over 500 career wins and multiple conference championships</li>
            <li>Led teams to eight NCAA Tournament appearances, including three Elite Eight trips</li>
            <li>Developed numerous all-conference and All-American players</li>
            <li>Dedicated to helping student-athletes succeed on and off the court through leadership and mentorship</li>
          </ul>
        </>
      ),
    },
    {
      name: "Dan Searl",
      role: "High School Coach",
      desc: "Guides high school teams with a focus on fundamentals, team play, and competitive growth.",
      img: danImg,
    },
    {
      name: "Ryan Jenei",
      role: "High School Coach | Assistant GM",
      desc: "Supports high school team development and assists with program management and recruitment.",
      img: ryanImg,
    },
    {
      name: "Sean Davy",
      role: "Middle School Director | Coach",
      desc: "Leads middle school program structure, focusing on skill development and foundational growth.",
      img: seanImg,
    },
    {
      name: "DJ Jones",
      role: "Middle School Coach - 2033",
      desc: "Coaches middle school players with an emphasis on teamwork, discipline, and early player development.",
      img: djImg,
    },
    {
      name: "Devin Stowers",
      role: "Coach",
      desc: "Dedicated to supporting individual player improvement and fostering a competitive mindset.",
      img: devinImg,
    },
    {
      name: "Dylan Pumpian",
      role: "Coach",
      desc: "Focuses on player growth and fundamental skills, bringing energy and leadership to every session.",
      img: dylanImg,
    },
    {
      name: "Brevin Klym",
      role: "Coach",
      desc: "Passionate about developing well-rounded athletes through structured training and mentorship.",
      img: brevinImg,
    },
    {
      name: "Cameron Wallace",
      role: "Skills Trainer / Player Development / Scouting",
      desc: "Specializes in individual skill training, advanced player development, and talent identification.",
      img: cameronImg,
    },
    {
      name: "Thomas Jenei",
      role: "Head of Strength and Conditioning",
      desc: "Leads all strength and conditioning programs to maximize athletic performance and prevent injuries.",
      img: thomasImg,
    },
    {
      name: "Cara Getter",
      role: "Director of Travel",
      desc: "Manages travel logistics and ensures smooth operations for tournaments and events.",
      img: caraImg,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-heading text-redline mb-10 text-center uppercase">Coaches & Staff</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coaches.map((coach, i) => (
          <motion.div
            key={i}
            className="bg-charcoal p-6 rounded shadow relative flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <img
              src={coach.img}
              alt={coach.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-redline"
            />
            <h3 className="text-xl font-bold text-redline">{coach.name}</h3>
            <p className="italic">{coach.role}</p>
            <p className="mt-4">{coach.desc}</p>
            {coach.fullBio && (
              <button
                onClick={() => setOpenModal(coach.name)}
                className="mt-4 bg-redline hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Read More
              </button>
            )}

            {openModal === coach.name && (
              <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
                <div className="bg-white text-black p-6 rounded max-w-lg w-full relative overflow-y-auto max-h-[90vh]">
                  <h3 className="text-xl font-bold mb-4">{coach.name} - Full Bio</h3>
                  <div>{coach.fullBio}</div>
                  <button
                    onClick={() => setOpenModal(null)}
                    className="absolute top-2 right-2 text-black text-2xl font-bold"
                  >
                    &times;
                  </button>
                  <button
                    onClick={() => setOpenModal(null)}
                    className="mt-6 bg-redline hover:bg-red-700 text-white px-4 py-2 rounded w-full"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
