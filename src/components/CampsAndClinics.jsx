import React from "react";

export default function CampsAndClinics() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-heading text-center mb-10 text-redline">Camps & Clinics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-charcoal p-6 rounded shadow text-center">
          <h3 className="text-xl font-bold mb-4">Camps</h3>
          <p className="mb-4">
            Intensive summer and winter camps to build strong fundamentals, advanced skills, and teamwork.
          </p>
          <a
            href="https://www.redlinebasketballclub.com/announcements"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-redline text-white px-4 py-2 rounded hover:bg-red-700 transition inline-block"
          >
            View Camps
          </a>
        </div>
        <div className="bg-charcoal p-6 rounded shadow text-center">
          <h3 className="text-xl font-bold mb-4">Clinics</h3>
          <p className="mb-4">
            Specialized clinics focused on shooting, ball handling, defense, and basketball IQ throughout the year.
          </p>
          <a
            href="https://redlineathletics.com/forsyth-county/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-redline text-white px-4 py-2 rounded hover:bg-red-700 transition inline-block"
          >
            View Clinics
          </a>
        </div>
      </div>
    </section>
  );
}
