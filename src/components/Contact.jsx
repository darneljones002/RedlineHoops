import React from "react";

export default function Contact() {
  return (
    <section className="py-16 px-6 md:px-20 text-center bg-gray-100 text-black">
      <h2 className="text-3xl md:text-4xl font-heading text-redline mb-6 uppercase">Get in Touch</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 rounded border border-gray-300" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded border border-gray-300" />
        <textarea placeholder="Message" className="w-full p-3 rounded border border-gray-300"></textarea>
        <button type="submit" className="w-full bg-redline hover:bg-red-700 text-white px-4 py-3 rounded font-bold">Submit</button>
      </form>
    </section>
  );
}
