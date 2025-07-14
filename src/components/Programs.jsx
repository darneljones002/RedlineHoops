import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teamRosters = {
  "4th Grade 2033": [
    { name: "Ethan Smith", position: "Guard", number: 3 },
    { name: "Carter Webb", position: "Forward", number: 5 },
    { name: "Carter Bump", position: "Guard", number: 1 },
    { name: "Carter Copeland", position: "Center", number: 12 },
    { name: "Michael Carruthers", position: "Forward", number: 8 },
    { name: "Jaxon Madison", position: "Guard", number: 2 },
    { name: "Peyton Henson", position: "Forward", number: 6 },
    { name: "Cade Searl", position: "Center", number: 11 },
    { name: "Kaiden Sparks", position: "Guard", number: 4 },
    { name: "Wyatt Gordon", position: "Forward", number: 7 },
  ],
  "5th Grade 2032": [
    { name: "George Johnson", position: "Guard", number: 3 },
    { name: "Deegan Hooks", position: "Forward", number: 6 },
    { name: "Max Wallace", position: "Guard", number: 2 },
    { name: "Evan Turrentine", position: "Forward", number: 7 },
    { name: "Myles Brinson", position: "Center", number: 12 },
    { name: "Reese Hill", position: "Guard", number: 1 },
    { name: "William Daane", position: "Forward", number: 5 },
    { name: "Julian Alexander", position: "Guard", number: 4 },
    { name: "Camden May", position: "Forward", number: 8 },
    { name: "Alexander Samuels", position: "Center", number: 10 },
  ],
  "6th Grade 2031": [
    { name: "Jake Beasley", position: "Guard", number: 2 },
    { name: "Lincoln Brown", position: "Forward", number: 6 },
    { name: "George Hawkins", position: "Guard", number: 3 },
    { name: "Jalen Howard", position: "Forward", number: 7 },
    { name: "Aiden Odom", position: "Center", number: 12 },
    { name: "Gavin Phelps", position: "Guard", number: 1 },
    { name: "Joseph Samuels", position: "Forward", number: 5 },
    { name: "Finn Searl", position: "Guard", number: 4 },
    { name: "William Searl", position: "Forward", number: 8 },
    { name: "Tyler Welch", position: "Center", number: 11 },
  ],
  "7th Grade 2030": [
    { name: "Bryant Canales", position: "Guard", number: 3 },
    { name: "Tripp Copeland", position: "Forward", number: 6 },
    { name: "Charles Hill", position: "Guard", number: 2 },
    { name: "Brady Hooks", position: "Forward", number: 7 },
    { name: "Michael Johnson", position: "Center", number: 12 },
    { name: "Colin May", position: "Guard", number: 1 },
    { name: "Brooks Scott", position: "Forward", number: 5 },
    { name: "Noah Sparks", position: "Guard", number: 4 },
    { name: "William Searl", position: "Forward", number: 8 },
    { name: "Drew Turrentine", position: "Center", number: 10 },
  ],
  "8th Grade 2029": [
    { name: "Chase Brown", position: "Guard", number: 2 },
    { name: "Liam Canales", position: "Forward", number: 6 },
    { name: "Justin Copeland", position: "Guard", number: 3 },
    { name: "Gavin Gordon", position: "Forward", number: 7 },
    { name: "Camden Hill", position: "Center", number: 12 },
    { name: "William Johnson", position: "Guard", number: 1 },
    { name: "Caleb Madison", position: "Forward", number: 5 },
    { name: "Luke Samuels", position: "Guard", number: 4 },
    { name: "Brooks Searl", position: "Forward", number: 8 },
    { name: "Jackson Sparks", position: "Center", number: 11 },
  ],
  "9th Grade 2028": [
    { name: "Hudson Alexander", position: "Guard", number: 3 },
    { name: "Easton Brinson", position: "Forward", number: 6 },
    { name: "Colin Brown", position: "Guard", number: 2 },
    { name: "Will Copeland", position: "Forward", number: 7 },
    { name: "Tyler Johnson", position: "Center", number: 12 },
    { name: "Luke Madison", position: "Guard", number: 1 },
    { name: "Dylan May", position: "Forward", number: 5 },
    { name: "Landon Samuels", position: "Guard", number: 4 },
    { name: "Alex Searl", position: "Forward", number: 8 },
    { name: "Grant Sparks", position: "Center", number: 11 },
  ],
  "10th Grade 2027": [
    { name: "Hunter Alexander", position: "Guard", number: 2 },
    { name: "Brooks Canales", position: "Forward", number: 6 },
    { name: "Nathan Copeland", position: "Guard", number: 3 },
    { name: "Charlie Gordon", position: "Forward", number: 7 },
    { name: "Logan Johnson", position: "Center", number: 12 },
    { name: "Jack Madison", position: "Guard", number: 1 },
    { name: "Max May", position: "Forward", number: 5 },
    { name: "Ethan Samuels", position: "Guard", number: 4 },
    { name: "Hayden Searl", position: "Forward", number: 8 },
    { name: "Cade Sparks", position: "Center", number: 11 },
  ],
  "11th Grade 2026": [
    { name: "CJ Alexander", position: "Guard", number: 3 },
    { name: "Logan Brinson", position: "Forward", number: 6 },
    { name: "Drew Brown", position: "Guard", number: 2 },
    { name: "Brooks Copeland", position: "Forward", number: 7 },
    { name: "Ethan Gordon", position: "Center", number: 12 },
    { name: "Luke Hill", position: "Guard", number: 1 },
    { name: "AJ Madison", position: "Forward", number: 5 },
    { name: "Jacob May", position: "Guard", number: 4 },
    { name: "Sam Samuels", position: "Forward", number: 8 },
    { name: "Blake Sparks", position: "Center", number: 11 },
  ],
};


export default function TeamsSection() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teams = Object.keys(teamRosters);

  return (
    <>
      <h3 className="text-2xl font-bold mt-6 mb-6 text-center">Teams</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team} className="bg-charcoal p-6 rounded shadow text-center">
            <h4 className="text-xl font-bold mb-4">{team}</h4>
            <p className="mb-4">Competitive travel program for {team}. High-level coaching & tournaments.</p>
            <button
              onClick={() => setSelectedTeam(team)}
              className="bg-redline text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Roster
            </button>
          </div>
        ))}
      </div>
     <AnimatePresence>
          {selectedTeam && (
            <motion.div
              key="modal-container"
              className="fixed inset-0 z-50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                key="overlay"
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={() => setSelectedTeam(null)}
              />
              <motion.div
                key="modal"
                className="relative bg-charcoal p-6 rounded-lg shadow-lg max-w-lg w-full overflow-y-auto max-h-[80vh] text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}>
                <h3 className="text-2xl font-heading font-bold mb-4 text-redline">{selectedTeam} Roster</h3>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  {teamRosters[selectedTeam].map((player, i) => (
                    <li key={i}>
                      <span className="font-bold">#{player.number}</span> — {player.name} (<span className="italic">{player.position}</span>)
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedTeam(null)}
                  className="mt-4 bg-redline text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

    </>
  );
}
