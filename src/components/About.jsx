import React from "react";
import aboutImage from "../assets/about.jpg";

export default function About() {
  return (
    <section className="py-16 px-6 md:px-20 text-center bg-white text-black">
      <h2 className="text-3xl md:text-4xl font-heading text-redline mb-6 uppercase">About Redline</h2>
      <p className="max-w-3xl mx-auto text-lg mb-8 text-left">
        Redline Basketball Club is a travel basketball organization whose top teams play on the Under Armour Futures and RISE circuits.
        <br /><br />
        All coaches are former Division I and college-level coaches. For the upcoming 2025 season, we will field teams for 4th through 11th grades, including dedicated teams in Jackson County for 6th, 7th, and 8th grades.
        <br /><br />
        We offer college-level practices, high-level player development, and personalized recruiting assistance. Coach Jay and Gordon Gibbons bring a combined 45 years of Division I college coaching experience and will directly support players in their college recruitment journey.
        <br /><br />
        Our teams participate in high-exposure tournaments designed to maximize visibility and opportunities for each player.
        <br /><br />
        Organization and communication are top priorities at Redline Basketball Club. We are a full organization—not just a travel basketball team. We focus on developing our own players and do not pick up guest players simply to win tournaments.
        <br /><br />
        Our program emphasizes dedication: if you don’t attend our two weekly practices, you don’t play. We are not here to chase weekend trophies; we are here to develop your son into the best player and person possible, ensuring an outstanding high school and college basketball experience.
      </p>

      <img src={aboutImage} alt="About" className="mx-auto rounded shadow-md max-w-full h-auto" />
    </section>
  );
}
