import usercard from "../../assets/usercard.png";
import "../../index.css";
import { useNavigate } from "react-router-dom";

const UserId = [
  {
    userId: 1,
    profileImage: usercard,
    name: "Mercry Oloche",
    email: "mercy323r@gmail.com",
  },

];


const PropsCard = ({ userId, profileImage, name, email, onUpgradeClick }) => {
  return (
    <div className="pl-3 pr-3">
      <div key={userId} className="flex gap-5 w-auto mb-5">
        <img src={profileImage} alt={name} className="h-12 w-11" />
        <div className="">
          <h3 className="mb-1 text-white  md:w-auto text-base font-semibold opacity-90 ">
            {name}
          </h3>
          <p className="text-white text-xs font-medium opacity-90 w-full">
            {email}
          </p>
        </div>
      </div>

      <p className="text-white text-xs font-normal opacity-90 text-center">
        You’re currently on a free plan
      </p>
      <button
        onClick={onUpgradeClick}
        className="text-white text-xs font-medium w-40 opacity-90 text-center mt-6 bg-[#191E56] ml-4  hover:bg-opacity-50 transition-all transform p-3.5 rounded-lg">
        Upgrade plan
      </button>
    </div>
  );
};

const UserCard = () => {
  
  // Navigating to the pricing page\
  const navigate = useNavigate();

  const handlePricing = () => {
    const profile = "free";

    if (profile === "free") {
      navigate("/pricing");
    }
  };

  return (
    <section className="">
      <div className=" w-auto p-7 bg-indigo-800 bg-opacity-90 shadow-white shadow-sm">
        {UserId.map(({ userId, profileImage, name, email }) => (
          <PropsCard
            key={userId}
            userId={userId}
            profileImage={profileImage}
            name={name}
            email={email}
            onUpgradeClick={handlePricing}
          />
        ))}
      </div>
    </section>
  );
};

export default UserCard;