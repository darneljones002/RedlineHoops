import React from "react";

export default function Schedule() {
  const events = [
    { date: "July 20", title: "Summer Camp Begins" },
    { date: "August 5", title: "Team Tryouts" },
    { date: "September 1", title: "Fall League Kickoff" },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100 text-black">
      <h2 className="text-3xl md:text-4xl font-heading text-redline mb-10 text-center uppercase">Schedule</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {events.map((e, i) => (
          <div key={i} className="border border-redline p-4 rounded shadow">
            <h3 className="text-xl font-bold">{e.date}</h3>
            <p>{e.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
