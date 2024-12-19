import usercard from "../../assets/usercard.png";
import "../../index.css";

const UserId = [
  {
    userId: 1,
    profileImage: usercard,
    name: "Mercry Oloche",
    email: "mercy323r@gmail.com",
  },

];


// I should add an input that parses the input in the login field to the usercard
// Then create two conditions that will be displayed if
// 1. The user have an account. it will print out the user details
// 2. The user is using a free version without login in but shows register and login

const PropsCard = ({ userId, profileImage, name, email }) => {
  return (
    <div className="border-2 border-gray w-80 h-auto mb-2 ml-5 p-4 bg-purple-900 bg-opacity-90 rounded-md font-serif">
      <div key={userId} className="flex gap-5 w-auto mb-5">
        <img src={profileImage} alt={name} className="h-12 w-11" />
        <div className="">
          <h3 className="mb-1 text-white w-auto text-base font-semibold opacity-90 ">
            {name}
          </h3>
          <p className="text-white text-xs font-medium opacity-90 ">{email}</p>
        </div>
      </div>

      <p className="text-white text-xs font-normal opacity-90 text-center">
        You’re currently on a free plan
      </p>
      <button className="text-white text-xs font-medium w-44 opacity-90 text-center mt-5 bg-[#191E56] ml-12  hover:bg-opacity-50 transition-all transform p-4 rounded-lg">
        Upgrade plan
      </button>
    </div>
  );
};

const UserCard = () => {
  return (
    <section className="">
      <div className="user-card-container">
        {UserId.map(({ userId, profileImage, name, email }) => (
          <PropsCard
            key={userId}
            userId={userId}
            profileImage={profileImage}
            name={name}
            email={email}
          />
        ))}
      </div>
    </section>
  );
};

export default UserCard;
