import '../../index.css'
import { useEffect, useState } from 'react';
import limitations from '../../assets/limitations.png'

const usablePrompts = [
  { id: 1, info: "May provide inaccurate answers sometimes." },
  { id: 2, info: "May provide inappropriate responses sometimes." },
  { id: 3, info: "Limited ability to provide in-depth analysis." },
  { id: 4, info: "Does not provides picture or video contents." },
];


const LimitationsItem = ({ info }) => {
  return (
    <div className="bg-white bg-opacity-5 text-white mb-5 w-64 p-5 hover:bg-opacity-15 rounded-xl">
      <button type="button" className="w-full text-sm text-left ">
        <a href="#">{info}</a>
      </button>
    </div>
  );
};







const LimitationCard = () => {

    const [shuffle, setShuffle] = useState([]);

    useEffect(() => {
        const myShuffle = [...usablePrompts];

        for (let i = myShuffle.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));

            const temp = myShuffle[i];
            myShuffle[i] = myShuffle[randomIndex];
            myShuffle[randomIndex] = temp;
        }
            setShuffle(myShuffle);

    }, []);

    


  return (
    <section className="bg-[#3C3B6C] text-center mt-5 w-72 h-auto ml-5 p-4 rounded-xl shadow-white">
      <div className="relative flex flex-col items-center mb-5">
        <img src={limitations} alt="limitations" className="text-center mb-5" />
        <h2 className="text-white font-semibold text-2xl">Limitations</h2>
      </div>

      <div>
        {shuffle.map(({ id, info }) => (
          <LimitationsItem key={id} info={info} />
        ))}
      </div>
    </section>
  );
}

export default LimitationCard