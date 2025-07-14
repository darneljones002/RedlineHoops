import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Schedule() {
  const [activeGrade, setActiveGrade] = useState(null);

  const practiceInfo = [
    "Practices start the week of February 17th",
    "Monday - Redline Basketball at Jackson County - Jackson County players only - Legacy Knoll Middle School",
    "Tuesday - Grades 7th and 8th - Mt. Pisgah High Main Gym - 6pm-9pm",
    "Wednesday - Grades 4th, 5th, and 6th - Denmark High Main Gym - 6pm-9pm",
    "Thursday - Grades 9th and 10th - Mt. Pisgah High Main Gym",
    "** Under Armour teams will practice on the weekends starting first week of March. Please see 'High School UA Schedule' for more info.",
  ];

  const gradeSchedules = {
    "4th Grade": [
      "2/28-3/2 - NGS Who Got Next Tip Off",
      "3/7-3/9 - Tar Heels Sports March Madness",
      "3/21-3/23 - HoopSeen GA Cup",
      "4/11-4/13 - HoopSeen GA Cup II",
      "4/25-4/27 - HoopSeen GA Cup III",
      "5/9-5/11 - Halftime Sports",
      "Last tourney: 5/23-5/25 or 5/30-6/1",
    ],
    "5th Grade": [
      "2/28-3/2 - NGS Who Got Next Tip Off",
      "3/7-3/9 - Tar Heel Sports March Madness",
      "3/21-3/23 - HoopSeen GA Cup",
      "4/11-4/13 - HoopSeen GA Cup II",
      "4/25-4/27 - HoopSeen GA Cup III",
      "5/9-5/11 - Halftime Sports",
      "Last tourney: 5/23-5/25 or 5/30-6/1",
    ],
    "6th Grade": [
      "2/28-3/2 - NGS Who Got Next Tip Off",
      "3/28-3/30 - Halftime Sports",
      "4/18-4/20 - TarHeel Sports",
      "4/25-4/27 - Under Armour Futures - Session 1 - Hoover, AL",
      "5/9-5/11 - Under Armour Futures - Session 2 - Lakepoint",
      "5/23-5/25 - Halftime Sports",
      "5/29-6/1 - Tourney",
    ],
    "7th Grade": [
      "2/28-3/2 - NGS Who Got Next Tip Off",
      "3/15-3/16 - RYZE at Lakepoint",
      "3/21-3/23 - HoopSeen GA Cup",
      "4/11-4/13 - HoopSeen GA Cup II",
      "4/25-4/27 - Under Armour Futures - Session 1 - Hoover, AL",
      "5/10-5/11 - Under Armour Futures - Session 2 - Lakepoint",
      "Last tourney: 5/23-5/25 or 5/28-6/1",
    ],
    "8th Grade UA": [
      "2/28-3/2 - NGS Who Got Next Tip Off",
      "3/15-3/16 - RYZE at LakePoint",
      "3/21-3/23 - HoopSeen GA Cup",
      "4/11-4/13 - HoopSeen GA Cup II",
      "4/25-4/27 - Under Armour Futures - Session 1 - Hoover, AL",
      "5/10-5/11 - Under Armour Futures - Session 2 - LakePoint",
      "Last tourney: 5/23-5/25 or 5/28-6/1",
    ],
    "8th Grade Elite": [
      "3/8-3/9 - Tar Heel Sports March Madness",
      "3/21-3/23 - HoopSeen GA Cup",
      "3/28-3/30 - Halftime Sports",
      "4/18-4/20 - HoopSeen Spring Jam",
      "5/2-5/4 - HoopSeen/OTR Southeast Takeover",
      "5/16-5/18 - TarHeel Sports Battle at the Border",
      "5/24-5/25 - Halftime Sports",
    ],
    "8th Grade Premier": [
      "3/8-3/9 - Tar Heel Sports March Madness",
      "3/28-3/30 - Halftime Sports",
      "4/11-4/13 - Halftime Sports",
      "4/18-4/20 - Tar Heel Sports Border Wars",
      "5/2-5/4 - Tar Heel Sports Summer Jam",
      "5/16-5/18 - TarHeel Sports Battle at the Border",
      "5/24-5/25 - Halftime Sports",
    ],
    "9th Grade Elite": [
      "Same tourney schedule as UA teams - See UA drop down on main page",
      "Practices at Mt. Pisgah on Thursdays 6-9pm",
      "Only practices Thursday, not weekends",
    ],
    "10th Grade Elite": [
      "Same tourney schedule as UA teams - See UA drop down on main page",
      "Practices at Mt. Pisgah on Thursdays 6-9pm",
      "Only practices Thursday, not weekends",
    ],
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-black">
      <h2 className="text-3xl md:text-4xl font-heading text-redline mb-8 text-center uppercase">
        2025 Redline Basketball Spring Schedule
      </h2>

      <div className="bg-gray-100 p-6 rounded shadow mb-8">
        <h3 className="text-xl font-bold mb-4">Practice Information</h3>
        <ul className="list-disc list-inside space-y-2">
          {practiceInfo.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <h3 className="text-xl font-bold mb-4">Tournament Schedules by Grade</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(gradeSchedules).map((grade) => (
          <button
            key={grade}
            onClick={() => setActiveGrade(activeGrade === grade ? null : grade)}
            className={`px-4 py-2 rounded transition ${
              activeGrade === grade
                ? "bg-redline text-white"
                : "bg-gray-200 text-black hover:bg-redline hover:text-white"
            }`}
          >
            {grade}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeGrade && (
          <motion.div
            key={activeGrade}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-6 rounded shadow"
          >
            <h4 className="text-lg font-bold mb-4">{activeGrade} Schedule</h4>
            <ul className="list-disc list-inside space-y-2">
              {gradeSchedules[activeGrade].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-6 text-center text-sm italic text-gray-600">
        ** Under Armour team schedules are posted on the homepage under "2025 High School UA Schedule"
      </p>
    </section>
  );
}
