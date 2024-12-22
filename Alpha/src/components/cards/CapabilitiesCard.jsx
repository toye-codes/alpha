import React, { useState, useEffect } from "react";
import "../../index.css";
import capabilities from "../../assets/capabilities.png";
import { memo } from "react";



const usablePrompts = [
  { id: 1, info: "Provide information and answer all questions." },
  { id: 2, info: "All Grammar corrections and Language translations." },
  { id: 3, info: "Retains previous user input during conversations." },
  { id: 4, info: "Auto generates similar information and includes references."},
];


const CapabilitiesItem = ({ info }) => {
  return (
    <div className="bg-white bg-opacity-5 text-white mb-5 w-64 p-5 hover:bg-opacity-15 rounded-xl">
      <button type="button" className="w-full text-sm text-left ">
        <a href="#">{info}</a>
      </button>
    </div>
  );
};

const CapabilitiesCard = () => {
  const [shuffled, setShuffled] = useState([]);
  const [switchScreen, setSwitchScreen] = useState()

  useEffect(() => {
    // Create a copy of the prompts to shuffle
    const myPrompt = [...usablePrompts];

    // Fisher-Yates Shuffle Algorithm
    for (let i = myPrompt.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      // Swap elements at i and randomIndex
      const temp = myPrompt[i];
      myPrompt[i] = myPrompt[randomIndex];
      myPrompt[randomIndex] = temp;
    }

    // Update the state with the shuffled array
    setShuffled(myPrompt);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section className="bg-indigo-900 bg-opacity-90 text-center mt-5 w-72 h-auto ml-5 p-4 rounded-xl shadow-white">
      <div className=" flex flex-col items-center mb-5">
        <img
          src={capabilities}
          alt="Capabilities"
          className="text-center mb-5"
        />
        <h2 className="text-white font-semibold text-2xl">Capabilities</h2>
      </div>

      <div>
        {shuffled.map(({ id, info }) => (
          <CapabilitiesItem key={id} info={info} />
        ))}
      </div>
    </section>
  );
};

export default memo(CapabilitiesCard);
