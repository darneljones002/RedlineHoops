import React from "react";
import teamImage from "../assets/team.jpg";
import campImage from "../assets/camp.jpg";

export default function Programs() {
  const programList = [
    { title: "Teams", desc: "Elite year-round teams for different age levels.", img: teamImage },
    { title: "Camps", desc: "Seasonal camps focused on skill development.", img: campImage },
    { title: "Clinics", desc: "Specialized clinics to master specific skills.", img: campImage },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100 text-black">
      <h2 className="text-3xl md:text-4xl font-heading text-redline mb-10 text-center uppercase">Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programList.map((program, i) => (
          <div key={i} className="bg-white text-black p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <img src={program.img} alt={program.title} className="rounded mb-4 h-48 w-full object-cover" />
            <h3 className="text-xl font-bold mb-2">{program.title}</h3>
            <p>{program.desc}</p>
            <button className="mt-4 bg-redline hover:bg-red-700 text-white px-4 py-2 rounded">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
