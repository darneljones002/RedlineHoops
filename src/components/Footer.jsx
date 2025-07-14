import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import UA from "../assets/UA-logo.webp";
import RL from "../assets/redline-forsyth-logo.webp";
import BP from "../assets/bryan-properties-logo.webp";


export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-10 mt-12">
      <div className="container mx-auto px-6 text-center space-y-6">
        <h3 className="text-xl font-heading text-redline">
          Redline Basketball Club powered by Under Armour
        </h3>
        <p className="max-w-2xl mx-auto">
          We are proud members of the UA Rise and Futures Circuit.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://twitter.com/RedlineHoops"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-redline transition"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://instagram.com/RedlineBasketballClub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-redline transition"
          >
            <FaInstagram size={28} />
          </a>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-bold mb-4 text-redline">SPONSORS</h4>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <img
                src={RL}
                alt="Redline Athletics Forsyth"
                className="h-16 object-contain"
              />
              <span className="mt-2 text-sm">Redline Athletics Forsyth</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={UA}
                alt="Under Armour"
                className="h-16 object-contain"
              />
              <span className="mt-2 text-sm">Under Armour</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={BP}
                alt="Bryan Properties"
                className="h-16 object-contain"
              />
              <span className="mt-2 text-sm">Bryan Properties</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Redline Basketball Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
