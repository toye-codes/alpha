import "../../index.css";
import { useEffect, useState } from "react";
import prompt from "../../assets/prompt.png";

const usablePrompts = [
  { id: 1, info: "“What’s the fastest way to make money in 2024”" },
  { id: 2, info: "“Generate a content calendar for me on LinkedIn”" },
  { id: 3, info: "“How to prepare Nigerian jollof rice from start to end”" },
  { id: 4, info: "“Tell me the history of the big bang theory”" },
];

const PromptsItem = ({ info }) => {
  return (
    <div className="bg-white bg-opacity-5 text-white mb-5 w-64 p-5 hover:bg-opacity-15 rounded-xl">
      <button type="button" className="w-full text-sm text-left">
        <a href="#">{info}</a>
      </button>
    </div>
  );
};

const PromptsCard = () => {
  const [shuffle, setShuffle] = useState([]);

  useEffect(() => {
    const myShuffle = [...usablePrompts];

    // Fix shuffle logic
    for (let i = myShuffle.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = myShuffle[i];
      myShuffle[i] = myShuffle[randomIndex];
      myShuffle[randomIndex] = temp;
    }

    setShuffle(myShuffle);
  }, []);

  return (
    <section className="bg-[#3C3B6C] text-center mt-5 w-full max-w-[290px] h-auto ml-5 p-4 rounded-xl shadow-lg">
      <div className="relative flex flex-col items-center mb-5">
        <img
          src={prompt}
          alt="prompt"
          className="text-center mb-5 w-10 h-20 object-contain"
        />
        <h2 className="text-white font-semibold text-2xl">Prompts</h2>
      </div>

      <div>
        {shuffle.map(({ id, info }) => (
          <PromptsItem key={id} info={info} />
        ))}
      </div>
    </section>
  );
};

export default PromptsCard;
