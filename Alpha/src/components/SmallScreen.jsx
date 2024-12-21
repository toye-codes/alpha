import "../index.css";
import capabilities from "../assets/capabilities.png";
import limitations from "../assets/limitations.png";
import prompt from "../assets/prompt.png";

const UsableProps = ({ id, name, image, query }) => {
  return (
    <div className=" m-5 p-4 rounded-xl  bg-indigo-800 bg-opacity-10 shadow-violet-50 shadow-sm">
      <div className="flex flex-row gap-5 mb-2">
        <img src={image} alt={name} className="w-10 h-10" />
        <p className="text-white text-base">{name}</p>
      </div>
      <p className="text-sm text-white text-left font-normal w-80">{query}</p>
    </div>
  );
};

const SmallScreen = () => {
  const autoPrompts = [
    {
      id: 1,
      name: "prompt",
      image: prompt,
      query:
        "What’s the fastest way to make money in 2024 without robbing a bank.",
    },
    {
      id: 2,
      name: "capabilities",
      image: capabilities,
      query:
        "Provide information and answer all questions, corrects grammar and errors.",
    },
    {
      id: 3, 
      name: "limitations",
      image: limitations,
      query:
        "Limited ability to provide in-depth analysis, feedback may be inaccurate.",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-10">
      {autoPrompts.map(({id, name, image, query}) => (
        <UsableProps
          key={id}
          id={id}
          name={name}
          image={image}
          query={query}
        />
      ))}
    </section>
  );
};

export default SmallScreen;
